# Heroes & Villains

Aplicación móvil desarrollada con Ionic y Angular que permite visualizar
héroes y villanos, ver sus detalles y gestionar configuraciones como
idioma, tema y tamaño de fuente. El proyecto está orientado como
práctica para entender el manejo de componentes, servicios, navegación,
traducciones y ajustes dentro de una app híbrida.

------------------------------------------------------------------------

##  Características

-   Listado de héroes y villanos.
-   Vista de detalles para cada personaje.
-   Sistema de traducción Español / Inglés.
-   Cambio de tema (claro / oscuro).
-   Ajuste del tamaño de fuente.
-   Navegación mediante tabs.
-   Arquitectura modular usando Angular + Ionic Standalone Components.

------------------------------------------------------------------------

##  Instalación

### 1. Clonar el repositorio

``` bash
git clone https://github.com/Danieltab1/heroes-villanos.git
```

### 2. Entrar al directorio

``` bash
cd heroes-villains
```

### 3. Instalar dependencias

``` bash
npm install
```



------------------------------------------------------------------------

## ▶ Uso

### Ejecutar en desarrollo

``` bash
ionic serve
```

La aplicación se abrirá en tu navegador y actualizará automáticamente
los cambios que realices.


## Construir y desplegar en Android

Sigue estos comandos para compilar el proyecto e integrarlo con Capacitor para Android:

```bash
# 1. Construir el proyecto Ionic
ionic build

# 2. Agregar la plataforma Android
npx cap add android

# 3. Sincronizar cambios con Android
npx cap sync android

# 4. Abrir el proyecto en Android Studio
npx cap open android
```

------------------------------------------------------------------------

## Tecnologías utilizadas

-   **Ionic**
-   **Angular**
-   **TypeScript**
-   **HTML / CSS**
-   **Node.js**

------------------------------------------------------------------------

## Estructura del proyecto (resumen)

   HEROES-VILLAINS.02/
│
├── .angular/
├── .idea/
├── .vscode/
├── android/
├── heroes-villanos/
├── node_modules/
│
├── src/
│ ├── app/
│ │ ├── home/
│ │ ├── models/
│ │ ├── pages/
│ │ │ ├── ajustes/
│ │ │ ├── explorar/
│ │ │ ├── favoritos/
│ │ ├── services/
│ │ ├── tabs/
│ │ ├── app.component.html
│ │ ├── app.component.scss
│ │ ├── app.component.spec.ts
│ │ ├── app.component.ts
│ │ ├── app.routes.ts
│ │
│ ├── assets/
│ │ ├── icon/
│ │ ├── img/
│ │ ├── lang/
│
└── package.json

------------------------------------------------------------------------

## Configuración adicional

El sistema utiliza: - `localStorage` para guardar tamaño de fuente,
idioma y tema. - `LanguageService` para gestionar traducciones. - Clases
CSS dinámicas para aplicar tamaños de fuente (`font-small`,
`font-medium`, `font-large`).

------------------------------------------------------------------------

## Capturas de pantalla (opcional)

Si deseas, puedo generarte una sección con imágenes del proyecto.

------------------------------------------------------------------------

## Autor

Proyecto desarrollado por **Daniel Taboada** como parte de prácticas y
aprendizaje de Ionic + Angular.

------------------------------------------------------------------------

## Licencia

Este proyecto está bajo la licencia MIT.
