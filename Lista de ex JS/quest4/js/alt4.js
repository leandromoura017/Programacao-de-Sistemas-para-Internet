// function Validar() {
//     alert("Ok")
// }
// let inputNome = document.querySelector(".nameClient");
// inputNome.addEventListener("keydown", function(e) {  
//   if (e.key > "0" && e.key < "9") {
//     e.preventDefault();
//   }
// });
function Validar() {
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var idade = document.getElementById("idade");
  var endereço = document.getElementById("endereço");
  var tel = document.getElementById("tel");
  var datnas = document.getElementById("datnas");
  var cpf = document.getElementById("cpf");
  var senha = document.getElementById("senha");
  var confsenha = document.getElementById("confsenha");

  if (nome.value == "" && email.value == "" && idade.value == "" && endereço.value == "" && tel.value == "" && datnas.value == "" && cpf.value == "" && senha.value == "" && confsenha.value == "" ){
    alert("'Nome, Email, Idade, Endereço, Telefone, Data de nascimento, CPF, Senha e conf. de Senha' Não Informados!");
     nome.focus();
     return;
  }  
  else if(nome.value == ""){
    alert("Campus 'Nome' vazio!");
     nome.focus();
     return;
  }
  else if(email.value == ""){
    alert("Campus 'Email' vazio!");
     email.focus();
     return;
  }
  else if(idade.value == ""){
    alert("Campus 'Idade' vazio!")
    idade.focus();
    return;
  }
  else if(endereço.value == ""){
    alert("Campus 'Endereço' vazio!")
    endereço.focus();
    return;
  }
  else if(tel.value == ""){
    alert("Campus 'Telefone' vazio!")
    tel.focus();
    return;
  }
  else if(datnas.value == ""){
    alert("Campus 'Data de Nascimento' vazio!")
    datnas.focus();
    return;
  }
     // if (nome.valeu == "" && email.valeu == "" && idade.valeu == "" && endereço.valeu == "" && tel.valeu == "" && datnas.valeu == "" && cpf.valeu == "" && senha.valeu == "" && confsenha.valeu == "" ){
    //   alert("'Nome, Email, Idade, Endereço, Telefone, Data de nascimento, CPF, Senha e conf. de Senha' Não Informados!");
    //   return;

    // }

  
  // else if(email.value == "")
  //   alert("Email não informado!")

  // if (n.value == "") {
  //   alert("O campus 'Nome' não foi informado.")
  //   n.focus();
  //   return;
  // }
  
}
