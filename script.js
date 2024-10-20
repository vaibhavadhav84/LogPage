let signUpBtn = document.querySelector('.signupbtn');
let signInBtn = document.querySelector('.signinbtn');
let nameField = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');
let text = document.querySelector('.text');

signInBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    text.innerHTML = 'Lost Password';
    signUpBtn.classList.add('disable');
    signInBtn.classList.remove('disable');
    underline.style.transform = 'translateX(35px)';
})
signUpBtn.addEventListener('click',()=>{
    nameField.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up/Register';
    text.innerHTML = 'Password Suggestions';
    signUpBtn.classList.remove('disable');
    signInBtn.classList.add('disable');
    underline.style.transform = 'translateX(0)';
})
signInBtn.addEventListener('click',()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
      // Predefined login details
      const validEmail = "user@example.com";
      const validPassword = "password123";
      
      // Email and password validation
      if (email !== validEmail) {
          message.textContent = "Invalid email, you are not registered!";
          message.style.color = "red";
      } else if (password !== validPassword) {
          message.textContent = "Invalid password!";
          message.style.color = "red";
      } else {
          message.textContent = "Login successfully!";
          message.style.color = "green";
      }
})
signUpBtn.addEventListener('click',()=>{
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
      // Predefined login details
      const validEmail = "user@example.com";
      const validPassword = "password123";
      
      // Email and password validation
      if (email !== validEmail) {
          message.textContent = "Invalid email, you are not registered!";
          message.style.color = "red";
      } else if (password !== validPassword) {
          message.textContent = "Invalid password!";
          message.style.color = "red";
      } else {
          message.textContent = "Login successfully!";
          message.style.color = "green";
      }
})
