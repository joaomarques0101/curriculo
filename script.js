const form = document.getElementById('curriculo-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const observacao = document.getElementById('observacao').value;
  const file = document.getElementById('curriculo').files[0];

  if (!file) {
    alert('Por favor, anexe um currículo em PDF.');
    return;
  }

  // Simulando envio
  alert('Currículo enviado com sucesso! Obrigado.');

  form.reset();
});
