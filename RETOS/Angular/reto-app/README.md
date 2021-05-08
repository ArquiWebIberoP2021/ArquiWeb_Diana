# RetoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.10.

# Pasos para Correr el Aplicativo.
## Instalar Dependencias

# Paso 1. 
Instalar NodeJS en su ultima versión, para eso entraremos a su web oficial y descargaremos el instalador más actualizado https://nodejs.org/es/

# Paso 2.
Actualizar NPM, el gestor de paquetes de node, para bajarnos las dependencias más actuales:

npm install -g npm@latest

# Paso 2.
Borrar la cache de NPM:

npm cache clean --force

# Paso 3.
Desactivar las auditorias de NPM para evitar fallos:

npm set audit false

# Paso 4.
Desinstalar los paquetes anteriores de Angular CLI

npm uninstall -g angular-cli
npm uninstall -g @angular/cli

# Paso 5. 
Borrar la cache de NPM de nuevo:

npm cache clean --force

# Paso 6. 
Instalar la última versión de Angular CLI para instalar Angular 11:

npm install -g @angular/cli@latest


# Paso 7. 
Clonar el proyecto.

# Paso 8.
Correr el programa escribirendo en terminal

ng serve.

# *En caso de error:
Escribir en terminal

npm install --save-dev @angular-devkit/build-angular - 
