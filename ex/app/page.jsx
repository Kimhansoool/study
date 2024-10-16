'use client';

import { useContext, useEffect, useReducer, useState } from 'react';
import Form from './components/Form';
import Timer from '@/app/components/Timer';
import Reducer from '@/app/components/Reducer';
import StateUpdate from '@/app/components/State-update';
import Reverse from '@/app/components/reverse';
import BucketList from './components/Bucketlist';
import { ContextProvider, useCustomHook } from '@/app/provider';
import Link from 'next/link';

let statuses = ['empty', 'typing', 'submitting', 'success', 'error'];

export default function Page() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing'); // 'typing', 'submitting', or 'success'

  const [showB, setShowB] = useState(true);
  const [showTimer, setShowTimer] = useState(false);

  const { data } = useCustomHook();
  console.log(data);

  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className="bg-slate-100">
      <div className="max-w-[1400px] mx-auto py-[100px]">
        <BucketList />

        <Link href={'/blog'}>blog로 이동</Link>
        {/* <div className="m-4 bg-yellow-50">
          {showTimer && <Timer />}
          <button onClick={() => setShowTimer(!showTimer)}>Toggle</button>
        </div> */}
        {/* <>
          <h2>City quiz</h2>
          <p>In which city is there a billboard that turns air into drinkable water?</p>
          <form onSubmit={handleSubmit}>
            <textarea value={answer} onChange={handleTextareaChange} disabled={status === 'submitting'} />
            <br />
            <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
            {error !== null && <p className="Error">{error.message}</p>}
          </form>
        </>
      </div>

      <div>
        <Counter />
        {showB && <Counter />}
        <label>
          <input
            type="checkbox"
            checked={showB}
            onChange={(e) => {
              setShowB(e.target.checked);
            }}
          />
          Render the second counter
        </label> */}
      </div>
    </div>
  );
}

function submitForm(answer) {
  // 네트워크에 접속한다고 가정해봅시다.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div className={className} onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>Add one</button>
    </div>
  );
}
