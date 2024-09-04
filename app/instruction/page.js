"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Instruction(props) {
  const searchParams = useSearchParams();
  const questionId = searchParams?.get("questionId");
  return (
    <main className='bg-blue-900 min-h-screen text-white flex items-center justify-center'>
      <div className='bg-blue-900 rounded-md border border-blue-800 p-8 max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold mb-8 text-center'>Quiz Instructions</h1>
        <ul className='list-disc pl-6 text-2xl mb-10'>
          <li>Read each question carefully before answering.</li>
          <li>Select the correct answer from the choices provided.</li>
        <li>You have a total of 2 minutes to complete the quiz.</li>
        <li>Click "Next" to move to the next question and "Previous" to go back.</li>
        </ul>
        <div className='flex justify-center mt-10'>
          <Link href={`/quiz?questionId=${questionId}`}>
            <button className='bg-blue-500 hover:bg-blue-600 text-white text-2xl py-4 px-8 rounded-md'>
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

