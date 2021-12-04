# FIREBASE NOTIFICATION PUSH

## Descripción

-   API orientada al uso de notificaciones push con Firebase.
-   Desarrollado en NodeJS 12 y React 17.02

## Instalación - Docker-Compose

1. Instalarse [ Docker Engine ](https://docs.docker.com/engine/install/) :fire:
2. Ir a la raiz del proyecto y ejecutar => `docker-compose build`
3. Ir a la raiz del proyecto y ejecutar => `docker-compose up -d`
4. Ir a la [ Api ](http://127.0.0.1:8080/), utilizara el endpoint 8080. Enviara una notification push a la [ App ](http://localhost:3000/)
5. Empezar a leer código, interpretar funcionalidades y programar :smile:

## Configuracion - Firebase

-   Reemplazar tokenId en node-app/firebase-init.js en la funcion sendToDevice() y credenciales
-   Reemplazar credenciales en react-app/public/firebase-messging-sw.js y react-app/src/firebaseInit.js
-   Reemplazar REACT_APP_VAPID_KEY por la KEY generada en cloud messaging
