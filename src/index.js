import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';


// axios.interceptors.request.use((req)=>{
//   console.log("request")
//   return req
// },
// (error)=>{
//   return Promise.reject(error)
// })

// axios.interceptors.response.use((res)=>{
//   if(res.status===201){
//     console.log("posted successfully")
//   }
//   return res
// },
// (error)=>{
//   return Promise.reject(error)
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
