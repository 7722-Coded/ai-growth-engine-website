
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Skeleton } from './components/ui/skeleton'

// Simple loading component
const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-t-primary border-l-primary border-b-transparent border-r-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

// Render without unnecessary complexity
createRoot(document.getElementById("root")!).render(
  <>
    <LoadingScreen />
    <App />
  </>
);
