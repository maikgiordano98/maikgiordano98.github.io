function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "maikgiordano.mg@gmail.com",
	Password : "",
	To : 'maikgiordano.mg@gmail.com',
	From : "<sender’s email address>",
	Subject : "<email subject>",
	Body : "<email body>",
	}).then(
		message => alert("mail sent successfully")
	);
}