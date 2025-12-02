import { useState } from 'react'
import './App.css'
import RawJSON from './RawJSON.tsx'

function App() {

  const [response, setResponse] = useState('Loading...');
  
  return (
    <>
      <h1>test page</h1>
      <RawJSON response={response} setResponse={setResponse} />
    </>
  )
}

export default App
