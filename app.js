let form = document.querySelector(".form-group");

let password = document.querySelector("#password")


form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(password.value.includes("@")){
        console.log("it contains special character")
    }
    console.log('user submit file')
});