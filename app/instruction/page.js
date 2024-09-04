"use client"
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Instruction(props) {
  const searchParams = useSearchParams();
  const questionId = searchParams?.get("questionId");
  return (
    <div className='bg-background min-h-screen flex items-center justify-center'>
      <div className='bg-background rounded-xl border border-border p-8 max-w-4xl mx-auto'>
        <h1 className='text-3xl font-semibold mb-8 text-center'>Quiz Instructions</h1>
        <ul className='list-disc pl-6 text-xl mb-10 flex flex-col gap-4'>
          <li>Read each question carefully before answering.</li>
          <li>Select the correct answer from the choices provided.</li>
          <li>You have a total of 2 minutes to complete the quiz.</li>
          <li>Click "Next" to move to the next question and "Previous" to go back.</li>
        </ul>
        <div className='flex justify-center mt-10'>
          <Link href={`/quiz?questionId=${questionId}`}>
            <button className='bg-tertiary hover:opacity-80 text-black font-medium text-xl p-2 px-4 rounded'>
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

