function sendMail(){
    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        age:document.getElementById("age").value
    };

const serviceID = "service_5k0kypk";
const  templateID = "template_7ct02um";

emailjs.send(serviceID,templateID,params).then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
    console.log(res);
    alert("Your massage sent successfully");


})
.catch(err=>console.log(err));
}