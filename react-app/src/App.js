import './App.css';
import logo from './logo.svg';
import Fader from './components/Fader';

import React, { useState } from 'react';
import { onMessageListener } from './firebaseInit';
import Notifications from './components/Notifications/Notifications';
import ReactNotificationComponent from './components/Notifications/ReactNotification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({ title: '', body: '' });

    console.log(show, notification);

    onMessageListener()
        .then(async (payload) => {
            setNotification({
                title: payload.notification.title,
                body: payload.notification.body,
            });
            setShow(true);
            console.log('Payload => ', payload);
        })
        .catch((err) => console.log('failed: ', err));

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            {show ? (
                <ReactNotificationComponent
                    title={notification.title}
                    body={notification.body}
                    show={show}
                />
            ) : (
                <></>
            )}
            <Notifications />
            <Fader text="Hello React"></Fader>
            <ToastContainer
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
            />
        </div>
    );
}

export default App;
