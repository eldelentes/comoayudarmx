# Como Ayudar México

---

### ¿Qué es Cómo Ayudar?

Es un proyecto que sirve como repositorio de información para ayudar a recopilar la información de asosiaciones, entidades, organizaciones, centros de acopio o cualquier forma de ayuda en caso de desastres naturales.

### ¿Cómo puedo participar?

Actualmente éxisten 3 formas de participar.

- Por la emergencia, el sitio web esta hecho solamente con HTML Y CSS Básico, si eres un desarrollador/programador que quiera ayudar a construir una plataforma más en forma (Con un backend automatizado) por favor contactame en twitter [@eldelentes](https://twitter.com/eldelentes) o por correo eldelentes@gmail.com

- Ayuda agregando tarjetas con información en el sitio, solamente es necesario hacer copy y paste del markup del paso 2 con información que encuentres en twitter (Busca #comoayudar o @comoayudarmx).

- Ayuda agregando tarjetas con información de contactos de emergencia relevantes, solamente es necesario hacer copy y paste del markup del
paso 3 y reemplazar los datos por los de la entidad de atención
ciudadana que quieras agregar.

1.- Clona el proyecto y crea una branch.

2.- Abre `cards.js` y agrega tal cual se menciona en el comentario el código con su respectiva información:

```
 {title: "Donación Topos", description: "Los Topos son una asosiación de rescatistas indepe…tencilios necesarios para el rescate de personas.", type: "Monetaria", location: "Todo el mundo.", link: "https://twitter.com/topos/status/908000616575680512"},
```

3.- Para agregar información de contacto de entidades de atención
ciudadana y emergencias, copia y pega el siguiente div con la información correspondiente en la página de `contactos.html`.
```
<article class="card">
  <h2 class="card__title">Protección Civil CDMX</h2>
  <!-- Agrega una pequeña descripción -->
  <div class="card__info">
     <div class="card__type">
       <h4>Teléfono de Emergencia:</h4>
       <!-- Especifica si la ayuda es en especie, monetaria, ayuda, etc. -->
       <h3><a href="tel:5683-2222"><i class="fa fa-phone"></i>5683-2222 </a></h3>
     </div>
     <div class="card__location">
       <h4>Puedes contactar desde:</h4>
       <!-- Especifica si se puede ayudar desde una parte o en todo México -->
       <h3><i class="fa fa-globe"></i>CDMX</h3>
     </div>
  </div>
  <!-- Link al contacto, imágen, correo o información -->
  <a class="card__button" target="__blank" href="http://www.proteccioncivil.cdmx.gob.mx/">Más Información</a>
</article>

```

4.- Crea un Pull Request.

---

Si tienes alguna otra idea de como colaborar por favor contactame.

---

### Colaboradores
- [@eldelentes](https://twitter.com/eldelentes)

- [Héctor Morales](https://github.com/HectorMg)

- [Javier Rivero](http://javierivero.com/)

- [Benito Serna](https://github.com/bhserna)

- [Oscar Barajas](https://github.com/gndx)

- [Raúl Salinas](https://github.com/nacapulque)

- [Jorge Rios](https://github.com/jotarios)

- [Isabel Palomar](https://github.com/IsabelPalomar)

- [Pedro Garza](https://github.com/PedroASGarza)

- [Alfrobinson](https://github.com/alfrobinson)