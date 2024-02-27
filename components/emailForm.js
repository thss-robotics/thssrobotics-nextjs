const form = document.getElementById('emailForm');
const postmarkServerToken = '0402be3b-7a22-4347-ad64-612b451aba22'; // Replace with your Postmark server token

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const url = 'https://api.postmarkapp.com/email';

  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('X-Postmark-Server-Token', postmarkServerToken);

  const data = {
    "From": "noreply@netfly.com",
    "To": "thssrobotics@gmail.com",
    "Subject": "Email from Netfly Website",
    "TextBody": `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    "Tag": "Netfly Website",
  };

  xhr.send(JSON.stringify(data));

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});
