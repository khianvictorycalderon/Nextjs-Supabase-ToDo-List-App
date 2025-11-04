`use client`;

export default function App() {
  return (
    <div className="bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold text-center pt-4">ToDo List App</h1>
      <h2 className="text-2xl italic text-center pb-4">(Next.js + Supabase)</h2>
      <form className="my-4 justify-center items-center flex flex-col lg:flex-row gap-2 lg:gap-6">
        <label htmlFor="task-name-input" className="text-lg font-semibold">Task:</label>
        <input name="task-name-input" className="bg-gray-50 text-lg p-1 rounded-md w-full lg:w-[30%] outline-0 focus:ring-blue-600 focus:ring-2 shadow focus:shadow-2xl" type="text" />
        <input className="font-bold py-2 px-6 cursor-pointer bg-green-600 text-white rounded-md w-full lg:w-auto hover:bg-green-500 transition duration-300" type="submit" value="Add Task"/>
      </form>
    </div>
  )
}