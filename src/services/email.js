import emailjs from 'emailjs-com';

const service_id = "smtp_server";//Gmail
const template_id = "template_XWtRtIZn";//Formato de la api
const template_id_scio = "email_template_notification";//Email de notificaciones de Rod
const user_id = 'user_rwpKTbKkkCAKLMLlzZhJd';//Llave de mi correo personal {Se cambiara por otro despues}
const email_scio="macarbajal@sciodev.com"

export default function sendEmail(e) {//Funcion para mandar email
  e.preventDefault();

  const template_params = {
    "from_name": "Scio | End-to-end Software Engineering ",
    "name":e.target.user_name.value,
    "email":e.target.user_email.value, //Correo al que se mandara la info
    "message_html": "$"+e.target.total.value //La info de interes sobre el costo
   }

   emailjs.send(service_id, template_id, template_params, user_id )
   .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

  var template_params2 = {
    "from_name": "Scio VMA Notification",
    "name":e.target.user_name.value,
    "email":e.target.user_email.value, 
    "email_scio": email_scio,
    "message_html": "$ "+e.target.total.value 
   }

  emailjs.send(service_id, template_id_scio, template_params2, user_id )
   .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}
/*
function sendEmailScio(e){
  e.preventDefault();

  var template_params = {
    "from_name": "Scio VMA Notification",
    "name":e.target.user_name.value,
    "email":e.target.user_email.value, 
    "email_scio": email_scio,
    "message_html": "$ "+e.target.total.value 
   }

   emailjs.send(service_id, template_id_scio, template_params, user_id )
   .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}*/