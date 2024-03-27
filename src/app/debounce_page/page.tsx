'use client'
import { debounce } from '@/utils/debounce.js'
import { useState } from 'react';

export default function Debounce() {

  const [count, setCount] = useState(0)

  const handleClick = debounce(() => {
    setCount(count + 1)
  }, 300)

  return (
    <div className='mx-auto mt-20'>
      <button onClick={handleClick} className='p-5 bg-slate-500 hover:bg-slate-800 duration-300 rounded-xl'> Click </button>
      <p className='mt-5'>觸發了{count}次</p>
    </div>
  );
}