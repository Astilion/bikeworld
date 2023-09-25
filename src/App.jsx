import './App.scss'
import { useState, useEffect } from 'react'
import Header from './components/layout/Header';
import UserPanel from './components/userPanel/userPanel';
const App =() => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isShown = screenWidth >= 768
  return (
    <>
 
    <Header/>
    {isShown ? null : <UserPanel/>}
    </>
  );
}

export default App;
