function inserirNome(){
    let nomeUsuario = prompt("Qual o nome da lenda?");
    let elemento = document.querySelector ("#nome-usuario");
    elemento.textContent = nomeUsuario;
}


inserirNome();