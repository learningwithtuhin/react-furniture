import React from 'react'
import { Link, NavLink } from 'react-router'
import logo from "../assets/images/logo2.png"
import searchicon from "../assets/images/search.png"
import carticon from "../assets/images/bag.png"
import hearticon from "../assets/images/heart.png"
import trackcar from "../assets/images/car-light.png"

const Navbar = () => {
  return (
    <div className='header'>
        <div className='top-hdr'>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div>
                             <Link to='/track' className='trackcar'> 
                             <img src={trackcar} alt="HexaFurn"/><span>Track order</span> 
                             </Link>
                            
                        </div>
                    </div>
                    <div className="col-md-8">
                        <p>Shop More, Pay Less – Free Delivery Included!</p>
                    </div>
                    <div className="col-md-2">
                        <ul className='m-0 p-0 login-list'>
                            <li>
                                  <Link to='/login'> Login </Link>
                            </li>
                            <li>
                                /
                            </li>
                            <li>
                                   <Link to='/signup'> Signup </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='bottom-hdr'>
            <div className='container'>
            <div className='row align-items-center'>
 <div className='col-md-2'>
    <Link to='/' className='logo'> <img src={logo} alt="HexaFurn"/> </Link>
   
 </div>
 <div className='col-md-8'>
     <ul className='navmenu p-0 mb-0'>
            <li>
              <NavLink to='/' className={({isActive}) => isActive ? "active-link": ""}> Home </NavLink>
            </li>
            <li>
              <NavLink to='/shop'> Products </NavLink>
            </li>
            <li>
              <NavLink to='/terms'> Terms </NavLink>
            </li>
            <li>
              <NavLink to='/privacy'> Privacy Policy </NavLink>
            </li>
            <li>
              <NavLink to='/contact'> Contact </NavLink>
            </li>
            
        </ul>
 </div>
 <div className='col-md-2'> 
    <ul className='p-0 mb-0 hdr-icon'>
        <li>
         <img src={searchicon} alt="search-icon"/> 
        </li>
         <li>
              <Link to='/cart'> 
               <img src={carticon} alt="cart-icon"/> 
               </Link>
            </li>
            <li>
              <Link to='/wishlist'> 
               <img src={hearticon} alt="heart-icon"/> 
               </Link>
            </li>
           
        
    </ul>
 </div>
            </div>
        </div>
        </div>
       
       
    </div>
  )
}

export default Navbar