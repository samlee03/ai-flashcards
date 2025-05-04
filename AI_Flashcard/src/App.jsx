
import './App.css'
import Home_Page from './HomePage/Home_Page.jsx'
import { Routes, Route } from 'react-router-dom'
import FlashCardPage from './FlashCardPage/FlashCardPage.jsx';
import QuizPage from './QuizPage/QuizPage.jsx';

import { useState } from 'react';

function App() {


  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Home_Page/>}></Route>
        <Route path={'/flashcard'} element={<FlashCardPage/>}></Route>
        <Route path={'/quizpage'} element={<QuizPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App
