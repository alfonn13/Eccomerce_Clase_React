import { useState } from 'react'
import { API_URL } from '../constants/env'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Bienvenido {API_URL}</h1>

    </div>
    
  )
}

export default App
