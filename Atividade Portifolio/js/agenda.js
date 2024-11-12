    function limpar() {
        document.getElementById("nome").value='é isso';
    }
    //var tituloPag = document.querySelector("#titulo");
    var tituloPag = document.getElementById("titulo");
    //console.log(tituloPag2);
    
    //Funcao anonima
    tituloPag.addEventListener("click", function(){
        tituloPag.textContent = "Olá";
    });
    
    //function nomeFuncao(){
    //    tituloPag.textContent = "Olá";
    //}
    
    var botaoAdd = document.getElementById("adicionar-contato");
    
    botaoAdd.addEventListener("click", addContato);
    
    function addContato(event){
        event.preventDefault();
    
        //Ciriando uma tr
        var contatoTr = document.createElement("tr");
        
        var formContato = document.getElementById("formulario");
    
        //Criando 06 tds
        var nomeTd = document.createElement("td");
        var emailTd = document.createElement("td");
        var celularTd = document.createElement("td");
        var instaTd = document.createElement("td");
        var faceTd = document.createElement("td");
        var excluirTd = document.createElement("td");
    
        //Preenchendo as Tds
        nomeTd.textContent = formContato.nome.value;
        //console.log(nomeTd);
        emailTd.textContent = formContato.email.value;
        celularTd.textContent = formContato.cel.value;
        instaTd.textContent = formContato.insta.value;
        faceTd.textContent = formContato.face.value;
        excluirTd.innerHTML = "<button class='btn btn-danger exluir'><i class='fa fa-trash-o'>Excluir</i></button>";
        
        contatoTr.appendChild(nomeTd);
        contatoTr.appendChild(emailTd);
        contatoTr.appendChild(celularTd);
        contatoTr.appendChild(instaTd);
        contatoTr.appendChild(faceTd);
        contatoTr.appendChild(excluirTd);
    
        //console.log(contatoTr);
    
        var agendaTabela = document.getElementById("corpoAgenda");
        agendaTabela.appendChild(contatoTr);
    }

