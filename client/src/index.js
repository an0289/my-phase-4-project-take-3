import React from 'react';
import { createRoot } from 'react-dom/client'
import { UserProvider } from './contexts/UserContext'
import { ItemProvider } from './contexts/ItemContext';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from "react-router-dom"
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <UserProvider>
    <ItemProvider>
      <App />
    </ItemProvider>
    </UserProvider>
  </BrowserRouter>,
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
