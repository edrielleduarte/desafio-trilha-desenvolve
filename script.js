// Animação do titulo
const tituloQuemSomos = document.querySelector(".tituloSession");

function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 80 * i);
  });
}

function ativarTitulo() {
  typeWrite(tituloQuemSomos);
}

tituloQuemSomos.addEventListener("focus", ativarTitulo());

// Validação do Formulário em JS

const button = document.querySelector(".enviar");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const nomeCampus = document.getElementById("nomeUser");
  const email = document.getElementById("emailUser");
  const telefone = document.getElementById("telefoneUser");
  const mensagem = document.getElementById("mensagem");
  const resposta = document.getElementById("resposta");
  const letrasAlfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const caracterEspecial = "`´%&*#$;/\\|?,^]['+()!'-_:<>¨";
  const numeros = "0123456789";
  const dominio = email.value.substring(
    email.value.indexOf("@") + 1,
    email.value.length
  );

  resposta.innerHTML = "";

  if (nomeCampus.value === "") {
    alert("Preencha o campus Nome e Sobrenome");
    nomeCampus.focus();
    return;
  }
  if (email.value === "") {
    alert("Preencha campus email");

    email.focus();
    return;
  }
  if (
    email.value.indexOf("@") > 32 ||
    dominio.indexOf(".com") > 16 ||
    email.value.indexOf("@") === -1 ||
    email.value.indexOf(".br") !== -1 ||
    dominio.indexOf(".") < dominio.indexOf(".com")
  ) {
    alert(
      "Email Inválido, não segue padrão! User: max. caracteres = 32, dominio: max. caracteres igual 16, conter o @ e não possuir br"
    );
    email.focus();
    return;
  }

  for (let i = 0; i < dominio.length; i++) {
    if (letrasAlfabeto.indexOf(dominio.charAt(i)) !== -1) {
      alert(
        "Email Inválido, verifique o caracter do dominio se não estar com letra maiuscula"
      );
      email.focus();
      return;
    }
  }
  for (let num = 0; num < dominio.length; num++) {
    if (numeros.indexOf(email.value.charAt(num)) !== -1) {
      alert("Email invalido, no dominio contem numero apos o @");
      email.focus();
      return;
    }
  }
  for (let n = 0; n < email.value.length; n++) {
    if (caracterEspecial.indexOf(email.value.charAt(n)) !== -1) {
      alert("Email invalido, no email contem caracter especial");
      email.focus();
      return;
    }
  }

  if (telefone.value === "") {
    alert("Preencha o campus Telefone");

    telefone.focus();
    return;
  }

  if (mensagem.value === "") {
    alert("Preencha o campus Mensagem");

    mensagem.focus();
    return;
  }
  resposta.innerHTML += `Email enviado com sucesso, obrigado pelo contato ${nomeCampus.value}! <br>`;

  nomeCampus.value = "";
  email.value = "";
  telefone.value = "";
  mensagem.value = "";
});
