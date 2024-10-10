import { Outlet } from "react-router-dom"
function App() {

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <h1 className="my-2 text-2xl text-center text-blue-700 underline">Tanstack-query</h1>
      <Outlet />
    </div>
  )
}

export default App
