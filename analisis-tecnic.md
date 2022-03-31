Cosas que hacer:

1. Creamos una función para traer los datos desde la API.
Creamos tres variables de estado: una para que nos guarde el array que recoge de la Api, fuera de la función de la llamada; otra para que nos recoja el valor introducido en el input del filtro por paises; y la última para almacenar de el valor de la opción escogida dentro del filtro por región.

2. Creamos una función que nos cree visulamente en el DOM, tantas tarjetas como paises recogemos del array de la API. 

2. Debemos poder buscar el país deseado mediante un input en la barra de búsqueda. Para ello, creamos un función que recorra todo el array de la API, y si la propiedad .name de dicho array coincide con el valor puesto en el input, llamamos a la función anteriormente mencionada, que nos crea las tarjetas. 
En cambio, para filtrar por región, comparamos la propiedad .region del array de la API con el valor guardado dentro de las options del botón que se despliega.

3. Añadimos un listeners tanto al input para filtrar por país, como al de filtrar por región.

4. Para cambiar el tema, añadimos un listener al botón del tema y añadimos la clase correpondiete al body o la quitamos, según correponda.