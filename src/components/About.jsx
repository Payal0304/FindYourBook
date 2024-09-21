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
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
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

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum quisquam provident molestiae, dicta praesentium. Laboriosam itaque ipsum vel voluptatum sit, quae accusamus velit culpa, illum fugit eius tempora architecto eaque numquam consectetur rem. Est dignissimos eius ipsum nihil minus esse repellendus ea perferendis ipsam similique, magni quisquam quaerat? Porro nemo, voluptates error dolorum hic molestias sed non libero facilis excepturi placeat veritatis voluptatem dolor doloremque magni ipsam cumque officiis modi totam repudiandae explicabo iusto! Eaque blanditiis error a temporibus tempore. Voluptates neque consectetur similique nemo iste eos molestias cum, at modi ea dolor itaque temporibus eius doloribus illo sed?
  </ul></ul>

           
            
     
    </div>
    <Footer/>
  </div>
  
  )
}

export default About
