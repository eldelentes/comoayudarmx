# Como Ayudar México

---

## ¿Qué es Cómo Ayudar?

Es un proyecto que sirve como repositorio de información para ayudar a recopilar la información de asociaciones, entidades, organizaciones, centros de acopio o cualquier forma de ayuda en caso de desastres naturales.

## ¿Cómo puedo participar?

Actualmente existen 3 formas de participar.

### Enviando información
Entra [aquí](https://docs.google.com/forms/d/e/1FAIpQLSf_kylBvkVQXaJmBAILdpjKCsl6lERlhtnhFfB1_22g43sz4g/viewform) y llena la información necesaria, fíjate primero que no vayas a duplicar información ya existente.

### Con código
Por la emergencia, el sitio web esta hecho solamente con HTML Y CSS Básico, si eres un desarrollador/programador que quiera ayudar a con features nuevos por favor revise los issues y pr existentes.

Si agregas funcionalidades al front-end, por favor agrega la descripción de tus textos en inglés y en español en `languages.js` y el atributo `data-lang`.

### Agregando contactos
Ayuda agregando tarjetas con información de contactos de emergencia relevantes, siguiendo los siguientes pasos y reemplazando los datos por los de la entidad de atención ciudadana que quieras agregar.

1.- Clona el proyecto y crea una branch.

2.- Copia y pega el siguiente div con la información correspondiente en la página de `contactos.html`.

```html
<article class="card">
  <h2 class="card__title">Protección Civil CDMX</h2>
  <!-- Agrega una pequeña descripción -->
  <div class="card__info">
    <div class="card__type">
      <h4 data-lang="emergency_phone">Teléfono:</h4>
      <!-- Especifica si la ayuda es en especie, monetaria, ayuda, etc. -->
      <h3><a href="tel:5683-2222"><i class="fa fa-phone"></i>5683-2222 </a></h3>
    </div>
    <div class="card__location">
      <h4 data-lang="emergency_where">Puedes contactar desde:</h4>
      <!-- Especifica si se puede ayudar desde una parte o en todo México -->
      <h3><i class="fa fa-globe"></i>CDMX</h3>
    </div>
  </div>
  <!-- Link al contacto, imágen, correo o información -->
  <a class="card__button" target="_blank" data-lang="more_info" href="http://www.proteccioncivil.cdmx.gob.mx/">Más Información</a>
</article>

```

4.- Crea un Pull Request.

---

Si tienes alguna otra idea de como colaborar por favor contáctame.

---

## Colaboradores
- [@eldelentes](https://twitter.com/eldelentes)

- [Héctor Morales](https://github.com/HectorMg)

- [Javier Rivero](http://javierivero.com/)

- [Benito Serna](https://github.com/bhserna)

- [Oscar Barajas](https://github.com/gndx)

- [Raúl Salinas](https://twitter.com/nacapulque)

- [Jorge Rios](https://github.com/jotarios)

- [Isabel Palomar](https://github.com/IsabelPalomar)

- [Pedro Garza](https://github.com/PedroASGarza)

- [Alfredo Robinson](https://github.com/alfrobinson)

- [Carlos medina](https://www.medinnna.com/)

- [Javier Ruiz](https://github.com/javarv87)

- [Jorge Téllez](https://www.twitter.com/novohispano)

- [Alejandro Escobedo](https://www.twitter.com/aalkz)

- [Mario Rodríguez](https://www.twitter.com/mariusbc)

- [Sebastián Osorio](https://github.com/sirgalleto)

- [Gerardo Cataño](https://github.com/GerardoCatano)

- [Miguel Garcia](https://twitter.com/imikedd)

---

## Licencia

MIT

> Se concede permiso, de forma gratuita, a cualquier persona que obtenga una
> copia de este software y de los archivos de documentación asociados (el
> "Software"), para utilizar el Software sin restricción, incluyendo sin
> limitación los derechos a usar, copiar, modificar, fusionar, publicar,
> distribuir, sublicenciar, y/o vender copias del Software, y a permitir a las
> personas a las que se les proporcione el Software a hacer lo mismo, sujeto a
> las siguientes condiciones:
>
> El aviso de copyright anterior y este aviso de permiso se incluirán en todas
> las copias o partes sustanciales del Software.
>
> EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
> IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN,
> IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS
> AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN,
> DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O
> CUALQUIER OTRO MOTIVO, QUE SURJA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U
> OTRO TIPO DE ACCIONES EN EL SOFTWARE.

