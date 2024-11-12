function caucularimc(){
    var k = document.getElementById("kilos").value;
    var a = document.getElementById("metros").value;
    var n = document.getElementById("nome").value;
    var a = a / 100;
    var imc = k / (a * a);
    alert (n + " seu IMC é " + imc)
    
    if (imc <= 18.4){
        document.write("<img src='img/magroo.jpg'>")
    }
    else if(imc <= 24.9){
        document.write("<img src='img/normal.jpg'>")
    }
    else if(imc <= 29.9){
        document.write("<img src='img/acima.jpg'>")
    }
    else if(imc >= 30){
        document.write("<img src='img/obeso.jpg'>")
    }
}
