var Habitación = function() {
    var sthis = this;
    this.datosHabitacion = {
        planta: '',
        numeroCamas: 0,
        telefono: ''
    };
    var getPlanta = function() {
        return sthis.datosHabitacion.planta
    };
    var setPlanta = function(plantaHabitacion) {
        sthis.datosHabitacion.planta = plantaHabitacion
    };
    var getNumeroCamas = function() {
        return sthis.datosHabitacion.numeroCamas
    };
    var setNumeroCamas = function(numeroCamasHabitacion) {
        sthis.datosHabitacion.numeroCamas = numeroCamasHabitacion
    };
    var getTelefono = function() {
        return sthis.datosHabitacion.telefono
    };
    var setTelefono = function(TelefonoHabitacion) {
        sthis.datosHabitacion.telefono = TelefonoHabitacion
    };

    return {
        getPlanta: getPlanta,
        setPlanta: setPlanta,
        getNumeroCamas: getNumeroCamas,
        setNumeroCamas: setNumeroCamas,
        getTelefono: getTelefono,
        setTelefono: setTelefono
    };
};