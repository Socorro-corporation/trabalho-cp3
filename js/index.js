
let usuario = JSON.parse(localStorage.getItem("usuario-logado"));

if(usuario){
console.log(usuario.nomeCompleto);

const msgWelcome = document.querySelector("#bem-vindo");
msgWelcome.innerText = usuario.nomeCompleto;

const logoutUser = document.querySelector("#logout-user");
logoutUser.addEventListener("click",()=>{
    localStorage.removeItem("usuario-logado");
    window.location.href = "../login.html";
});
}else{
    window.location.href = "../login.html";
}