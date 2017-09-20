@extends('welcome')

@section('cards')
<!-- Aquí se agregan las tarjetas -->
<!-- Por favor, no modifiques el markup/html de las tarjetas, solamente remplaza la información. -->
<template id="card_template">
    <article class="card">
        <h2 class="card__title"></h2>
        <div class="card__badges"></div>
        <!-- Agrega una pequeña descripción -->
        <p class="card__desc"></p>
        <div class="card__info">
            <div class="card__type">
                <h4>Tipo de donación:</h4>
                <!-- Especifica si la ayuda es en especie, monetaria, ayuda, etc. -->
                <h3><i class="fa fa-info-circle"></i></h3>
            </div>
            <div class="card__location">
                <h4>Puedes ayudar desde:</h4>
                <!-- Especifica si se puede ayudar desde una parte o en todo México -->
                <h3><i class="fa fa-globe"></i></h3>
            </div>
        </div>
        <!-- Link al contacto, imágen, correo o información -->
        <a class="card__button" target="__blank" href="">Más Información</a>
    </article>
</template>
@endsection