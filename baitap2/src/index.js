import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const mockdata=[
  {name:'a',age:21},
  {name:'ab',age:12},
  {name:'as',age:12},
  {name:'as',age:14},
  {name:'ad',age:15},
  {name:'aa',age:16},
  {name:'aq',age:11},
];
root.render(
  <React.StrictMode>
    <App />
    <ul>
      {mockdata.map((item,index) =>{
        <div key={index}>
          <li>
            <span>{item.name}</span>
            <span>{item.age}</span>
          </li>
        </div>
      })}
   </ul>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
