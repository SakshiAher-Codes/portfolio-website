const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

var typed = new Typed('#element', {
    strings: ['<i>ML Developer', 'Web Developer', 'Graphic Designer', 'Data Analyst'],
    typeSpeed: 50,
    loop: true
  });

function sendEmail(){
  const bodyMessage = "Name: " + fullName.value + "<br> Email: " + email.value + "<br> Message: " + mess.value;
  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "sakshiiiaher@gmail.com",
      Password: "C48C8F7E52F67B6BA57B675D1C745353E9EF",
      To: "biz.sakshiaher@gmail.com",
      From: "sakshiiiaher@gmail.com",
      Subject: subject.value,
      Body: bodyMessage
  }).then(
      alert("Mail sent successfully") // Alert message on successful email delivery
  );
}
