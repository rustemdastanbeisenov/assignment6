document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
 form values
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;   
  let confirmPassword = document.getElementById('confirmPassword').value;   
  let reason = document.getElementById('reason').value;
  let message = document.getElementById('message').value;

  if (name && email && password && confirmPassword && message && password === confirmPassword) {
    alert('Form Submitted Successfully!');
    this.reset()
  } else {
    alert('Please fill in all fields correctly.');
  }
});