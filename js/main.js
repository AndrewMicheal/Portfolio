let imageBorder = document.querySelectorAll(".skill-border");
let colors = ["#E01705" , "#009688" , "#673AB7" , "#FF9800"];
let elements = document.querySelectorAll(".mainColor");
let servicesItem = document.querySelectorAll(".services .item");
let btnsProjects = document.querySelectorAll(".btnBgColor");
let fromEmail = document.getElementById("Email");
let fromName = document.getElementById("Name");
let subject = document.getElementById("Subject");
let message = document.getElementById("Message");
let btnSubmit = document.getElementById("btnMessage");
let showMessage = document.getElementById("showMessage");

function changeColor(arrLength , type = "" , index , el) {
    for(let i = 0; i < arrLength; i++) {
        if(type == "border") {
            el[i].style.border = `4px dashed ${colors[index]}`;
        } else if(type == "el") {
            el[i].style.color = `${colors[index]}`
        } else if(type == "box-shadow") {
            el[i].style.boxShadow  = `0px 0px 5px ${colors[index]}`;
        } else {
            el[i].style.backgroundColor = `${colors[index]}`
        }
    }
}

let time = setInterval(()=> {
    let index = Math.floor(Math.random()*4);
    changeColor(imageBorder.length,"border",index , imageBorder);
    changeColor(elements.length,"el",index , elements);
    changeColor(servicesItem.length,"box-shadow",index , servicesItem);
    changeColor(btnsProjects.length,"btns",index , btnsProjects);
},4000)

btnSubmit.onclick = function() {
    if(fromName.value == "" || fromEmail.value == "" || subject.value == "" || message.value == "") {
        showMessage.classList.remove("d-none");
        showMessage.textContent = "Fill all inputs";
    } else {
        showMessage.classList.add("d-none");
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if(emailRegex.test(fromEmail.value.trim())) {
            send();
            clearForm();
            alert("success");
        } else {
            showMessage.classList.remove("d-none");
            showMessage.textContent = "enter valid email";
        }
        
    }
}

function send() {
    emailjs.send("service_tcmy6ea","template_detldtp",{
        from_name: fromName.value.trim(),
        message: message.value.trim(),
        from_email: fromEmail.value.trim(),
        subject: subject.value.trim(),
    });
}

function clearForm() {
    let formInputs = document.querySelectorAll(".contact-me .input");
    for(let i = 0; i < formInputs.length; i++) {
        formInputs[i].value = "";
    }
}

