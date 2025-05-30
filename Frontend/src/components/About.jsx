import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <Navbar/>
    <div className="mt-28 items-center justify-center text-center">
    <span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdtqZoDRYJCO7IkwQ_1-HD3VRFrUo3S_lkA&s" alt="" />
            </span>

            <Link to="/">
              <button className="mt-6 btn-custom px-4 py-2 rounded-md duration-300">
                Back
              </button>
            </Link>
            <p className="mt-12" style={{fontSize:"20px", fontWeight:"bold"}}>

            Welcome to FindYourBook!!!
            We strive to ensure that our products reaches your expectation. Here's why you should choose us-
            </p>
            
<ul>
<br />
  <li>Quality: We use the highest quality materials and cutting-edge technology to ensure our services are the best on the market.</li><br />
  <li>Customer Service: Our customer support team is here to help you with any questions or concerns. Your satisfaction is our priority.</li> <br />
  <li>Innovation: We are constantly innovating and improving our services to meet the changing needs of our customers.</li>
  <ul>
    <br />

At FindYourBook, innovation drives everything we do. We constantly seek new ways to enhance your reading experience, from intuitive search features to personalized recommendations. Our team embraces the latest technologies to make discovering, purchasing, and enjoying books easier and more enjoyable for everyone. We believe that by fostering a culture of creativity and continuous improvement, we can deliver unique solutions that set us apart in the world of online book shopping.  </ul></ul>

           
            
     
    </div>
    <Footer/>
  </div>
  
  )
}

export default About