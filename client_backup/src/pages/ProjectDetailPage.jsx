import React from 'react'
import { ThemeProvider } from '../components/ThemeContext' 
import Navbar from '../components/Navbar'
import ProjectDetails from '../components/ProjectDetails'
import Footer from '../components/Footer'

const ProjectDetailsPage = () => {
  return (
  <>
  <ThemeProvider>

    <Navbar/>
    <div className='pt-20'>
    <ProjectDetails/>
    <Footer/>
    </div>
  </ThemeProvider>
  </>
  )
}

export default ProjectDetailsPage