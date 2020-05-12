import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const handleClick = () => {
  ReactDOM.render(<Jsx />, document.getElementById('root'))
}
const Jsx = () => {
  return (
    <div className='Main-container'>
      <button className='btn' onClick={handleClick}>
        Play
      </button>
      <App />
    </div>
  )
}

ReactDOM.render(<Jsx />, document.getElementById('root'))
