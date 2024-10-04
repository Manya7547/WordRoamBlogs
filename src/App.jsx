import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import {login, logout} from "./store/authSlice";
import {Header, Footer} from './components'

function App() {
  // when data is fetched from appwrite then network req can take time. 
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // check who is the current user
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      } 
    })
    .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'></div>
      <Header />
      <main>
        {/* TODO Outlet */}
      </main>
      <Footer />
    </div>
  ) : null

  }

export default App
