
var typed = new Typed('#element', {
    strings: ['<i>ML Developer', 'Web Developer', 'Graphic Designer', 'Data Analyst'],
    typeSpeed: 50,
    loop: true
  });

function sendEmail(){
  Email.send({
      Host: "smtp.elasticemail.com",
      Username: "sakshiiiaher@gmail.com",
      Password: "C48C8F7E52F67B6BA57B675D1C745353E9EF",
      To: "biz.sakshiaher@gmail.com",
      From: "sakshiiiaher@gmail.com",
      Subject: document.getElementById("subject").value,
      Body: document.getElementById("message").value
  }).then(
      alert("Mail sent successfully") // Alert message on successful email delivery
  );
}
