import { initializeApp } from 'firebase/app';
import {
    getMessaging,
    getToken as retrieveToken,
    onMessage,
} from 'firebase/messaging';

// const firebaseConfig = {
//     apiKey: 'AIzaSyCTfyqOkI--YnuG2Qu3Z5r5tGUo3nAUzpQ',
//     authDomain: 'karmapoint-288707.firebaseapp.com',
//     databaseURL: 'https://karmapoint-288707.firebaseio.com',
//     projectId: 'karmapoint-288707',
//     storageBucket: 'karmapoint-288707.appspot.com',
//     messagingSenderId: '1033253473538',
//     appId: '1:1033253473538:web:55ad6dddc9bd1132a9461b',
// };

const firebaseConfig = {
    apiKey: 'AIzaSyDlNZWONklKEg00QGqMNBsjQ27RBP2y9DQ',
    authDomain: 'test-notification-c165f.firebaseapp.com',
    projectId: 'test-notification-c165f',
    storageBucket: 'test-notification-c165f.appspot.com',
    messagingSenderId: '568563373702',
    appId: '1:568563373702:web:e7f5acb48a9c747978a307',
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

// Getting permissions to show notifications on the browser
export const getToken = async (setTokenFound) => {
    let currentToken = '';

    try {
        console.log('VAPID:', publicKey);
        currentToken = await retrieveToken(messaging, { vapidKey: publicKey });
        if (currentToken) {
            setTokenFound(true);
        } else {
            setTokenFound(false);
        }
    } catch (error) {
        console.log('An error occurred while retrieving token. ', error);
    }

    return currentToken;
};

// Message received and webapp is ACTIVE
export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
