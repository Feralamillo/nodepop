# Nodepop

API de venta de artículos de segunda mano para ser utilizada en clientes Android e iOS.

## Instalación

Esta app requiere de mongodb para funcionar. Está diseñado para funcionar en local. Para ejecutar por primera vez:

1. Descargar el repo `$git clone git@github.com:Feralamillo/nodepop.git`
2. Entrar a la carpeta `cd nodepop`
3. Instalar `npm install`
4. Inicializar la base de datos `npm run resetdb`
5. Iniciar la applicaión `npm start`
6. Abrir la URL: [localhost:3000](http://localhost:3000)

## Documentación API

Search query
http://localhost:3000/anuncios?start=1&limit=3&sort=name&tag=lifestyle
