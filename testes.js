const nome = document.querySelector("span.teste");
nome.innerHTML = "Hello world";
nome.style.color = "blue";

function funcionalidadesWindow(){
  window.alert("Mensagem"); //mesagem
  window.confirm("Confirme esse dado"); // true or false
  window.prompt("Digite algo"); // 
  var ab = `${window.prompt("Digite abr")}`;
  window.alert(ab);
}
funcionalidadesWindow();

