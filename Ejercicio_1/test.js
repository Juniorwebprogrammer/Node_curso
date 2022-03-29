QUnit.test("Ejercicio_1", function(assert) {
    var gerente = new Gerente();
    gerente.setNombreCompleto('Junior García');
    gerente.setNumeroDocumento('79095983F');
    gerente.setTelefono('+34 677 61 48 72');
    var habitación1 = new Habitación();
    habitación1.setPlanta('Primera');
    habitación1.setNumeroCamas(2);
    habitación1.setTelefono('+34 615 67 57 67');
    var habitación2 = new Habitación();
    habitación2.setPlanta('Segunda');
    habitación2.setNumeroCamas(1);
    habitación2.setTelefono('+34 614 67 57 67');
    var habitación3 = new Habitación();
    habitación3.setPlanta('Tercera');
    habitación3.setNumeroCamas(3);
    habitación3.setTelefono('+34 613 67 57 67');
    var hotel = new Hotel();
    hotel.setNombre('Hotel');
    hotel.setCiudad('Alicante');
    hotel.setDirección('Cª el mendigo');
    hotel.setTelefono('+34 000 00 00 00');
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
    assert.equal(hotel.getTelefono(), '+34 000 00 00 00', 'OK');
    assert.equal(hotel.getSitioWeb(), 'http://www.hotel.com/', 'OK');
    // Datos Gerente
    var GerenteHotel = hotel.getGerente();
    assert.equal(GerenteHotel.getNombreCompleto(), 'Junior García', 'OK');
    assert.equal(GerenteHotel.getNumeroDocumento(), '79095983F', 'OK');
    assert.equal(GerenteHotel.getTelefono(), '+34 677 61 48 72', 'OK');
    // Datos Habitaciones
    var primeraHabitacion = hotel.getHabitaciones(0);
    var segundaHabitacion = hotel.getHabitaciones(1);
    var terceraHabitacion = hotel.getHabitaciones(2);
    assert.equal(primeraHabitacion.getPlanta(), 'Primera', 'OK');
    assert.equal(primeraHabitacion.getNumeroCamas(), 2, 'OK');
    assert.equal(primeraHabitacion.getTelefono(), '+34 615 67 57 67', 'OK');
    assert.equal(segundaHabitacion.getPlanta(), 'Segunda', 'OK');
    assert.equal(segundaHabitacion.getNumeroCamas(), 1, 'OK');
    assert.equal(segundaHabitacion.getTelefono(), '+34 614 67 57 67', 'OK');
    assert.equal(terceraHabitacion.getPlanta(), 'Tercera', 'OK');
    assert.equal(terceraHabitacion.getNumeroCamas(), 3, 'OK');
    assert.equal(terceraHabitacion.getTelefono(), '+34 613 67 57 67', 'OK');
})