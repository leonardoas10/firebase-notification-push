// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
// const firebaseConfig = {
//   apiKey: "AIzaSyCTfyqOkI--YnuG2Qu3Z5r5tGUo3nAUzpQ",
//   authDomain: "karmapoint-288707.firebaseapp.com",
//   databaseURL: "https://karmapoint-288707.firebaseio.com",
//   projectId: "karmapoint-288707",
//   storageBucket: "karmapoint-288707.appspot.com",
//   messagingSenderId: "1033253473538",
//   appId: "1:1033253473538:web:55ad6dddc9bd1132a9461b"
// };

const firebaseConfig = {
    apiKey: 'AIzaSyDlNZWONklKEg00QGqMNBsjQ27RBP2y9DQ',
    authDomain: 'test-notification-c165f.firebaseapp.com',
    projectId: 'test-notification-c165f',
    storageBucket: 'test-notification-c165f.appspot.com',
    messagingSenderId: '568563373702',
    appId: '1:568563373702:web:e7f5acb48a9c747978a307',
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

// Message received and webapp is BACKGROUND
messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/logo192.png',
    };

    // eslint-disable-next-line no-restricted-globals
    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    );
});
