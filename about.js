const form=document.getElementById('contactForm');
const statusMessage=document.getElementById('formStatus');
const emailField=form.elements.email;
emailField.addEventListener('input',()=>emailField.setCustomValidity(''));
form.addEventListener('submit',event=>{
  statusMessage.textContent='';
  statusMessage.classList.remove('error');
  emailField.setCustomValidity('');
  if(!emailField.value.trim().toLowerCase().endsWith('@gmail.com')){
    emailField.setCustomValidity('Please enter a Gmail address ending in @gmail.com.');
  }
  if(!form.reportValidity()){
    event.preventDefault();
    statusMessage.textContent='Please check the required fields and enter a valid Gmail address.';
    statusMessage.classList.add('error');
    return;
  }
  statusMessage.textContent='Sending your message securely…';
});
