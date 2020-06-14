# WebPack4

Este es un pequeño manual de como crear desde 0 el proyecto, aun que se puede usar el package.json que esta en este repositorio.

## Iniciamos el proyecto con:

`npm init`

Ingresamos toda la información que nos pide.

## Instalamos Webpack

Agregamos la dependencia de webpack y para instalar esta dependencia usamos

`sudo npm install --save-dev webpack``

Esto intalara webpack en el proyecto y en el archivo json veremos lo siguiente:

```json
{
  "name": "app",
  "version": "1.0.0",
  "description": "Aprendiendo webpack",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Luis Eduardo Alcantara Olvera",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.43.0"
  }
}
```
## Instalamos el CLI de webpack

En la terminal solo ingresamos:

`sudo npm install --save-dev webpack-cli`

El archivo queda así:

```json
{
  "name": "app",
  "version": "1.0.0",
  "description": "Aprendiendo webpack",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Luis Eduardo Alcantara Olvera",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
  }
}
```