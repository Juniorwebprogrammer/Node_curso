var Hotel = function() {
    var sthis = this;
    this.datosHotel = {
        nombre: '',
        ciudad: '',
        dirección: '',
        telefono: '',
        sitioWeb: '',
        gerente: null,
        habitaciones: []
    };

    var getNombre = function() {
        return sthis.datosHotel.nombre
    };
    var setNombre = function(nombreHotel) {
        sthis.datosHotel.nombre = nombreHotel
    };
    var getCiudad = function() {
        return sthis.datosHotel.ciudad
    };
    var setCiudad = function(ciudadHotel) {
        sthis.datosHotel.ciudad = ciudadHotel
    };
    var getDirección = function() {
        return sthis.datosHotel.dirección
    };
    var setDirección = function(direcciónHotel) {
        sthis.datosHotel.dirección = direcciónHotel
    };
    var getTelefono = function() {
        return sthis.datosHotel.telefono
    };
    var setTelefono = function(telefonoHotel) {
        sthis.datosHotel.telefono = telefonoHotel
    };
    var getSitioWeb = function() {
        return sthis.datosHotel.sitioWeb
    };
    var setSitioWeb = function(sitioWebHotel) {
        sthis.datosHotel.sitioWeb = sitioWebHotel
    };
    var getGerente = function() {
        return sthis.datosHotel.gerente
    };
    var setGerente = function(gerenteHotel) {
        sthis.datosHotel.gerente = gerenteHotel
    };
    var getHabitaciones = function(n) {
        var nhabitaciones = sthis.datosHotel.habitaciones.length;
        if (n < nhabitaciones) {
            return sthis.datosHotel.habitaciones[n];
        }
    };
    var addHabitaciones = function(habitacionesHotel) {
        sthis.datosHotel.habitaciones[sthis.datosHotel.habitaciones.length] = habitacionesHotel;
    };

    var checkCampo = function(campo){
        if ((campo)&&(campo.length>0)){
            if (campo === 'sitioWeb'){
                return function(){
                    var expRegular = new RegExp("\http://www[.]{1}[a-z]+[.]{1}[a-z]{2,3}");
                    var valido = expRegular.test(sthis.datosHotel.sitioWeb);
                    if (!valido){
                        return false;
                    }
                };
            } else if (campo==='telefono'){
                return function(){
                    var expRegular = new RegExp("\[+]{1}[0-9]{2][.]{1}[0-9]{9]");
                    var valido = expRegular.test(sthis.datosHotel.telefono);
                    return valido;
                };
            }else {
                return function(){
                    return true;
                };
            }
        }
    };

    return {
        getNombre: getNombre,
        setNombre: setNombre,
        getCiudad: getCiudad,
        setCiudad: setCiudad,
        getDirección: getDirección,
        setDirección: setDirección,
        getTelefono: getTelefono,
        setTelefono: setTelefono,
        getSitioWeb: getSitioWeb,
        setSitioWeb: setSitioWeb,
        getGerente: getGerente,
        setGerente: setGerente,
        getHabitaciones: getHabitaciones,
        addHabitaciones: addHabitaciones,
        checkCampo:checkCampo
    };
};