import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StarRating from './StarRating.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App /> 
    {/* <StarRating maxRating={5} size={24} messages = {["Terrible","Bad","Okay","Good","Amazing"]}/>
    <StarRating maxRating={5} size={24} color='red' className="TEST" defaultRating = {3}/> */}
  </StrictMode>
);
