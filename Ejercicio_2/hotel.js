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
        addHabitaciones: addHabitaciones
    };
};