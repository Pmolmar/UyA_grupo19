# Informe Práctica 6: Introducción Ajax
[Hosted](https://Ajax--pmolmar.repl.co)

- Realización de la página web donde se solicita la inserción del valor del **postId**, para obtener su contenido.

- Se establecen distintos identificadores de los elementos del html a tratar.

- Se emplea la función **getData** cuando se solicita el ingreso de algún valor *postId*.

- Se trabaja con ajax donde se establece:
	- Una petición **get** sobre la **url** proporcionada y determinando el parámetro a tratar, sobre la petición solicitada.
	- Una función de respuesta, donde se utiliza un bucle respecto a cada elemento de la petición para distribuirlos en párrafos. Se almacena cada contenido y se inserta en un objeto de clase html.
	- Una función de error, para el aviso de conflictos.


