import React from 'react'
import '../../scss/Home.css'
import { useHistory } from 'react-router-dom'
function Home() {
    const history = useHistory();
    return (
        <div className="main" >
         <div className="top-section">
            <div className="Container">
                
                <nav>
                
                    <h1>My Website</h1>
                
                    <ul>
                        <li><a>Home</a></li>
                        
                        <li><a>About</a></li>
                        
                        <li><a>Services</a></li>

                    </ul>
                    <div className="login-button"><a className="btns-primary" onClick={()=>history.push("/Login")} >Log In</a></div>
                
                </nav>
                <div id="menuToggle">
                <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>
                <ul id="menu">
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Services</li></a>
                </ul>
                </div>
                
                <div className="top-section-content">
                    
                    <div>
                        
                        <h1>Make your Marketing Real</h1>
                        
                        <p className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque praesentium eum magnam eos et. Aut iure, ea corporis deserunt nobis ex laboriosam id dolorem excepturi dolore autem </p>
                        
                        <a className="btns-primary">Learn More</a>
                        
                        <a className="btns-secondary" onClick={()=>history.push("/Signup")} >Sign Up</a>
                    </div>
                    
                    <img src="https://themesbrand.com/zooki/layouts/images/home-2-img.png" alt=""/>
                
                </div>

            </div>
         </div>
            
            <div className="bottom-section">
                <div className="Container">
                  
                  
                
                </div>
            </div>
            
        </div>
    )
}

export default Home
    
   
    
    
   
