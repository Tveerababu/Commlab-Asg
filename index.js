// Function to open the popup
function openPopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'none';
}
function saveDetails() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('number').value;


    var errorFirstName = document.getElementById('errorFirstName');
    var errorLastName = document.getElementById('errorLastName');
    var errorEmail = document.getElementById('errorEmail');
    var errorPhone = document.getElementById('errorPhone');

    errorFirstName.textContent = '';
    errorLastName.textContent = '';
    errorEmail.textContent = '';
    errorPhone.textContent = '';

    if (!firstName) {
        errorFirstName.textContent = 'Please enter a First Name.';
    }

   
    if (!lastName) {
        errorLastName.textContent = 'Please enter a Last Name.';
    }

   
    if (!email) {
        errorEmail.textContent = 'Please enter an Email address.';
    }

    
    if (!phone) {
        errorPhone.textContent = 'Please enter a Phone number.';
    }
    if(!firstName || !lastName || !email || !phone){
        alert("Some Field Missed")
    }
    if ((errorFirstName.textContent || errorLastName.textContent || errorEmail.textContent || errorPhone.textContent).length > 0){
        return; // Exit the function to prevent further processing
    }
    closePopup();
}
