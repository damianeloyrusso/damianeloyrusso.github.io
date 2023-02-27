function validarcorreo(email){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido= expReg.test(email)
    if(esValido==true){
        alert('El correo electrónico es válido');
        location.reload;
    }
    else{

        alert('El correo electrónico es inválido');
        location.reload;

    }

}
    