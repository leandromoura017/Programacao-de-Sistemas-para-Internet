function caucularimc(){
    var k = document.getElementById("kilos").value;
    var a = document.getElementById("metros").value;
    var n = document.getElementById("nome").value;
    var a = a / 100;
    var imc = k / (a * a);
    // alert (n + " seu IMC é " + imc);
    
       

    if (imc <= 18.4){
        document.getElementById("imagens").src='../img/abaixodopeso.jpg';
    }
    else if(imc <= 24.9){
        document.getElementById("imagens").src='../img/normal.jpg';
    }
    else if(imc <= 29.9){
        document.getElementById("imagens").src='../img/sobrepeso.jpg';
    }
    else if(imc <= 34.9) {
        document.getElementById("imagens").src='../img/obesidade1.jpg';
    }
    else if(imc <= 39.9) {
        document.getElementById("imagens").src='../img/obesidade2.jpg';
    }
    else if(imc >= 40) {
        document.getElementById("imagens").src='../img/obesidade3.jpg';
    }
}