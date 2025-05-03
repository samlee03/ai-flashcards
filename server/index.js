import express from "express";
import cors from 'cors'
import dotenv from 'dotenv'

import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(express.json()); 
app.use(cors());

const ai = new GoogleGenAI({ apiKey: process.env.GENAI_API_KEY });

const port = 5000;

app.get('/', (req, res) => {
    res.send('Test');
})

app.post('/api/generate-by-topic', async (req, res) => {
    let topic = req.body.topic
    let instructions = `Return ONLY in the following format without supplementary text (max of 20 items): [{term: "word1", definition: "word 1 is a ..."}, {..}, {..}, ...] Return me this object based on terms and definitions of this topic: ${topic}.`;
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: instructions,
    });

    const cleanJsonString = response.candidates[0].content.parts[0].text.replace(/^```json\n|\n```$/g, '').trim();
    
    const data = JSON.parse(cleanJsonString);
    res.send(data);
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})