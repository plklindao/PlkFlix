function inserirNome(){
let nomeUsuario = prompt("Qual é o teu nick?");
let elemento = document.querySelector ("#nome-usuario");
elemento.textContent = nomeUsuario;
}

inserirNome();