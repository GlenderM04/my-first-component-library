
# Mi Biblioteca de Componentes de Next.js

Bienvenido a **mi primera biblioteca de componentes de Next.js**. Esta biblioteca está diseñada para facilitar la creación de aplicaciones web modernas utilizando componentes reutilizables y estilizados con @emotion/styled.

Cabe detacar que este es una libreria de ejemplo que utilizo para uso personal, no es una librería para uso normal. Sin emargo, si deseas usarla espero que te sea útil en tus proyectos.

## Características

- **Componentes Reutilizables**: Incluye una variedad de componentes que puedes usar en tus proyectos Next.js.
- **Estilo Moderno**: Utiliza @emotion/styled para estilos CSS en JS, lo que permite estilos dinámicos y fáciles de mantener.
- **Compatibilidad con Next.js**: Diseñado específicamente para funcionar sin problemas con Next.js.

## Instalación

Para instalar la biblioteca, utiliza npm o yarn:

```bash
npm install glenderm04-my-first-component-library@latest
```

o

```bash
yarn add glenderm04-my-first-component-library@latest
```

## Componentes Disponibles

### 1. Header

Un componente de encabezado básico que se puede personalizar.

```jsx
import { Header } from 'glenderm04-my-first-component-library@latest';

const MyApp = () => {
  return (
    <Header />
  );
};
```

### 2. Navbar

Un componente de barra de navegación que recibe una configuración JSON.

```jsx
import { Navbar } from 'glenderm04-my-first-component-library@latest';

const navbarData = [
  { id: 1, label: 'Inicio', link: '/' },
  { id: 2, label: 'Acerca de', link: '/about' },
  { id: 3, label: 'Contacto', link: '/contact' },
];

const MyApp = () => {
  return (
    <Navbar items={navbarData} />
  );
};
```

### 3. Reloj Digital

Un componente que muestra un reloj digital y permite cambiar entre formato de 24h y 12h.

```jsx
import { RelojDigital } from 'glenderm04-my-first-component-library@latest';

const MyApp = () => {
  return (
    <RelojDigital />
  );
};
```

### 4. Galería de Imágenes

Un componente que muestra imágenes en una cuadrícula 4x4 con scroll.

```jsx
import { GaleriaDeImagenes } from 'glenderm04-my-first-component-library@latest';

const MyApp = () => {
  return (
    <GaleriaDeImagenes />
  );
};
```

### 5. Botón de Navegación

Un botón que redirige a una ruta específica usando el enrutador de Next.js.

```jsx
import { BotonNavegacion } from 'glenderm04-my-first-component-library@latest';

const MyApp = () => {
  return (
    <BotonNavegacion route="/about" />
  );
};
```


## Contribuciones

Si deseas contribuir a esta biblioteca, ¡estás más que bienvenido! Por favor, abre un *issue* o envía un *pull request* con tus sugerencias y mejoras.

## Licencia

Este proyecto está bajo la Licencia MIT.
