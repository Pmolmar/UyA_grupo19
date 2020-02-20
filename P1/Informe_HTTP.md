# Informe práctica 1: Protocolo HTTP

| Preguntas                                   | [Pagina 1](http://www.gobiernodecanarias.org/istac/api/) | [Pagina 2](http://www3.gobiernodecanarias.org/sanidad/scs/gc/18/Cita_Previa/index.html) |
| ------------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Qué peticiones desencadena la consulta.     | Nos pide HTML, 2 CSS y 4 imagenes | Nos pide HTML, 3 scripts JS, 2 de CSS una imagen y 2 imágenes que dan error |
| ¿Qué tipo de petición estás realizando?     | Peticiones GETs | Peticiones GETs |
| Qué código de estatus devuelve.             | 5 200(ok), 4 302(found) y 1 404(not found) | 7 200(ok), 2 404(not found) 
| Qué DNS tiene el servidor.                   | www.gobiernodecanarias.org | www3.gobiernodecanarias.org
| Qué IP tiene tiene el servidor.             | ip 93.188.137.123 puerto 443 | ip 93.188.137.126 puerto 80
| ¿La página tiene alguna cookie?, ¿Cuáles?.  | No tiene cookies | No tiene cookies
| ¿Qué idioma acepta?.                        | Inglés de los Estados unidos y Español | Inglés de los Estados unidos y Español 
| Alguna línea de código JavaScript.          | De JS no recibe nada | Hay 3 peticiones JS bootstrap.js, jquery.js, bootstrap-modal.js
| Alguna línea de código CSS que se aplique.  | Hay una petición CSS itac.css | Hay 2 peticiones CSS bootstrap.css y styles.css
| Alguna línea de código HTML que se aplique. | Hay una petición HTML llamada api/ | Hay 3 peticiones HTML, 2 con error, favicon y sl2, 1 con ok index