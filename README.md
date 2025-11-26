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
git clone https://github.com/usuario/heroes-villains.git
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

------------------------------------------------------------------------

## Tecnologías utilizadas

-   **Ionic**
-   **Angular**
-   **TypeScript**
-   **HTML / CSS**
-   **Node.js**

------------------------------------------------------------------------

## Estructura del proyecto (resumen)

    src/
     ├─ app/
     │   ├─ pages/
     │   ├─ services/
     │   ├─ components/
     │   └─ app.config.ts
     ├─ assets/
     │   └─ i18n/
     └─ theme/

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
