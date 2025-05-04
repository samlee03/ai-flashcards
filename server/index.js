const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');
const { GoogleGenAI } = require("@google/genai");

dotenv.config();
console.log(process.env.GENAI_API_KEY)

const app = express();
app.use("/", express.static("public"));
app.use(express.json()); 
app.use(cors());

app.use(fileUpload())


const ai = new GoogleGenAI({ apiKey: process.env.GENAI_API_KEY });
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Test');
})

app.post('/api/generate-by-topic', async (req, res) => {
    let topic = req.body.topic
    let instructions = 
        `
        Return ONLY in the following format (max of 20 items): 
        [{term: "word1", definition: "word1 is a ..."}, {term: "word2", definition: "..."}, ...]

        Randomly generate key terms and definitions based on the topic: "${topic}".
        It should DIRECLTY relate or is a subset of the topic. 
        Avoid repeating the exact same items if the request is made again. 
        Difficulty should be easy-intermediate.

        Do NOT include any explanation or extra text.

        Random seed for variation: ${Math.floor(Math.random() * 10000)}
        `;
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: instructions,
    });
    const cleanJsonString = response.candidates[0].content.parts[0].text.replace(/^```json\n|\n```$/g, '').trim();
    
    const data = JSON.parse(cleanJsonString);
    res.send(data);
})
app.post('/api/generate-by-file', async (req, res) => {
    if (!req.files) {
        return res.status(400).send('No file uploaded');
    }
    const result = await pdfParse(req.files.file);
    const text = result.text;
    
    let instructions = `
        Extract key terms and their definitions from the following text. 
        Return ONLY in the exact JSON format (max 20 items): 
        [{term: "word1", definition: "word1 is a ..."}, {term: "word2", definition: "..."}, ...]

        Do NOT include any introduction, explanation, or formatting other than this array of objects.

        Only include terms that are clearly relevant and identifiable in the source text. 
        If definitions are implied or require slight inference, that is acceptable. 

        Text:
        ${text}
        `;
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: instructions,
    });

    const cleanJsonString = response.candidates[0].content.parts[0].text.replace(/^```json\n|\n```$/g, '').trim();
    
    const data = JSON.parse(cleanJsonString);
    res.send(data);
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})