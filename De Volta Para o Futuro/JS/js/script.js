

const formulario = document.getElementById("form-filme");


formulario.addEventListener("submit", function(event) {

    
event.preventDefault();

try {

        
const filme = document.getElementById("filme").value;
const carro = document.querySelector('input[name="carro"]:checked');
const personagem = document.getElementById("personagem").value;
const quartoFilme = document.getElementById("quarto-filme").value.trim();

        
if (!filme || !carro || !personagem || !quartoFilme) {
throw new Error("Por favor, responda todas as perguntas!");
}

a
if (quartoFilme.length < 5) {
throw new Error("Escreva uma ideia um pouco maior para o quarto filme.");
}

        
alert(
"Respostas enviadas com sucesso!\n\n" +
"Filme favorito: " + filme + "\n" +
"Carro preferido: " + carro.value + "\n" +
"Personagem favorito: " + personagem + "\n" +
"Ideia para o quarto filme: " + quartoFilme
);

        
formulario.reset();

} catch (erro) {

        
alert(erro.message);

}

});

<script src="js/script.js"></script>