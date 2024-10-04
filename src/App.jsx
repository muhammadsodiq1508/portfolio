import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Service from './pages/service/Service'
import Project from './pages/project/Project'
import Blog from "./pages/blog/Blog"
import Designer from './pages/designer/Designer'
import Education from './pages/education/Education'
import Testemonial from './pages/testemonial/Testemonial'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
     <Header />
     <Home />
     <About />
     <Service />
     <Project />
     <Blog />
     <Designer />
     <Education />
     <Testemonial /> 
     <Footer />
    </>
  )
}

export default App
