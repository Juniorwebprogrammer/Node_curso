var Autor = function() {
    var sthis = this;
    this.datosAutor = {
        nombreCompleto: '',
        fechaNacimiento: '',
        nacionalidad: ''
    };
    var getNombreCompleto = function() {
        return sthis.datosAutor.nombreCompleto
    };
    var setNombreCompleto = function(NombreCompletoAutor) {
        sthis.datosAutor.nombreCompleto = NombreCompletoAutor
    };
    var getFechaNacimiento = function() {
        return sthis.datosAutor.fechaNacimiento
    };
    var setFechaNacimiento = function(FechaNacimientoAutor) {
        sthis.datosAutor.fechaNacimiento = FechaNacimientoAutor
    };
    var getNacionalidad = function() {
        return sthis.datosAutor.nacionalidad
    };
    var setNacionalidad = function(NacionalidadAutor) {
        sthis.datosAutor.nacionalidad = NacionalidadAutor
    };
    return {
        getNombreCompleto: getNombreCompleto,
        setNombreCompleto: setNombreCompleto,
        getFechaNacimiento: getFechaNacimiento,
        setFechaNacimiento: setFechaNacimiento,
        getNacionalidad: getNacionalidad,
        setNacionalidad: setNacionalidad
    };
};