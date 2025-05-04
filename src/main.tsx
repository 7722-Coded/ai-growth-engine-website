
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useState, useEffect } from 'react'
import { Skeleton } from './components/ui/skeleton'

// Site-wide loading component
const LoadingScreen = () => {
  const [show, setShow] = useState(true)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])
  
  if (!show) return null
  
  return <Skeleton fullscreen type="brain" />
}

const AppWithLoading = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  
  useEffect(() => {
    // Wait for initial load
    window.addEventListener('load', () => {
      setTimeout(() => {
        setIsLoaded(true)
      }, 500)
    })
    
    // If load event already fired, set loaded after a delay
    if (document.readyState === 'complete') {
      setTimeout(() => {
        setIsLoaded(true)
      }, 500)
    }
    
    return () => {
      window.removeEventListener('load', () => setIsLoaded(true))
    }
  }, [])
  
  return (
    <>
      {!isLoaded && <LoadingScreen />}
      <App />
    </>
  )
}

createRoot(document.getElementById("root")!).render(<AppWithLoading />);
