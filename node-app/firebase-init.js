const firebase = require('firebase-admin');

firebase.initializeApp({
    credential: firebase.credential.cert({
        type: 'service_account',
        project_id: 'test-notification-c165f',
        private_key_id: '6295f08fb1eea2028a766352258795d4500946af',
        private_key:
            '-----BEGIN PRIVATE KEY-----\n' +
            'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCmyNH1pl++HzgI\n' +
            'USetGHvdV6zuCcfW+AqocW4AFVbP4yGcWEhG4ArWJ4BoViIE3KdA/b44elUJ9EeJ\n' +
            'eRmXmlf6L+QFmPMyphn+JXJTBD5gggqQ1cBYkdkaxDFQcCKh0cUV070RbR9NHLlK\n' +
            'wZjmjpq2Zp3ZP1DnqL217RtXBqqVaMlmZE3G/C9q7j2piYs42l7OUHN4DnfeAKnw\n' +
            'i99RexPru1hZiuxqIsMxz/vXY5+2HjC9BsIy2pszPETFt2ZaLH2X+Rro4hlgs3ih\n' +
            'yRsx/ttHuXT2uAao2tvOPnNbLDtSDY/4vMNO3FFArXdFAQmucnEEoGU6JNPaJgu2\n' +
            'DElTR1fFAgMBAAECggEAE2aKFcWz9Az0RZ4QZsV8Uwj0fVP3QlLkBSf8oFcwcUoo\n' +
            'X2QINEZcvFXSoqWyRgKCFMCaCekg+eFybilUssUqCq4wxf3pUYZEwRgLWQtwqLqN\n' +
            'Dr/ued8CnrxySBBjLD5BwKzlR0um4nS+5lU9Ze7x9tmvmX+7TNcyCiF57ADt2Ccs\n' +
            '2QphHerviE+yl2Kc7hjLYyJ0EoVnnZxzVL0fXOaMDUNmmiCXShsfpqEtqpR79w83\n' +
            'DIhFLnqVaanZ+wkFMlnZQUkgDZeML0DcZrphAJ7Ioaw7EMaTK2OI9Nt/mQxA0Ejo\n' +
            'kVZN5/apTa9vy6VEBzpVTzNZiIWqHoZl7Ka7ZCnYGQKBgQDPap7pHCF10vsE2KjY\n' +
            'ZboNC2gQggEgAkySNrvoo6KwBwbywTkRmCZAfh/xcUv4abkGue9/sok6RIm6fEfd\n' +
            'XIvQCl4bZ0ETf2lOIf/KIMn/Ki7Qp9XD9x3Cu/bEmSmQTLbCQzt8u/rHFolNmBl9\n' +
            'opCLVb9eV1rSCDHf+FR2FUB6ZwKBgQDN2cSmL3QHrwjzwlpGIeT3HfwuaFXDCZK0\n' +
            'LIKcl2TLX9TXOhiKSq92FWz1QDU1fwSrtfd6sNyWUW2fDhNQSDtu1I+O1C9NbPly\n' +
            '2MAI8jrAHaWdwnWu9gTcQQgy9aQKh6SjaTOpXEJSnBzy+BFx4aAPaBFhphQ44wSc\n' +
            'SsgN+qqY8wKBgCk9A5dJVoW8itft07QilZkeWXRexKZ+jobLhxS75A6ndwQw0o3i\n' +
            '+Ef+S4+PfRFIw9bIhQuYjZweIFwJdahXTBzy0r8UCmY8AM3eCKNBXafz1Rb7J48s\n' +
            'xKgBAxEXeqIL/pIlF+C25ydKHcZlpTvLZH2vcLrrF02G/5OOJgzMMOOlAoGBALC6\n' +
            'OntWmC4UlwH3pNs7NED4bE5HYwHMUTgAUq4vx+hWwPt6tCDeV99wK5gu5L+l6hOl\n' +
            'aO/bsbYX+J4qTmiJawUO1qUQBABcA5kW/19u3wObMFnN3o00SB30cx6VB53GsJFe\n' +
            'u2y2eXZE8xGh6hA0Xd98QBfupsPkG0w3Y6OkxhwDAoGBALg+NHqz6Qoh65Ncq2mG\n' +
            '2sWrWcvdbl+hl/TBaU7uKOS9w32H/0guKBiWgJbW50el547JDWUFEOfbXWMmg/Vv\n' +
            'a+3BbvbQQRZhgrfRkWUCqXsI1eP1ShlfKJQnft4YB+kTgAYCMGA/iOEXNtrqMV5Z\n' +
            'nEOgEvSmAOaNKs5/Us/cFYHC\n' +
            '-----END PRIVATE KEY-----\n',
        client_email:
            'firebase-adminsdk-9sc5e@test-notification-c165f.iam.gserviceaccount.com',
        client_id: '105881552769691101322',
        auth_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_uri: 'https://oauth2.googleapis.com/token',
        auth_provider_x509_cert_url:
            'https://www.googleapis.com/oauth2/v1/certs',
        client_x509_cert_url:
            'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9sc5e%40test-notification-c165f.iam.gserviceaccount.com',
    }),
});

exports.sendNotification = async () => {
    try {
        const response = await firebase.messaging().sendToDevice(
            // Reemplazar TOKEN
            'fK5Aqq6mBMVx6I0xznyJ0l:APA91bGXRn176dDy6_H9ahPvozw6gG2oVNi5iExlQdvrPFWsnwLUfS36jSaqTlayMAUdfeYsSJiIilAj0Y8ZPTqeSzbB1eIb-8mL82GLBi9JKqCnNzfnyFCLqEnCf51HoEmt840Sstfp',
            {
                notification: {
                    title: 'desde back',
                    body: 'polquesi',
                },
            }
        );

        console.log('Notificaiton => ', response, response.results[0].error);
    } catch (error) {
        console.error('Error sendNotification => ', error);
    }
};
