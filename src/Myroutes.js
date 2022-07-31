import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import First from './First'
// import Cart from './pages/Cart'
// import Counter from './pages/Counter'
import Fetchdata from './pages/Fetchdata'
import { GlobalContextProvider } from './pages/GlobalContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Post from './pages/Post'
import Register from './pages/Register'
import UsingGlobalContext from './pages/UsingGlobalContext'
import Cart from './ReduxExample/Cart'
import Counter from './ReduxExample/Counter'
import DisplayGame from './ReduxExample/DisplayGame'
import Homepage from './ReduxExample/Homepage'
import Second from './Second'

const Myroutes = () => {
  return (
    <GlobalContextProvider>
    <Router>
    {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>


            <Route path='/first' element={<First/>}/>
            <Route path='/second' element={<Second/>}/>
            <Route path='/second/third' element={<First/>}/>


            <Route path='/counter' element={<Counter/>}/>
            <Route path='/fetchdata' element={<Fetchdata/>}/>
            <Route path='/post/:id' element = {<Post/>}/>

            <Route path='/globalcontext' element = {<UsingGlobalContext/>}/>

            <Route path='/displaygame' element={<DisplayGame/>}/>

            <Route path='/reduxhome' element={<Homepage/>}/>
            <Route path='/reduxcart' element= {<Cart/>}/>

            {/* <Route path='/count' element={<Counter/>} */}
        </Routes>
    </Router>
    </GlobalContextProvider>
  )
}

export default Myroutes