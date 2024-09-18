## PM4: App web Front-End - E-Commerce de tecnologia (Version 2)

Este repositorio correspondoe al proyecto M4 del Bootcamp Soy henry, con la diferencia que tiene algunas mejoras puntuales: 
-mejora en responsividad (implementacion de  clases de css con media query, colocadas directamente en codigo tailwindCSS)
-implementacion de middlewares (ya que antes como se puede observar en la version 1, validaba mediante useEffect pero es conflictivo para el build y posterior deploy)

## Descripcion

NexusTech es una aplicacion full stack de desarrollo frontend especifico, diseñada para montar un e-commerce de tecnologia, incorporando conceptos de UX/UI para mejorar la experiencia del usuario y utilizando un esquema de AUTH para validaciones y funcionalidades especificas.
 Se compone de una aplicacion front-end construida sobre nextJS y una aplicacion back-end previamente construida sobre express, node y typeORM mediante una arquitectura de microservicios.
La aplicacion cuenta con diseño responsivo.

## Tecnologias
### front:
- NextJS
- React
- Typescript
- Persistencia de datos manipulando localstorage
- Axios
- Tailwind Css
- Styled-Components
- UX/UI
- Next middlewares

### back:
- NodeJS
- Express 
- Typescript
- TypeORM

### Base de datos:
-  PostgreSQL

## Funcionalidades

- Registro de usuarios: con validaciones en inputs y logica segun errores de inputs.
- Inicio de sesion: con uso de token e items sobre localstorage para funcionalidades exclusivas de usuarios logeados.
- Filtrar productos: con texto mediante un searchbar
- Detalle de producto: ver detalle de un producto del home en una ruta apartada.
- Carrito de compras:
    - posiblidad de agregar productos al carrito.
    - posiblidad de eliminar producto agregado al carrito.
    - comprar productos.
    - ver detalle de la compra.
- Dashboard de usuario
    - informacion personal de la cuenta
    - historial de compras
    - detalle de la ultima compra
- Log Out
    -desactiva funciones, elementos, componentes y rutas exclusivos del usuario logeado.
##

### -> PM4: App web Front-End - E-Commerce de tecnologia (Version 1)

Este repositorio es el original, desarrollado en el bootcamp de henry en el plazo de menos de un mes. Es la misma aplicacion, pero al estar en monorepo decidi separarla para hacer un deploy mas limpio.

- [![Acceso a la version 1 del PM4](https://img.shields.io/badge/Acceder%20al%20Proyecto%204-blue)](https://github.com/JuanPaBL2/Full-Stack-Henry-Bootcamp-Projects/tree/main/PM4-JuanPaBL2)
