const senderName = document.getElementsByName('name').value
const subject = document.getElementsByName('subject').value
const email = document.getElementsByName('email').value
const message = document.getElementsByName('message').value
const submitButton = document.getElementsById('submitButton')
submitButton.addEventListner('click',()=>{
     Email.send({
                Host: "smtp-relay.sendinblue.com",
                Username: "dawitfissha1@gmail.com",
                Password: "password from mail trap",
                To: 'receiver@email_address.com',
                From: "sender@email_address.com",
                Subject: "Sending Email using javascript",
                Body: "Well that was easy!!",
         })
})