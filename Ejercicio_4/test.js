QUnit.test("Ejercicio_3", function(assert) {
    var gerente = new Gerente();
    gerente.setNombreCompleto('Junior García');
    gerente.setNumeroDocumento('79095983-F');
    gerente.setTelefono('+34.677614872');
    var habitación1 = new Habitación();
    habitación1.setPlanta('Primera');
    habitación1.setNumeroCamas(2);
    habitación1.setTelefono('+34.615675767');
    var habitación2 = new Habitación();
    habitación2.setPlanta('Segunda');
    habitación2.setNumeroCamas(1);
    habitación2.setTelefono('+34.614675767');
    var habitación3 = new Habitación();
    habitación3.setPlanta('Tercera');
    habitación3.setNumeroCamas(3);
    habitación3.setTelefono('+34.613675767');
    var hotel = new Hotel();
    hotel.setNombre('Hotel');
    hotel.setCiudad('Alicante');
    hotel.setDirección('Cª el mendigo');
    hotel.setTelefono('+34.000000000');
    hotel.setSitioWeb('http://www.hotel.com/');
    hotel.setGerente(gerente);
    hotel.addHabitaciones(habitación1);
    hotel.addHabitaciones(habitación2);
    hotel.addHabitaciones(habitación3);
    // Operaciones backend Recuperación de datos con get
    // Datos Hotel
    assert.equal(hotel.getNombre(), 'Hotel', 'OK');
    assert.equal(hotel.getCiudad(), 'Alicante', 'OK');
    assert.equal(hotel.getDirección(), 'Cª el mendigo', 'OK');
    assert.equal(hotel.getTelefono(), '+34.000000000', 'OK');
    assert.equal(hotel.getSitioWeb(), 'http://www.hotel.com/', 'OK');
    // Test para comprobar datos específicos
    var comprobarTelefonoHotel = hotel.checkCampo('telefono');
    var validoTelefonoHotel = comprobarTelefonoHotel;
    assert.ok(validoTelefonoHotel, 'ok');
    var comprobarWebHotel = hotel.checkCampo('sitioWeb');
    var validoWebHotel = comprobarWebHotel;
    assert.ok(validoWebHotel, 'ok');
    // Datos Gerente
    var GerenteHotel = hotel.getGerente();
    var comprobarDocumentoGerente = gerente.checkCampo('documento');
    var validoDocumentoGerente = comprobarDocumentoGerente;
    var comprobarTelefonoGerente = gerente.checkCampo('telefono');
    var validoTelefonoGerente = comprobarTelefonoGerente;
    assert.equal(GerenteHotel.getNombreCompleto(), 'Junior García', 'OK');
    assert.equal(GerenteHotel.getNumeroDocumento(), '79095983-F', 'OK');
    assert.equal(GerenteHotel.getTelefono(), '+34.677614872', 'OK'); 
    assert.ok(validoDocumentoGerente,'ok');
    assert.ok(validoTelefonoGerente, 'ok');
    // Datos Habitaciones
    var primeraHabitacion = hotel.getHabitaciones(0);
    var segundaHabitacion = hotel.getHabitaciones(1);
    var terceraHabitacion = hotel.getHabitaciones(2);
    var comprobarTelefonoHabitación_1 = habitación1.checkCampo('telefono');
    var validoTelefonoHabitación_1 = comprobarTelefonoHabitación_1;
    var comprobarTelefonoHabitación_2 = habitación2.checkCampo('telefono');
    var validoTelefonoHabitación_2 = comprobarTelefonoHabitación_2;
    var comprobarTelefonoHabitación_3 = habitación3.checkCampo('telefono');
    var validoTelefonoHabitación_3 = comprobarTelefonoHabitación_3;
    assert.equal(primeraHabitacion.getPlanta(), 'Primera', 'OK');
    assert.equal(primeraHabitacion.getNumeroCamas(), 2, 'OK');
    assert.equal(primeraHabitacion.getTelefono(), '+34.615675767', 'OK');
    assert.equal(segundaHabitacion.getPlanta(), 'Segunda', 'OK');
    assert.equal(segundaHabitacion.getNumeroCamas(), 1, 'OK');
    assert.equal(segundaHabitacion.getTelefono(), '+34.614675767', 'OK');
    assert.equal(terceraHabitacion.getPlanta(), 'Tercera', 'OK');
    assert.equal(terceraHabitacion.getNumeroCamas(), 3, 'OK');
    assert.equal(terceraHabitacion.getTelefono(), '+34.613675767', 'OK');
    assert.ok(validoTelefonoHabitación_1,'ok');
    assert.ok(validoTelefonoHabitación_2,'ok');
    assert.ok(validoTelefonoHabitación_3,'ok');
})