import './App.css'
import NavBar from './components/NavBar'
import NewsComponent from './components/NewsComponent'
function App() {

  return (
    <>
      <NavBar />
      <NewsComponent pageSize={10} country='us' />
    </>
  )
}

export default App
