# Informe Práctica 9: Widgets Accesibles
[Hosted](https://WebMaterialize--pmolmar.repl.co)

[Google Docs](https://docs.google.com/document/d/1Rh7Nm--XBW4lLchz5HJVaDMwllIxxwUWJBT8kmAGFic/edit?usp=sharing)

1. **Acordeón (Funcionamiento):**

- **html**
~~~
<main class="container">
 <h1>Funcionamiento</h1>
 <ul class="collapsible popout" aria-expanded="false">
   <li>
     <div class="collapsible-header"><i class="material-icons" aria-hidden="true">account_balance</i>Moneda virtual</div>
     <div class="collapsible-body"><span>El tiempo es tu moneda</span></div>
   </li>
   <li>
     <div class="collapsible-header"><i class="material-icons" aria-hidden="true">directions_walk</i>Actividades</div>
     <div class="collapsible-body"><span>Las actividades que proponemos son múltiples y diversas, se libre !!</span></div>
   </li>
   <li>
     <div class="collapsible-header"><i class="material-icons"  aria-hidden="true">group</i>Comunidad</div>
     <div class="collapsible-body"><span>Se amable y los demás serán amables contigo, queremos una comunidad sana y respetable.</span></div>
   </li>
   <li>
     <div class="collapsible-header"><i class="material-icons" aria-hidden="true">textsms</i>Foro</div>
     <div class="collapsible-body"><span>Podras comunicarte con los demas miembros de la plataforma, se respetuoso. Cualquier problema que surja comunicate con los administradores, estarán encantados de ayudarte.</span></div>
   </li>
   <li>
     <div class="collapsible-header"><i class="material-icons" aria-hidden="true">error_outline</i>Problemas</div>
     <div class="collapsible-body"><span>Para cualquier incidencia de tipo técnica manda un correo a xxx@gmail.com</span></div>
   </li>
 </ul>
</main>
~~~

- **js**
~~~
document.addEventListener('DOMContentLoaded', function() {
   let elems = document.querySelectorAll('.collapsible');
   let instances = M.Collapsible.init(elems);
 });
 
let accordionElems = document.querySelectorAll(".collapsible");
M.Collapsible.init(accordionElems, {
 inDuration: 0,
 onCloseEnd: (element) => {
   let header = element.querySelector(".collapsible-header");
   let content = element.querySelector(".collapsible-body");
   header.setAttribute("aria-expanded", "false");
   content.setAttribute("aria-hidden", "true");
 },
 onOpenEnd: (element) => {
   let header = element.querySelector(".collapsible-header");
   let content = element.querySelector(".collapsible-body");
   header.setAttribute("aria-expanded", "true");
   content.setAttribute("aria-hidden", "false");
 },
});
 
 
accordionElems.forEach((accordionElem) => {
 let accordionHeaders = accordionElem.querySelectorAll(".collapsible-header");
 let accordionContents = accordionElem.querySelectorAll(".collapsible-body");
 
 accordionHeaders.forEach((element) => {
   element.setAttribute("aria-expanded", "false");
 });
 
 accordionContents.forEach((element) => {
   element.setAttribute("aria-hidden", "true");
 });
});
~~~
 
- Se ha definido el acordeón de acuerdo a las indicaciones de Materialize, en las que se ha utilizado clases de tipo collapsible popout, cuyo diseño resalta a la hora de expandir la sección indicada por collapsible-header, y a su vez, habilita su propia sección de collapsible-body, que posee cierto contenido. Además, se han añadido funcionalidades extras en JavaScript para que se cambien los atributos aria-expanded y aria-hidden dependiendo si la opciones se encuentran desplegadas o no.


2. **BreadCrumbs (todas las páginas):**

- **html**
~~~
 <nav>
   <div class="nav-wrapper cyan lighten-3">
     <div class="col s12" aria-label="breadcrumb">
       <a href="./index.html" class="breadcrumb">Home</a>
       <a href="#" class="breadcrumb" aria-current= "funcionamiento">Funcionamiento</a>
     </div>
   </div>
 </nav>
~~~

- Dado que se ha establecido en nuestra web distintas páginas referenciadas, se ha establecido en cada una de ellas un <div> donde se activa el aria-label para el breadcrumbs a definir. Por ello, puesto que la página inicial es el index.html, si cuando se intenta acceder al resto de páginas, estas parten del inicio y con una profundidad única. Es decir, si estoy en Home y se accede a novedades: Home → Novedades, y si de Novedades se accede a Foro: Home → Foro. Además, se marca con aria-current la posición donde estamos ubicados.


3. **Carousel (Home):**

- **html**
~~~
     <div aria-hidden="true" class="carousel carousel-slider">
       <a tabindex="-1" class="carousel-item" href="#one!"><img src="https://i.picsum.photos/id/1/800/400.jpg"></a>
       <a tabindex="-1" class="carousel-item" href="#two!"><img src="https://i.picsum.photos/id/20/800/400.jpg"></a>
       <a tabindex="-1" class="carousel-item" href="#three!"><img src="https://i.picsum.photos/id/4/800/400.jpg"></a>
       <a tabindex="-1" class="carousel-item" href="#four!"><img src="https://i.picsum.photos/id/3/800/400.jpg"></a>
     </div>
~~~

- **js**
~~~
document.addEventListener('DOMContentLoaded', function () {
 let elems = document.querySelectorAll('.carousel');
 let options = {
   'duration': 200,
   'indicators': true,
   'fullWidth': true
 }
 let instances = M.Carousel.init(elems, options);
});
~~~
 
- Para llevar a cabo el desarrollo de carousel mediante Materialize, ha sido necesario predefinir un carousel de tipo presentación, carousel-slider. Así mismo, se ha de determinar para cada una de las imágenes una clase carousel-item. Para su puesta en funcionamiento adecuado, se ha establecido un control manual mediantes puntos y que la imagen se ajuste a la ventana proporcionada por este carousel. Cabe destacar que nuestro carrousel no cuenta con un desplazamiento automático de imágenes y que las imágenes no aportan información relevante a la página por lo que no cuentan con un texto alternativo para ser leído.

