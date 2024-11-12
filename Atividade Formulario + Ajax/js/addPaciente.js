//seleciona o botao que ira adicionar os dados do paciente na tabela
var botaoAdicionar = document.getElementById("adicionar");

//Array de Paciente
var pacientes = [];

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.getElementById("formIMC");

    var paciente = obterDadosDoFormulario(form);

    var erros = validarPaciente(paciente);
    if(erros.length > 0){
        exibirMensagensErros(erros);
        return;
    }
    //console.log("teste");
    pacientes.push(paciente);
    console.log(pacientes);

    listarPacientes();

    form.reset();

    var mensagemErro = document.getElementById("mensagens-erros");
    mensagemErro.innerHTML = "";
});

function listarPacientes(){
    var corpoTabela = document.getElementById("bodyTable");

    corpoTabela.innerHTML = "";
    for (var i = 0; i < pacientes.length; i++){
        c = "<tr>" + 
                "<td>" + pacientes[i].nome + "</td>" +
                "<td>" + pacientes[i].altura + "</td>" +  
                "<td>" + pacientes[i].peso + "</td>" + 
                "<td>" + pacientes[i].imc + "</td>" + 
                "<td><img src='img/excluir.jpg' width='20px' heigth='20px' onclick='excluir(" + i + ");'/></td>" + // Passamos o indice aqui para facilitar a exclusão
            "</tr>";
        corpoTabela.innerHTML = corpoTabela.innerHTML + c;
    }
}

function obterDadosDoFormulario(form) {

    //paciente é um Objeto
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

// A função recebe como parâmetro o indice do paciennte no array
function excluir(index){
    // O pop() remove o ultimo elemento e retorna esse elemento
    // Então colocamos esse elemento no lugar do que está sendo removido
	console.log(index);
    console.log(pacientes.length);

	if(pacientes.length == 1){
		pacientes.pop();
	}
    else if(pacientes.length == (index+1)){
        //console.log("remover o ultimo elemento");
        pacientes.pop();
    }
	else{
        pacientes[index] = pacientes.pop();
	}
    console.log(pacientes);

    // Depois temos que listar novamente para atualizar o html
    listarPacientes();
}

function validarPaciente(p){
    var erros = [];

    if(p.nome.length == 0 && p.altura.length == 0 && p.peso.length == 0){
        erros.push("O nome, altura e o peso precisa ser preenchido!");
        document.getElementById("memerros").style.backgroundColor = '#F67979';
    }
    else if(p.nome.length == 0 && p.altura.length == 0){
        erros.push("O nome e a altura precisa ser peenchidos!");
        document.getElementById("memerros").style.backgroundColor = '#F67979';
    }
    else if(p.altura.length == 0 && p.peso.length == 0){
        erros.push("A altura e o peso precisa ser peenchidos!");
        document.getElementById("memerros").style.backgroundColor = '#F67979';
    }
    else if(p.nome.length == 0 && p.peso.length == 0){
        erros.push("O nome e o peso precisar ser preenchidos!");
        document.getElementById("memerros").style.backgroundColor = '#F67979';
    }

    else if(p.altura.length == 0){
        erros.push("A altura precisa ser preenchido!");
        document.getElementById("memerros").style.backgroundColor = '#F67979';
    }
    else if(p.peso.length == 0){
        erros.push("O peso pesisa ser preenchido!");
        document.getElementById("memerros").style.backgroundColor = '#F67979';
    }

    else if(p.nome.length == 0){
        erros.push("O nome precisa ser preenchidos!");
        document.getElementById("memerros").style.backgroundColor = '#F67979';
    }
    
    if(altura.value >= 3){
        erros.push("Informe uma altura válida!");
        document.getElementById("memerros").style.backgroundColor = '#F67979';
    }

    if(altura.value == Text){
        erros.push("Informe uma altura válida!");
        document.getElementById("memerros").style.backgroundColor = '#F67979';
    }

    if(peso.value > 600){
        erros.push("Informe um peso válido!");
        document.getElementById("memerros").style.backgroundColor = '#F67979';
    }
    return erros;
}

function exibirMensagensErros(erros){
    var ul = document.getElementById("mensagens-erros");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}