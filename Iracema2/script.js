document.getElementById('contatoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('resposta').innerText = "Mensagem enviada com sucesso! Obrigado pelo contato.";
    this.reset();
});
