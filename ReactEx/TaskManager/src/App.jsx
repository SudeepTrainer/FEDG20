import './App.css'
import MyButton from './components/MyButton'

let message = "Hello React!"

function Hello() {
  return <h1>{message}</h1>
}

//Function component
function App() {
  //JSX syntax
  return (
    <div>
      {new Date().getHours() % 12}
      <Hello />
      <Hello />
      <MyButton title="Signup" type="large" />
      <br />
      <MyButton title="Login" type="large" />
    </div>
  )
}

export default App
