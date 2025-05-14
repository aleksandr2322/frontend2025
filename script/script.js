 
//document.addEventListener('DOMContentLoaded', function() {
   // const loginBtn = document.getElementById('Login');
   // const registerBtn = document.getElementById('SignUp');
   // const loginModal = document.getElementById('loginModal');
   // const registerModal = document.getElementById('registerModal');
   // const closeLoginModal = loginModal.querySelector('.close');
   // const closeRegisterModal = registerModal.querySelector('.close');
   // const slider = document.querySelector('.slider');
    //const slides = document.querySelectorAll('.slide');
    //const prevButton = document.querySelector('.prev-slide');
    //const nextButton = document.querySelector('.next-slide');
    //let currentSlide = 0;
              // const slider = document.querySelector('.slider');
              // const slides = document.querySelectorAll('.slide');
                // const prevButton = document.querySelector('.prev-slide');
              // const nextButton = document.querySelector('.next-slide');
              // let currentSlide = 0;

 //const modal =document.getElementById('loginmodal')
// const btn =document.getElementById('loginBtn' )
 //const span =document.getElementById( 'close')
// const form =document.getElementById( 'loginform')
 //const errorMsg = document.createElement('div');
   // errorMsg.className = 'error-message';
    // form.appendChild(errorMsg);
  

//const cards={
   //card_1: {
    //   name: 'Professional Profile',
    //   text: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
   //},
    //card_2:{
     //  name: ' Best Portfolio',
     //   text: ' We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
   //},
    //card_3:{
       // name: ' Powerful Resume',
       // text: ' We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by',
    //},

//}

//const template = `<div class="feature">
                  //  <hr>
                  //  <h2>${this.title}</h2>
                  //  <p>${this.body}</p>
               // </div>`;

//const cardsContainer = document.getElementById('cards'); //ссылка для карточек 


//const modalContainer = document.querySelector('#loginModal');
//const openModalBtn = document.querySelector('#Login');
//const closeModalBtn=document.querySelector('.close')
//console.log('awwfawfawfwaf');

//openModalBtn.addEventListener('click', () => {
//    modalContainer.style.display = 'block';
//})

//closeModalBtn.addEventListener('click', () => {
//   modalContainer.style.display = 'none';
//})




//window.addEventListener('load', function() {
  //  var preloader = this.document.getElementById('preloader');
  //  preloader.style.display = 'none';
//});
document.addEventListener('DOMContentLoaded', function() {
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const closeLoginModal = loginModal.querySelector('.close');
    const closeRegisterModal = registerModal.querySelector('.close');
    const modalWindow = document.querySelector('.modal');

Login.addEventListener('click', function() {
    loginModal.style.display = "block";
});
SignUp.addEventListener('click', function() {
    registerModal.style.display = "block";
});
closeLoginModal.addEventListener('click', function() {
    loginModal.style.display = "none";
});
closeRegisterModal.addEventListener('click', function() {
    registerModal.style.display = "none";
});
modalWindow.addEventListener('click', (e) => {
    if (e.target === modalWindow) {
       modalWindow.classList.add('hide');
       modalWindow.classList.remove('show');
       document.body.style.overflow = '';
    }
});
});
