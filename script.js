const apiUrl = "https://api.github.com/users/"
const xhr = new XMLHttpRequest();
var obj;
var divConteudo = document.querySelector("#conteudo");
var username = document.querySelector("#name");
var form = document.querySelector("#form");
var btnEnviar = document.querySelector("#enviar")

form.addEventListener("submit", execRequest);

function execRequest(e){
    
    e.preventDefault();
    xhr.onload = function (){
        if(xhr.readyState == 4 && xhr.status == 200) {
            obj = JSON.parse(xhr.response);
            divConteudo.innerHTML = 
            `
            <div id="infosGit">
                <span><img src="${obj.avatar_url}"> </span>
                <div id="camposBio">
                    <span>Nome completo: ${obj.name}</span>
                    <span>Nome de Usuário: ${obj.login}</span>
                    <span>Biografia: ${obj.bio}</span>
                    <span>Link do perfil: <a href="${obj.html_url}" target="_blank">${obj.html_url}</a></span>
                </div>
                <div id="refresh">
                    <input type="button" value="Voltar" id="voltar">
                </div>
            </div>
            `
        }else {
            obj = JSON.parse(xhr.response);
            divConteudo.innerHTML = 
            `
            <div id="errMsg">
                Usuário não encontrado...
                <div id="refresh">
                    <input type="button" value="Voltar" id="voltar">
                </div>
            </div>
            `
        }
        document.querySelector("#voltar").addEventListener('click', () => {
            location.reload()
        });
        
    }
    xhr.open("GET", apiUrl + username.value, true);
    xhr.send();
}









