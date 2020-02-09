//alert('You are welcome')


let form = document.querySelector('#form');
let username = document.querySelector('#username');
let subject = document.querySelector('#subject');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let textarea = document.querySelector('#textarea');



// Show input failed message
let showFailed = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control failed';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }
  
  
  // Show input passed message
  let showPassed = (input) => {
     const formControl = input.parentElement;
     formControl.className = 'form-control passed';
  
  }
  

// Check email is valid
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); 
}


    // Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value === '') {
        showFailed(username, 'Username is required');   
    } else {
        showPassed(username);
    }

    if (email.value === '') {
        showFailed(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showFailed(email, 'Email is not valid');
    } else {
        showPassed(email);
    }
   
});
 