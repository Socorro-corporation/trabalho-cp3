let listaUsuario = [
    {
      nomeCompleto: "Jeferson Braga",
      emailUsuario: "jf@email.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Maria Banks",
      emailUsuario: "mb@email.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Juscelino freire",
      emailUsuario: "ju@email.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Victor Estrella",
      emailUsuario: "vi@email.com",
      senhaUsuario: "123456",
    },
    {
      nomeCompleto: "Enrico Del Guerra",
      emailUsuario: "ui@email.com",
      senhaUsuario: "123456",
    },
  ];
  
  function validar(inputEmail, inputSenha) {
  
    //Recuperar elemento de msgStatus
    let msgStatus = document.querySelector(".valida");
    
    for (let x = 0; x < listaUsuario.length; x++) {
        
        if ((inputEmail.value == listaUsuario[x].emailUsuario) && (inputSenha.value == listaUsuario[x].senhaUsuario)) {
          //Redirect
            msgStatus.setAttribute("class","sucesso");
            msgStatus.innerText = "Login realizado com sucesso!";
    
            //Guardando o objeto validado no localStorage:
            localStorage.setItem("usuario-logado", JSON.stringify(listaUsuario[x]));
            
            setTimeout(function(){
                msgStatus.setAttribute("class","valida");
                msgStatus.innerText = "";
                window.location.href = "../index.html";
            }, 3000);
            return false;
        }
          
    }
      msgStatus.setAttribute("class","erro");
      msgStatus.innerText = "Você inseriu a senha ou o email errado";
      setTimeout(function(){
        msgStatus.innerText = "";
        msgStatus.removeAttribute("class","erro")
        },3000)
          return false;
    }