import './App.css';
import Response from "./components/Response.jsx"
import Request from "./components/Request.jsx"

function App() {
  return (
    <div className='justify-center align-middle h-[100lvh] w-full bg-slate-600'>
      <div>
        <h1 className='text-4xl text-center text-white font-bold p-4'>WorldSaver</h1>
      </div>
      <div className='flex gap-12 justify-center items-center h-1/2'>  
        <Response/>
        <Request/>
      </div>
    </div>
  );
}

export default App;