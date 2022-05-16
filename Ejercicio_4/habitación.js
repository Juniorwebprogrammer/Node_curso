var Habitación = function() {
    var sthis = this;
    this.datosHabitacion = {
        planta: '',
        numeroCamas: 0,
        telefono: ''
    };
    // Refactorización aplicando clousures y lambdas
    this.functionTrue = function(){
        return true
    };
    this.checkCampoTelefono = function(){
        var expRegular = new RegExp("\[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
        var valido = expRegular.test(sthis.datosHabitacion.telefono);
        return valido;
    }
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

    this.checkCampo = function(campo){
        if ((campo)&&(campo.length>0)){
            if (campo === 'telefono'){
                return this.checkCampoTelefono;
            } else {
                return this.functionTrue;
            }
        }
    };
    

    return {
        getPlanta: getPlanta,
        setPlanta: setPlanta,
        getNumeroCamas: getNumeroCamas,
        setNumeroCamas: setNumeroCamas,
        getTelefono: getTelefono,
        setTelefono: setTelefono,
        checkCampo: checkCampo
    };
};