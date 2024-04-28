const formEl = document.querySelector('.feedback-form')
const emailEl = document.querySelector('input[type="email"]');
const messageEl = document.querySelector('textarea[name="message"]');


console.log(messageEl);

let formData = {
    email: "",
    message: "",
}
console.log(formData);

formEl.addEventListener('input', (event) => {
    event.preventDefault();

    formData.email = emailEl.value.trim()
    formData.message = messageEl.value.trim()

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
})

formEl.addEventListener('submit', event => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
    } else 
        {console.log(formData);
        localStorage.removeItem('feedback-form-state');
        formEl.reset();
        formData = { email: "", message: "", };}
    
})

const savedStoridgeData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedStoridgeData) {
    emailEl.value = savedStoridgeData.email;
    messageEl.value = savedStoridgeData.message;
    formData = savedStoridgeData;
}