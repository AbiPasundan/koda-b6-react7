import { useRef, useState } from 'react'

function Header() {
  return (
    <section className="flex flex-row justify-between items-center p-5 bg-purple-400">
      <div>Brand</div>
      <h1>Website Todo</h1>
    </section>
  )
}

function ButtonNewTask() {
  // const intervalId = intervalRef.current;
  // const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const toggleShow = () => {
    setIsOpen(!isOpen)
    console.log("berhasils");
  }
  return <div onClick={() => toggleShow(true)} className="absolute left-50 -top-5 bg-purple-400 p-3 rounded-full">New Task</div>
}

function NotedTodo({title, children}) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  )
}

function Todo() {
  return (
      <section className="flex flex-col gap-5 bg-red-50 px-5 py-10 relative">
        <NotedTodo title="Completed" >
          <div className="flex flex-row gap-5 accent-purple-400 [&>input]:w-10 [&>input]:hover:accent-purple-700 ">
            <input type="checkbox" name="todo" id="todo" />
            <label htmlFor="todo">Style creation</label>
          </div>
        </NotedTodo>
        <ButtonNewTask />
      </section>
  )
}

function Modal() {
  return (
    <>
      <section className={"z-100 bg-purple-500 w-122 h-30 top-10 absolute text-white text-center"+{isOpen}}>
        <h1 className="py-5">Input Form</h1>
        <label htmlFor="form" className="border border-1 border-black  py-3 px-5">
          <input type="text" name="form" id="form" placeholder="Mau ngerjain apa?" className="border-none outline-none" />
          <input type="submit" name="button" id="button" placeholder="Mau ngerjain apa?" className="border-none outline-none" />
        </label>
      </section>
    </>
  )
}

function App() {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const toggleShow = () => {
    setIsOpen(!isOpen)
    console.log("berhasils");
  }
  return (
    <>
      <main className="flex flex-col gap-13 relative my-32 mx-auto max-w-[50%]">
        <Header onClick={() => toggleShow(true)} />
        <h1 onClick={() => toggleShow(true)} >Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam unde sunt architecto, iure voluptatibus id. Veritatis quia sapiente, veniam expedita dicta dignissimos cum sequi, similique tempora delectus neque ipsam voluptate?</h1> 
        <Todo />
      </main>
    </>
  );
}

export default App;
