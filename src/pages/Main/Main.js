import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'
function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            <Skills />           
            <Projects />
            <Experience/>
            <Education /> 
            <Achievement />
           
            <Blog />
            <Services/>
            {/* <Testimonials/> */}
            <Contacts />
             <Footer /> 
        </div>
    )
}

export default Main
