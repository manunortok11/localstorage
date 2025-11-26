document.getElementById("formcadastro").addEventListener("submit", function(event)
{
/**submete dados sem que outra página seja carregada */
    event.preventDefault();

    /**declara as variaveis epega os valores da caixa de texto */
    var nome=document.getElementById("nome").value
    var idade=document.getElementById("idade").value
    /**declara o objeto com os atributos nome e idade e atribui os dados q estao nas variaveis acima nome eidade */
    var aluno={nome:nome ,idade:idade}

    /**criar lista de alunos, carregar os alunos pré existentes ou carregar uma lista vazia */
    var lista_alunos= JSON.parse(localStorage.getItem('listagem')) || []
    /**inserir o aluno na lista */
    lista_alunos.push(aluno)

    /**adicionar o aluno no arquivo do local storage */
    localStorage.setItem('listagem', JSON.stringify(lista_alunos))

   document.getElementById('formcadastro').reset()

   exibir_alunos()
})

function exibir_alunos(){
    var lista_alunos=JSON.parse(localStorage.getItem('listagem')) || []
    var output=document.getElementById('output')
        output.innerHTML=''

for(let i=0;i<lista_alunos.length;i++){
    let li=document.createElement('li')
    li.textContent='Nome:'+lista_alunos[i].nome+'   Idade:'+lista_alunos[i].idade
    output.appendChild(li)
}
}