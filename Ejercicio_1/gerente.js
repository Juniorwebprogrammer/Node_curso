var Gerente = function() {
    var sthis = this;
    this.datosGerente = {
        nombreCompleto: '',
        numeroDocumento: '',
        telefono: ''
    };
    var getNombreCompleto = function() {
        return sthis.datosGerente.nombreCompleto
    };
    var setNombreCompleto = function(NombreCompletoGerente) {
        sthis.datosGerente.nombreCompleto = NombreCompletoGerente
    };
    var getNumeroDocumento = function() {
        return sthis.datosGerente.numeroDocumento
    };
    var setNumeroDocumento = function(NumeroDocumentoGerente) {
        sthis.datosGerente.numeroDocumento = NumeroDocumentoGerente
    };
    var getTelefono = function() {
        return sthis.datosGerente.telefono
    };
    var setTelefono = function(TelefonoGerente) {
        sthis.datosGerente.telefono = TelefonoGerente
    };
    return {
        getNombreCompleto: getNombreCompleto,
        setNombreCompleto: setNombreCompleto,
        getNumeroDocumento: getNumeroDocumento,
        setNumeroDocumento: setNumeroDocumento,
        getTelefono: getTelefono,
        setTelefono: setTelefono
    };
};