"use strict";
if (!($ || jQuery)) {
    console.error('no se ha cargado la librería de jQuery');
}

/**
 * Clase para el llamado de servicios vía ajax. 
 * Se utiliza jQuery.ajax
 * @constructor
 * @author MEHS
 * @version 21.09.2017
 * @param {serviceModel} model - objeto modelo para el llamado de servicios {@link serviceModel}
 */
var Call = function Call(model) {
    if (model) {
        this.model = model;
    } else {
        console.error('No se establecido el model para el consumo de un servicio');
    }
};

Call.prototype.Calling = function Calling() {
    var call = $.ajax({
        url: this.model.url,
        contentType: this.model.contentType,
        method: this.model.verb
    });
    call.beforeSend = this.model.beforeSend;
    call.sucess = this.model.sucess;
    call.error = this.model.error;
}