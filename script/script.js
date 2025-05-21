 
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

//  const modal =document.getElementById('loginmodal')
// const btn =document.getElementById('loginBtn' )
//  const span =document.getElementById( 'close')
// const form =document.getElementById( 'loginform')
//  const errorMsg = document.createElement('div');
//    errorMsg.className = 'error-message';
//     form.appendChild(errorMsg);
  



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












//карточки 

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
 var slides = document.querySelectorAll(".hero-image");
  var currentSlide = 0;
  var totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach(function (slide, i) {
      slide.classList.toggle("active", i === index);
    });
  }

  if (totalSlides > 0) {
    showSlide(currentSlide);
    setInterval(function () {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }, 3000);
  }

  function updateImage(src) {
    var imageElement = document.getElementById("infImage");
    if (imageElement) {
      imageElement.src = src;
    } else {
      console.error('Элемент с id "infImage" не найден.');
    }
  }
  window.updateImage = updateImage;


const cards={
   card_1: {
       name: 'Professional Profile',
       text: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
   },
    card_2:{
       name: ' Best Portfolio',
       text: ' We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
   },
    card_3:{
        name: ' Powerful Resume',
        text: ' We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by',
    },

}


const template = `<div class="feature">
                 
                   <hr>
                   <h2>${cards.name}</h2>   
                 <p>${cards.text}</p>
                </div>`;

const cardsContainer = document.getElementById('cards'); //ссылка для карточек 









// function generateCards(cards) {
//     var featureContainer = document.getElementById("features-container");
//     if (!featureContainer) {
//       console.error('Элемент с id "features-container" не найден');
//       return;
//     }

//     cards.forEach(function (card) {
//       var cardHTML = `
//         <div class="feature" onclick="updateImage('${card.image || "img/default.jpg"}')">
//           <hr class="thick-line">
//           <h3>${card.card_name}</h3>
//           <p>${card.card_text}</p>
//         </div>`;
//       featureContainer.insertAdjacentHTML("beforeend", cardHTML);
//     });
//   }

//   fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (json) {
//       var cards = json.map(function (post, index) {
//         return {
//           card_name: "Post " + (index + 1),
//           card_text: post.body,
//           image: "img/Frame 1625.jpg" 
//         };
//       });
//       generateCards(cards);
//     })
//     .catch(function (error) {
//       console.error("Ошибка при загрузке карточек:", error);
//     });
// });


