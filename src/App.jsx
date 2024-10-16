import Counter from './counter'
import Team from './Team'
import './App.css'
import Users from './Users'
import Friends from './Friends'

function App() {
  
  function handleClick(){
    alert('button click')
  }

  const handleClick2 = ()=>{
    alert('button 2 clicked')
  }
  const addToFive = (num)=>{
        alert(num + 5)
  }

  return (
    <>
      
      <h3>React Core Concepts Part-2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() =>{alert('third clicked')}}>Click 3</button>
      <button onClick={() => addToFive(3)}>Cliclk 4</button>
      
    </>
  )
}

export default App
