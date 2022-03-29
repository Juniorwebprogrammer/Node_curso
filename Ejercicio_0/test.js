QUnit.test('Prueba_0', function(assert) {
    var libro = new Libro();
    libro.setTitulo('Prueba_0');
    libro.setEditorial('Pruebas');
    libro.setAutor(autor);
    libro.setFechaPrimeraEdición('30/02/2020');
    libro.setISBN('123456789AB');
    var autor = new Autor();
    autor.setNombreCompleto('Junior García');
    autor.setFechaNacimiento('23/02/2020');
    autor.setNacionalidad('Española');

    // Operaciones backend, rescatamos datos
    // Datos del Libro
    assert.equal(libro.getTitulo(), 'Prueba_0', 'Ok');
    assert.equal(libro.getEditorial(), 'Pruebas', 'Ok');
    assert.equal(libro.getFechaPrimeraEdición(), '30/02/2020', 'Ok');
    assert.equal(libro.getISBN(), '123456789AB', 'Ok');
    // Datos Autor
    assert.equal(autor.getNombreCompleto(), 'Junior García', 'Ok');
    assert.equal(autor.getFechaNacimiento(), '23/02/2020', 'Ok');
    assert.equal(autor.getNacionalidad(), 'Española', 'Ok');
})