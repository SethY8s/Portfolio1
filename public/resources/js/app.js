// console.log('hello');

const contactForm = document.querySelector('.contact-form')

let name = document.getElementById('name1');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log('sumbit clicked')


    let formData = {
        name: name1.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
 
let xhr = new XMLHttpRequest();
xhr.open('POST', '/');
xhr.setRequestHeader('content-type', 'application/json');
xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText === 'success'){
        alert('Email sent');
        name1.value = '';
        email.value = '';
        subject.value = '';
        message.value = '';
    }else{
        alert('Something went wrong')
    }
}

xhr.send(JSON.stringify(formData))

})