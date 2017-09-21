# Como Ayudar México

---

### ¿Qué es Cómo Ayudar?

Es un proyecto que sirve como repositorio de información para ayudar a recopilar la información de asosiaciones, entidades, organizaciones, centros de acopio o cualquier forma de ayuda en caso de desastres naturales.

### ¿Cómo puedo participar?

Actualmente existen 3 formas de participar.

- Entra [aquí](https://docs.google.com/forms/d/e/1FAIpQLSf_kylBvkVQXaJmBAILdpjKCsl6lERlhtnhFfB1_22g43sz4g/viewform) y llena la información necesaria, fíjate primero que no vayas a duplicar información ya existente.

- Por la emergencia, el sitio web esta hecho solamente con HTML Y CSS Básico, si eres un desarrollador/programador que quiera ayudar a con features nuevos por favor revise los issues y pr existentes.

- Ayuda agregando tarjetas con información de contactos de emergencia relevantes, siguiendo los siguientes pasos y reemplazando los datos por los de la entidad de atención ciudadana que quieras agregar.

1.- Clona el proyecto y crea una branch.

2.- Copia y pega el siguiente div con la información correspondiente en la página de `contactos.html`.

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

- [Carlos medina](https://www.medinnna.com/)

- [Jorge Téllez](https://www.twitter.com/novohispano)

- [Alejandro Escobedo](https://www.twitter.com/aalkz)

- [Mario Rodríguez](https://www.twitter.com/mariusbc)

- [Sebastián Osorio](https://github.com/sirgalleto)
