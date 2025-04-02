import './index.css';
import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Events from './components/Events'
import Connect from './components/Connect'
import Footer from './components/Footer'


function App() {
  // page will either be Home/Events/About/Connect
  const [page, setPage] = useState('Home')

  return (
    <>
      <Header page={page} setPage={setPage} />

      {(page == 'Events') ? <Events /> :
       (page == 'About') ? <About /> :
       (page == 'Connect') ? <Connect /> :
       <Home />}

      <Footer />
    </>
  )
}

export default App
