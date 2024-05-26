
let usuario = JSON.parse(localStorage.getItem("usuario-logado"));

if(usuario){
console.log(usuario.nomeCompleto);

const msgWelcome = document.querySelector("#bem-vindo");
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
msgWelcome.innerText = usuario.nomeCompleto;
email.innerText = usuario.emailUsuario;
senha.innerText = usuario.senhaUsuario;

const logoutUser = document.querySelector("#logout-user");
logoutUser.addEventListener("click",()=>{
    localStorage.removeItem("usuario-logado");
    window.location.href = "../login.html";
});
}else{
    window.location.href = "../login.html";
}