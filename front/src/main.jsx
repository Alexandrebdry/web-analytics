import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import "./main.css" ;


export const API_URL = import.meta.env.VITE_API_URL;
export const TOKEN = import.meta.env.VITE_TOKEN_SECRET;

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </StrictMode>,
)
