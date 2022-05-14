var Gerente = function() {
    var sthis = this;
    this.datosGerente = {
        nombreCompleto: '',
        numeroDocumento: '',
        telefono: ''
    };
    var functionTrue = function(){
        return true
    };
    var checkCampoDocumento = function(){
        var expRegular = new RegExp("\[0-9]{8}-[A-Z]{1}");
        var valido = expRegular.test(sthis.datosGerente.numeroDocumento);
        if (!valido){
            return false;
        }
        var parteNumericaDocumento = sthis.datosGerente.numeroDocumento.split('-')[0];
        var parteLiteralDocumento = sthis.datosGerente.numeroDocumento.split('-')[1];
        parteNumericaDocumento= parseInt(parteNumericaDocumento);
        var caracterCorrecto ='TRWAGMYFPDXBNJZSQVHLCKE';
        var caracter = caracterCorrecto.charAt(parteNumericaDocumento % 23);
        return parteLiteralDocumento === caracter;
    };
    var checkCampoTelefono = function(){
        var expRegular = new RegExp("\[+]{1}[0-9]{2}[.]{1}[0-9]{9}");
        var valido = expRegular.test(sthis.datosGerente.telefono);
        return valido;
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
    this.checkCampo = function(campo){
        if((campo)&&(campo.length>0)){
            if (campo === 'numeroDocumentoGerente'){
                return this.checkCampoDocumento;
        } else if (campo==='telefono'){
            return this.checkCampoTelefono;
        } else {
            return this.functionTrue;
        }
    }
};
    return {
        getNombreCompleto: getNombreCompleto,
        setNombreCompleto: setNombreCompleto,
        getNumeroDocumento: getNumeroDocumento,
        setNumeroDocumento: setNumeroDocumento,
        getTelefono: getTelefono,
        setTelefono: setTelefono,
        checkCampo: checkCampo
    };
};