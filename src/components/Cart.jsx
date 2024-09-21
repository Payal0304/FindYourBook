import React, {useState} from "react"
import { Link } from "react-router-dom";
import "../Styles/cartPage.css"
import Navbar from "./Navbar";
import Footer from "./Footer";



const Cart=()=>{
    const [className, setClassName] = React.useState("showCart");
    const [count, setCount] = useState(0);
    const [count2, setCount2 ]=useState(0);
    const [count3, setCount3 ]=useState(0);
    const [count5, setCount5 ]=useState(0);
     
    return(
        <body className="">
            <Navbar/>
            
            <div className="container">
                
   
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div className="mt-28 items-center justify-center text-center">
    <div  className="icon-cart"  onClick={() => {setClassName("cartTab")}
}>
 <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
</svg>
<span>{count+count2+count3+count5}</span>

 </div>
   
      <h1 style={{fontWeight:"bold", fontSize:"50px"}}>BUY NOW</h1>

        <Link to="/">
              <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                Back
              </button>
            </Link>  

             <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          </div>      
           
            <header>
 <div className="title">PRODUCT LIST</div>

 </header>

 <div className="listProduct">
 <div className="item">
        <img  src="../public/b1.jpg" alt="" />
        <h2>Story Book</h2>
        <div className="price">$0</div>
       
        <button className="addCart">
            ADD TO CART
        </button>
    </div>
    <div className="item">
        <img src="../public/comedy.jpg" alt="" />
        <h2>Comedy Book</h2>
        <div className="price">$20</div>
        <button className="addCart"                   
         onClick ={()=> setCount2(count2+1)}>
            ADD TO CART
        </button>
    </div>
    <div className="item">
        <img src="../public/sports.jpg" alt="" />
        <h2>Sports Book</h2>
        <div className="price">$50</div>
        <button className="addCart"                   
         onClick ={()=> setCount3(count3+1)}>
            ADD TO CART
        </button>
    </div>
    <div className="item">
        <img src="../public/music.jpg" alt="" />
        <h2>Music Book</h2>
        <div className="price">$0</div>
        <button className="addCart">
            ADD TO CART
        </button>
    </div>
    <div className="item">
        <img src="../public/science.jpg" alt="" />
        <h2>Science Book</h2>
        <div className="price">$70</div>
        <button className="addCart">
            ADD TO CART
        </button>
    </div>
    <div className="item">
        <img src="../public/food.jpg" alt="" />
        <h2>Food Book</h2>
        <div className="price">$150</div>
        <button className="addCart"                   
         onClick ={()=> setCount(count+1)}>
            ADD TO CART
        </button>
    </div>
    <div className="item">
        <img src="../public/gk.jpg" alt="" />
        <h2>General Knowledge</h2>
        <div className="price">$120</div>
        <button className="addCart">
            ADD TO CART
        </button>
    </div>
    <div className="item">
        <img src="../public/comic.jpg" alt="" />
        <h2>Comic</h2>
        <div className="price">$0</div>
        <button className="addCart">
            ADD TO CART
        </button>
    </div>
    <div className="item">
        <img src="../public/math.jpg" alt="" />
        <h2>Mathematics</h2>
        <div className="price">$180</div>
        <button className="addCart"                   
         onClick ={()=> setCount5(count5+1)}>
            ADD TO CART
        </button>
    </div>
    <div className="item">
        <img src="../public/hindiStory.jpg" alt="" />
        <h2>Hindi Story</h2>
        <div className="price">$0</div>
        <button className="addCart">
            ADD TO CART
        </button>
    </div>
    <div className="item">
        <img src="../public/recipe.jpg" alt="" />
        <h2>Recipe</h2>
        <div className="price">$0</div>
        <button className="addCart">
            ADD TO CART
        </button>
    </div>
    <div className="item">
        <img src="../public/code.jpg" alt="" />
        <h2>Coding</h2>
        <div className="price">$0</div>
        <button className="addCart">
            ADD TO CART
        </button>
    </div>
 </div>
 </div>
 <div className={className}  style={{padding : "10px 0 0 10px"}}>
    <h1 style={{display:"flex" ,fontWeight:"bold"} }>SHOPPING CART &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
    &#160; Total : ${count*150 + count2* 20 + count3*50  + count5*180}<hr/></h1>
    <div className="listCart">
        <div className="item">
            <div className="image">
                <img src="../public/food.jpg" alt="book" />
            </div>
            <div className="name">
                Future of Taste
            </div>
            <div className="totalPrice">
                $150
            </div>
            <div className="quantity">
                    
                <span className="minus" 
                 onClick={()=> {
                  if(count ==0){
                    setCount(0);
                  }
                  else{
                    setCount(count-1)
                  }
                 }
                  }
                     >-</span>
                <span className="cnt">{count}</span>
                <span className="plus"
                  onClick ={()=> setCount(count+1)} >+</span>
            </div>
        </div>
        <div className="item">
            <div className="image">
                <img src="../public/comedy.jpg" alt="book" />
            </div>
            <div className="name">
                Comedy Drama
            </div>
            <div className="totalPrice">
                $20
            </div>
            <div className="quantity">
                    
                <span className="minus" 
                 onClick={()=> {
                  if(count2 ==0){
                    setCount2(0);
                  }
                  else{
                    setCount2(count2-1)
                  }
                 }
                  }
                     >-</span>
                <span className="cnt">{count2}</span>
                <span className="plus"
                  onClick ={()=> setCount2(count2+1)} >+</span>
            </div>
        </div>
        <div className="item">
            <div className="image">
                <img src="../public/sports.jpg" alt="book" />
            </div>
            <div className="name">
                World of Sports
            </div>
            <div className="totalPrice">
                $50
            </div>
            <div className="quantity">
                    
                <span className="minus" 
                 onClick={()=> {
                  if(count3 ==0){
                    setCount3(0);
                  }
                  else{
                    setCount3(count3-1)
                  }
                 }
                  }
                     >-</span>
                <span className="cnt">{count3}</span>
                <span className="plus"
                  onClick ={()=> setCount3(count3+1)} >+</span>
            </div>
        </div>
        
        <div className="item">
            <div className="image">
                <img src="../public/math.jpg" alt="book" />
            </div>
            <div className="name">
                Math Book
            </div>
            <div className="totalPrice">
                $180
            </div>
            <div className="quantity">
                    
                <span className="minus" 
                 onClick={()=> {
                  if(count5 ==0){
                    setCount5(0);
                  }
                  else{
                    setCount5(count5-1)
                  }
                 }
                  }
                     >-</span>
                <span className="cnt">{count5}</span>
                <span className="plus"
                  onClick ={()=> setCount5(count5+1)} >+</span>
            </div>
        </div>
    </div>
    <div className="btn">
        <button className="close" onClick={() => {setClassName("showCart")}}>CLOSE</button>
        <Link to ="/checkout">
        <button style={{width:"172px"}} className="checkOut">CHECK OUT</button>
        </Link>
        
    </div>
        </div>
   
        </div>  
        </div>
        <Footer/> 
        </body>  
    
    )
}

export default Cart;