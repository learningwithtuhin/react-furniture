
import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Login from './components/Login';
import Signup from './components/Signup';
import Track from './components/Track';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const AppLayout = () =>{
  return (
    <div>
       <Navbar/>
       <Outlet/>
       <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children : [

      {
        path: "/",
        element: <Home/>,
      },

      {
        path: "/shop",
        element: <Shop/>,
      },

      {
        path: "/terms",
        element: <Terms/>,
      },
      {
        path: "/privacy",
        element: <Privacy/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/wishlist",
        element: <Wishlist/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/track",
        element: <Track/>,
      },


    ],
    errorElement: <Error/>,
  }
]);

function App() {
 

  return (
    <>
      
   <div>
     <RouterProvider router={router} />
   </div>
    </>
  )
}

export default App
