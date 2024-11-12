function IncluirAgd () {
    let n = document.getElementById("nome").value;
    let t = document.getElementById("tel").value;
    let e = document.getElementById("email").value;
    let i = document.getElementById("insta").value;
    let f = document.getElementById("face").value;
    
    document.getElementById("no").innerHTML=n;
    document.getElementById("te").innerHTML=t;
    document.getElementById("em").innerHTML=e;
    document.getElementById("in").innerHTML=i;
    document.getElementById("fa").innerHTML=f;
}
function ExcluirAgd () {
    document.getElementById("no").innerHTML='';
    document.getElementById("te").innerHTML='';
    document.getElementById("em").innerHTML='';
    document.getElementById("in").innerHTML='';
    document.getElementById("fa").innerHTML='';
}
function LimparCampos() {
    document.getElementById("nome").value='';
    document.getElementById("tel").value='';
    document.getElementById("email").value='';
    document.getElementById("insta").value='';
    document.getElementById("face").value='';
}