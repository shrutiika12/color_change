import { useState } from 'react'


import './App.css'

function App() {
  const [color, setColor] = useState('lavender')

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className='flex flex-wrap fixed justify-center bottom-12 px-130'>
          <div className='flex flex-wrap bg-amber-50 gap-5 p-4 rounded-xl'>
            <button onClick={() => {
              setColor('red')
            }} className='bg-red-500  text-amber-50 p-2 rounded-xl'>RED</button>
            <button onClick={() => {
              setColor('green')
            }}
              className='bg-green-500  text-amber-50 p-2 rounded-xl'>GREEN</button>
            <button onClick={() => {
              setColor('blue')
            }} className='bg-blue-500  text-amber-50 p-2 rounded-xl'>BLUE</button>
            <button onClick={() => {
              setColor('black')
            }} className='bg-black text-amber-50 p-2 rounded-xl'>BLACK</button>
            <button onClick={() => {
              setColor('purple')
            }} className='bg-purple-500  text-amber-50 p-2 rounded-xl'>PURPLE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
