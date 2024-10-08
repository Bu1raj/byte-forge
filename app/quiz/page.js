'use client';
import React, { useState, useEffect } from 'react';
import { labData } from '../consts';
import { useSearchParams } from 'next/navigation.js';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Fan } from 'lucide-react';

const QuizPage = () => {

  const searchParams = useSearchParams();
  const qID = searchParams?.get("questionId");
  let exptList = labData.experimentsList;
  let selectedExperiment = exptList.find((experiment) => experiment.id === qID)
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(4).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [questions, setQuestions] = useState([]);
  const [time, setTime] = useState(120); // 2 minutes in seconds
  useEffect(() => {
    const selectRandomQuestions = () => {
      // console.log(selectedExperiment, exptTitle);
      let selectedQuestions = selectedExperiment.quiz.questions;
      return selectedQuestions.map((question) => ({
        ...question,
        correctAnswerIndex: question.options.findIndex((ans) => ans === question.correctAnswer),
      }));
    };

    const randomQuestions = selectRandomQuestions();
    setQuestions(randomQuestions);
  }, []);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setShowResult(true);
    }
  }, [time]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const { question, options, correctAnswerIndex } = questions[activeQuestion];

  const onAnswerSelected = (answer, idx) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[activeQuestion] = idx;
    setSelectedAnswers(newSelectedAnswers);
    setSelectedAnswerIndex(idx);
    const isCorrect = idx === correctAnswerIndex;
    setResult((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      wrongAnswers: !isCorrect ? prev.wrongAnswers + 1 : prev.wrongAnswers,
    }));
    setShowResult(false);
  };

  const nextQuestion = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
      setSelectedAnswerIndex(selectedAnswers[activeQuestion + 1]);
    } else {
      setShowResult(true);
    }
  };

  const previousQuestion = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
      setSelectedAnswerIndex(selectedAnswers[activeQuestion - 1]);
    }
  };

  const home = () => {
    window.location.href = '/dashboard';
  };

  return (
    <div className='bg-background min-h-screen text-white'>
      <div className='text-center py-6 mb-4'>
        <h1 className='text-3xl font-medium text-white pt-4'>{selectedExperiment.title}</h1>
      </div>
      <div className='relative container max-w-4xl mx-auto px-4 py-16'>
        {!showResult && (
          <>
            <div className='bg-background rounded-md p-4'>
              <div className='relative mb-4'>
                <h2 className='text-lg'>
                  Question: {activeQuestion + 1}
                  <span>/{questions.length}</span>
                </h2>
                <span className='absolute top-2 right-4 text-lg font-bold'>
                  {formatTime(time)}
                </span>
              </div>
              <div className='bg-background rounded border border-border p-4 mb-4'>
                <h3 className='text-xl mb-6'>{question}</h3>
                {options.map((answer, idx) => (
                  <div
                    key={idx}
                    onClick={() => onAnswerSelected(answer, idx)}
                    className={`py-2 px-4 mb-3 cursor-pointer border border-secondary rounded flex items-center justify-between ${
                      selectedAnswerIndex === idx ? 'bg-secondary text-black' : 'hover:bg-secondary hover:text-black'
                    }`}
                  >
                    <span className=''>{answer}</span>
                    {selectedAnswerIndex === idx && (
                      <span className='text-green-600'>&#10004;</span>
                    )}
                  </div>
                ))}
              </div>
              <div className='flex justify-between items-center'>
                <button
                  onClick={previousQuestion}
                  disabled={activeQuestion === 0}
                  className='btn w-32 bg-tertiary hover:opacity-80 text-black font-semibold py-2 px-4 rounded mt-4 flex items-center justify-center'
                >
                  <FaAngleLeft size={20} className='mr-2' />
                  Previous
                </button>
                <button
                  onClick={nextQuestion}
                  disabled={selectedAnswerIndex === null}
                  className={`btn ${selectedAnswerIndex !== null ? 'bg-tertiary hover:opacity-80' : 'bg-tertiary opacity-70 cursor-not-allowed'} w-32 text-black py-2 px-4 font-semibold rounded mt-4 flex items-center justify-center`}
                >
                  Next
                  <FaAngleRight size={20} className='ml-2' />
                </button>
              </div>
            </div>
          </>
        )}
        {showResult && (
          <div className='bg-background rounded-md p-4 mt-4 flex'>
            {/* Right Container */}
            <div className='flex-1 bg-background rounded-xl border-2 border-border p-6 flex flex-col gap-2 items-center'>
              <h3 className='text-2xl mb-4'>Quiz Results</h3>
              <div className='w-full max-w-md mb-4'>
                <div className='flex justify-between mb-4'>
                  <span>Total Correct:</span>
                  <span>{result.correctAnswers}</span>
                </div>
                <div className='flex justify-between mb-4'>
                  <span>Total Wrong:</span>
                  <span>{result.wrongAnswers}</span>
                </div>
                <div className='flex justify-between mb-4'>
                  <span>Total Questions:</span>
                  <span>{questions.length}</span>
                </div>
                <div className='relative pt-1'>
                  <div className='flex mb-4 items-center justify-between'>
                    <span>Score:</span>
                    <span>{result.score}/{questions.length}</span>
                  </div>
                  <div className='bg-gray-300 rounded-full w-full max-w-md h-12'>
                    <div
                      className='bg-blue-500 text-xs font-medium text-blue-100 text-center leading-none rounded-full h-full'
                      style={{ width: `${(result.score / questions.length) * 100}%` }}
                    >
                      &nbsp;
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={home} className='btn bg-secondary hover:opacity-90 font-semibold text-black py-2 px-4 rounded mt-4'>
                Home
              </button>
            </div>

            {/* Left Container */}
            <div className='flex-1 bg-background rounded-xl border-2 border-border p-6 ml-4'>
              <h3 className='text-2xl mb-4'>Results Detail</h3>
              {questions.map((q, index) => (
                <div key={index} className='flex items-center justify-between border-b border-border py-2'>
                  <div>
                    <p className='text-xl'>Question {index + 1}</p>
                    {selectedAnswers[index] !== null && (
                      selectedAnswers[index] === q.correctAnswerIndex ? (
                        <span className='text-green-500 ml-2'>&#10004;</span>
                      ) : (
                        <span className='text-red-500 ml-2'>&#10006;</span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
