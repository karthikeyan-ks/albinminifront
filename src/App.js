import { BrowserRouter, Routes,Route, Outlet } from 'react-router-dom';
import './App.css'
import Appbar from './components/Appbar';
import DashBoard from './pages/DashBoard';
import TemporaryDrawer from './components/NavDrawer';
import { useState } from 'react';
import Index from './pages/Index';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import { ConnectionProvider } from './components/ConnectionContext';
import { CustomSnackBar } from './components/CustomSnackbar';

function App() {
  const [open,setOpen]=useState(false)
  const [login,setLogin]=useState(false)
  const handleOpen = ()=>{
    console.log(open)
    setOpen(!open)
  }
  return (
    <div className="App">
      <ConnectionProvider>
      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={
          <div className='mainPage'>
            <TemporaryDrawer click={open} handleOpen={handleOpen} />
            <Appbar login={login} handleOpen={handleOpen}/>
            <Outlet/>
          </div>
          }>
            <Route index path='' element={<Index/>}/>
            <Route path='dashboard' element={<DashBoard/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='profile' element={<Profile/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      <CustomSnackBar/>
      </ConnectionProvider>
    </div>
  );
}

export default App;
