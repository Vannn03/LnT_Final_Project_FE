$(document).ready(function () {
    $("#nav-logo").click(function (e) { 
        e.preventDefault();
        window.location.href = "landing.html";
    });
    $("#te-table").hide();
    $("#te").click(function (e) { 
        e.preventDefault();
        $("#vc-table").hide();
        $("#te-table").show();
    });
    $("#vc").click(function (e) { 
        e.preventDefault();
        $("#te-table").hide();
        $("#vc-table").show();
    });
    $("#contact-us").click(function (e) { 
        e.preventDefault();
        window.location.href = "contact.html";
    });
});

const email = document.querySelector("#email");

function checkEmail() {
  var value = document.getElementById("email").value;  
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!value.match(validRegex)) {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        $("#email").css("borderColor", "tomato");
        
    } else {
        email.classList.add("is-valid");
        email.classList.remove("is-invalid");
        $("#email").css("borderColor", "lightGreen");
    }
}

const name = document.querySelector("#name");

function checkName() {
  var value = document.getElementById("name").value;    
    if (value.length < 3) {
        name.classList.remove("is-valid");
        name.classList.add("is-invalid");
    } else {
        name.classList.add("is-valid");
        name.classList.remove("is-invalid");
    }
}

const phone = document.querySelector("#phone");

function checkPhone() {
  var value = document.getElementById("phone").value;    
    if (!value.startsWith("08") || value.length < 10 || value.length > 14) {
        phone.classList.remove("is-valid");
        phone.classList.add("is-invalid");
    } else {
        phone.classList.add("is-valid");
        phone.classList.remove("is-invalid");
    }
}

const firebaseConfig = {
    apiKey: "AIzaSyAqTRbU4D8UiiXbGcw6_azINKRIH46CFWI",
    authDomain: "session-13-fe.firebaseapp.com",
    projectId: "session-13-fe",
    storageBucket: "session-13-fe.appspot.com",
    messagingSenderId: "174671851409",
    appId: "1:174671851409:web:2bef96c984cf4fd5e03430"
};
    
// Inisialisasi firebase
firebase.initializeApp(firebaseConfig);
// Menggunakan firestore
const db = firebase.firestore()
// Referensi dokumen yang ada di firestore
const formCollection = db.collection("Registration_Data")
const form = document.getElementById("form")
 
form.addEventListener('submit', e => {
    e.preventDefault()
    var email = document.getElementById("email")
    let invalidEmail = email.classList.contains("is-invalid");
    var name = document.getElementById("name")
    let invalidName = name.classList.contains("is-invalid");
    var phone = document.getElementById("phone")
    let invalidPhone = phone.classList.contains("is-invalid");
    if (invalidEmail || invalidName || invalidPhone) {
       console.log("Error")
    }
    else {
        const formData = new FormData(form)
        const emailAddress = formData.get("email")
        const fullName = formData.get("name")
        const phoneNum = formData.get("phone")
        const eventParticipation = formData.get("event")
       
        formCollection.add({
            emailAddress,
            fullName,
            phoneNum,
            eventParticipation
        })
   
        function postData() {
            fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                   "Content-Type": "application/json"
                },
                body: JSON.stringify(formCollection)
            })
            .then(response => response.json())
       
        postData()
        }    
        form.reset()
        const email = document.querySelector("#email");
        email.classList.remove("is-valid")
        const name = document.querySelector("#name");
        name.classList.remove("is-valid")
        const phone = document.querySelector("#phone");
        phone.classList.remove("is-valid")
        
    }
})
      

