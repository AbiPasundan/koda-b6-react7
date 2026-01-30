import { useState, useRef } from 'react'

function App() {
  const formInputRef = useRef(null)

  const [isOpen, setIsOpen] = useState(false)
  const toggleShow = () => {
    setIsOpen(prev => !prev)
    if (!isOpen) {
      setTimeout(() => formInputRef.current?.focus(), 0)
    }
  }
  return (
    <>
      <main className="flex flex-col gap-13 relative my-32 mx-auto max-w-[50%]">
        {/* title */}
        <section className="flex flex-row justify-between items-center p-5 bg-purple-400">
         <div>Brand</div>
         <h1>Website Todo</h1>
        </section>
        {/* main kontent */}
        <section className="flex flex-col gap-5 bg-red-50 px-5 py-10 relative">
          <h1>Todo</h1>
            <div className="flex flex-row gap-5 items-center accent-purple-400 [&>input]:w-10 [&>input]:hover:accent-purple-700">
              <input type="checkbox" />
              <label className='line-through text-gray-500'>
                Style creation
              </label>
              <button  className="ml-auto text-red-500 hover:text-red-700" >
                Delete
              </button>
            </div>
         <div onClick={toggleShow} className="absolute cursor-pointer left-0 -top-10 bg-purple-400 p-3 rounded-full">New Task</div>
        </section>
        {/* modal */}
        <section className={`${isOpen ? 'block' : 'hidden'} z-100 bg-purple-500 w-122 h-30 top-50 absolute text-white text-center`}>
         <h1 className="py-5">Input Form</h1>
         <form className="border border-1 border-black py-3 px-5">
           <input 
             type="text" 
             placeholder="Mau ngerjain apa?" 
             className="border-none outline-none bg-transparent text-white placeholder-white" 
           />
           <button type="submit" className="ml-2 bg-white text-purple-500 px-3 py-1 rounded">Submit</button>
         </form>
        </section>
      </main>
    </>
  );
}

export default App;
