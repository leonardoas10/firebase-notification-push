import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { initializeApp } from 'firebase/app';

// // Configure Firebase
// // const firebaseConfig = {
// //     apiKey: 'AIzaSyCTfyqOkI--YnuG2Qu3Z5r5tGUo3nAUzpQ',
// //     authDomain: 'karmapoint-288707.firebaseapp.com',
// //     databaseURL: 'https://karmapoint-288707.firebaseio.com',
// //     projectId: 'karmapoint-288707',
// //     storageBucket: 'karmapoint-288707.appspot.com',
// //     messagingSenderId: '1033253473538',
// //     appId: '1:1033253473538:web:55ad6dddc9bd1132a9461b',
// // };

// const firebaseConfig = {
//     apiKey: 'AIzaSyDlNZWONklKEg00QGqMNBsjQ27RBP2y9DQ',
//     authDomain: 'test-notification-c165f.firebaseapp.com',
//     projectId: 'test-notification-c165f',
//     storageBucket: 'test-notification-c165f.appspot.com',
//     messagingSenderId: '568563373702',
//     appId: '1:568563373702:web:e7f5acb48a9c747978a307',
// };

// initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
