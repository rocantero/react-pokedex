
# react-redux-pokeApi

  

Este proyecto usa Vite, React, Redux y PokeApi para interactuar con los 151 pokemones originales.

  



## Goals

  

- Listar los 151 pokemones originales con su nombre e imagen
- Filtrar por nombre
- Ver los detalles (estadisticas, peso, altura) de cada pokemon
- Agregar hasta 6 pokemones al area de combate

  

## Scripts

  

-  `dev`/`start` - start dev server and open browser

-  `build` - build for production

-  `preview` - locally preview production build

-  `test` - launch test runner

 ## Mayores desafíos
 - Usar createApi para consumir los endpoints de pokeApi
 - Negociar entre el payload resumido y completo de los pokemones
 - Definir los actions y reducers

## TODO: mejoras

- Responsividad. Mostrar más o menos columnas según el ancho de la pantalla
- Normalizar datos en Redux para mejorar performance
- Mutar lista de pokemones luego del fetch individual

## Bugs

Agregar un pokemon al area de combate desde la vista de detalle hace que se pierda la imagen. Solución ideal: usar rutas y hacer más segura la transferencia de contexto entre vistas.

  
