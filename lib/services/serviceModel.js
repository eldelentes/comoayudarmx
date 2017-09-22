/**
 * Clase modelo para el consumo de servicios
 * @constructor
 * @author MEHS
 * @version 21.09.2017
 * @param {string} url - url del servicio
 * @param {string} verb - verbo restful
 * @param {string} contentType - content type 
 */
var serviceModel = function serviceModel(url, verb, sucess, beforeSend, error) {
    this.url = url;
    this.verb = verb;
    this.contentType = 'application/json';
    this.async = true;
    this.sucess = sucess;
    this.beforeSend = beforeSend;
    this.error = error;
}