# Como Ayudar México

---

### ¿Qué es Cómo Ayudar?

Es un proyecto que sirve como repositorio de información para ayudar a recopilar la información de asosiaciones, entidades, organizaciones, centros de acopio o cualquier forma de ayuda en caso de desastres naturales.

### ¿Cómo puedo participar?

Actualmente éxisten 2 formas de participar.

- Por la emergencia, el sitio web esta hecho solamente con HTML Y CSS Básico, si eres un desarrollador/programador que quiera ayudar a construir una plataforma más en forma (Con un backend automatizado) por favor contactame en twitter [@eldelentes](https://twitter.com/eldelentes) o por correo eldelentes@gmail.com

- Ayuda agregando tarjetas con información en el sitio, solamente es necesario hacer copy y paste del siguiente markup con información que encuentres en twitter (Busca #comoayudar o @comoayudar).


1.- Clona el proyecto y crea una branch.

2.- Copia y Pega el siguiente div con la información correspondiente.
```
<article class="card">
  <h2 class="card__title">Donación Topos</h2>
  <!-- Agrega una pequeña descripción -->
  <p class="card__desc">Los Topos son una asosiación de rescatistas independientes. Tu ayuda provee de los utencilios necesarios para el rescate de personas.</p>
  <div class="card__info">
     <div class="card__type">
       <h4>Tipo de donación:</h4>
       <!-- Especifica si la ayuda es en especie, monetaria, ayuda, etc. -->
       <h3><i class="fa fa-money"></i>Monetaria</h3>
     </div>
     <div class="card__location">
       <h4>Puedes ayudar desde:</h4>
       <!-- Especifica si se puede ayudar desde una parte o en todo México -->
       <h3><i class="fa fa-globe"></i>Todo el mundo.</h3>
     </div>
  </div>
  <!-- Link al contacto, imágen, correo o información -->
  <a class="card__button" target="__blank" href="https://twitter.com/topos/status/908000616575680512">Más Información</a>
</article>
```

3.- Crea un Pull Request.

---

Si tienes alguna otra idea de como colaborar por favor contactame.

---

### Colaboradores
[@eldelentes](https://twitter.com/eldelentes)