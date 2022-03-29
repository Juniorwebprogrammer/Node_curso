var Libro = function() {
    var sthis = this;
    this.datosLibro = {
        titulo: '',
        editorial: '',
        autor: {},
        fechaPrimeraEdición: '',
        isbn: ''
    };
    var getTitulo = function() {
        return sthis.datosLibro.titulo
    };
    var setTitulo = function(TituloLibro) {
        sthis.datosLibro.titulo = TituloLibro
    };
    var getEditorial = function() {
        return sthis.datosLibro.editorial
    };
    var setEditorial = function(EditorialLibro) {
        sthis.datosLibro.editorial = EditorialLibro
    };
    var getAutor = function() {
        return sthis.datosLibro.autor
    };
    var setAutor = function(AutorLibro) {
        sthis.datosLibro.autor = AutorLibro
    };
    var getFechaPrimeraEdición = function() {
        return sthis.datosLibro.fechaPrimeraEdición
    };
    var setFechaPrimeraEdición = function(FechaPrimeraEdiciónLibro) {
        sthis.datosLibro.fechaPrimeraEdición = FechaPrimeraEdiciónLibro
    };
    var getISBN = function() {
        return sthis.datosLibro.isbn
    };
    var setISBN = function(ISBNLibro) {
        sthis.datosLibro.isbn = ISBNLibro
    };
    return {
        getTitulo: getTitulo,
        setTitulo: setTitulo,
        getEditorial: getEditorial,
        setEditorial: setEditorial,
        getAutor: getAutor,
        setAutor: setAutor,
        getFechaPrimeraEdición: getFechaPrimeraEdición,
        setFechaPrimeraEdición: setFechaPrimeraEdición,
        getISBN: getISBN,
        setISBN: setISBN
    };
};