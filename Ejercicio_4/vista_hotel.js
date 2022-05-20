$ ( document ).ready(function(){
    var $sthis = $(this);
    var $procesar = $sthis.find('input#procesarhotel');
    $procesar.click(function(event){
        event.preventDefault();
        controladorHotel($sthis);
    });
});