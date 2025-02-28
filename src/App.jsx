import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'
import Connect from './components/Connect'

function App() {
  // page will either be Home/Events/About/Connect
  const [page, setPage] = useState('Home')

  return (
    <>
      <header>
        <button onClick={() => setPage('Home')}>Home</button>
        <button onClick={() => setPage('Events')}>Events</button>
        <button onClick={() => setPage('About')}>About Us</button>
        <button onClick={() => setPage('Connect')}>Connect</button>
      </header>
      
      {(page == 'Events') ? <Events /> :
       (page == 'About') ? <About /> :
       (page == 'Events') ? <Connect /> :
       <Home />}


      <footer>
        <img src=""/>
        <p> partners </p>
        <p>hiya</p>
        <p>SpaceX</p>
        <
      </footer>
    </>

      

  )
}

export default App
