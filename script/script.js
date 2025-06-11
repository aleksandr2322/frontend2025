 
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
    // const cards = document.getElementById('cards');
    // const closecards=cards.querySelector('close');
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
// Login.addEventListener('click', function() {
//     text.style.display = "block";
// } 
// closeRegisterModal.addEventListener('click', function() {
//     text.style.display = "none";
// });
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






// const cards={
//    card_1: {
//        name: 'Professional Profile',
//        text: 'We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
//    },
//     card_2:{
//        name: ' Best Portfolio',
//        text: ' We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
//    },
//     card_3:{
//         name: ' Powerful Resume',
//         text: ' We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by',
//     },

// }


// const template = `<div class="feature">
                 
//                    <hr>
//                    <h2>${cards.name}</h2>   
//                  <p>${cards.text}</p>
//                 </div>`;

// const cardsContainer = document.getElementById('cards'); //ссылка для карточек 





// // Преобразуем объект в массив значений и создаем HTML для каждой карточки
// const cardsHTML = Object.values(cards).map(card => `
//   <div class="feature">
//     <hr>
//     <h2>${card.name}</h2>   
//     <p>${card.text}</p>
//   </div>
// `).join('');

// // Вставляем все карточки в контейнер
// cardsContainer.innerHTML = cardsHTML;
















// const cards = {
//   card_1: {
//     name: 'Professional Profile',
//     text: 'We know finding the right job is stressful, so we\'ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
//   },
//   card_2: {
//     name: 'Best Portfolio',
//     text: 'We know finding the right job is stressful, so we\'ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter',
//   },
//   card_3: {
//     name: 'Powerful Resume',
//     text: 'We know finding the right job is stressful, so we\'ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by',
//   },
// };

// const cardsContainer = document.getElementById('cards'); // ссылка для карточек

// // Проходим по всем ключам объекта cards
// for (const cardKey in cards) {
//   if (cards.hasOwnProperty(cardKey)) {
//     const card = cards[cardKey];
    
//     // Создаем HTML для каждой карточки
//     const cardHTML = `
//       <div class="feature">
//         <hr>
//         <h2>${card.name}</h2>   
//         <p>${card.text}</p>
//       </div>
//     `;
    
//     // Добавляем карточку в контейнер
//     cardsContainer.innerHTML += cardHTML;
//   }
// }










// const cardsContainer = document.getElementById('cards');
// // Добавляем индикатор загрузки
// cardsContainer.innerHTML = '<p>Загрузка карточек...</p>';

// // Получаем данные с сервера
// fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Ошибка сети');
//     }
//     return response.json();
//   })
//   .then(posts => {
//     // Очищаем контейнер
//     cardsContainer.innerHTML = '';
    
//     // Преобразуем данные сервера в нужный формат
//     const serverCards = {
//       card_1: {
//         name: posts[0].title,
//         text: posts[0].body
//       },
//       card_2: {
//         name: posts[1].title,
//         text: posts[1].body
//       },
//       card_3: {
//         name: posts[2].title,
//         text: posts[2].body
//       }
//     };
    
//     // Используем ваш оригинальный код для отрисовки
//     for (const cardKey in serverCards) {
//       if (serverCards.hasOwnProperty(cardKey)) {
//         const card = serverCards[cardKey];
        
//         const cardHTML = `
//           <div class="feature">
//             <hr>
//             <h2>${card.name}</h2>   
//             <p>${card.text}</p>
//           </div>
//         `;
        
//         cardsContainer.innerHTML += cardHTML;
//       }
//     }
//   })
//   .catch(error => {
//     console.error('Ошибка:', error);
//     cardsContainer.innerHTML = `
//       <div class="error">
//         <p>Не удалось загрузить карточки. Пожалуйста, попробуйте позже.</p>
//         <button onclick="window.location.reload()">Обновить</button>
//       </div>
//     `;
//   });









const cardsContainer = document.getElementById('cards');

// Show loading state
cardsContainer.innerHTML = '<p>Loading content...</p>';

// English content repository
const englishContent = [
  "We know finding the right job is stressful, so we\'ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter",
  "We know finding the right job is stressful, so we\'ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter",
  "We know finding the right job is stressful, so we’ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by"
];

// Fetch data from server but use our English content
fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(posts => {
    // Clear container
    cardsContainer.innerHTML = '';
    
    // Create cards with English content
    const serverCards = {
      card_1: {
        name: 'Professional Profile',
        text: englishContent[0]
      },
      card_2: {
        name: 'Best Portfolio',
        text: englishContent[1]
      },
      card_3: {
        name: 'Powerful Resume',
        text: englishContent[2]
      }
    };
    
    // Render cards using your original template
    for (const cardKey in serverCards) {
      if (serverCards.hasOwnProperty(cardKey)) {
        const card = serverCards[cardKey];
        
        cardsContainer.innerHTML += `
          <div class="feature">
            <hr>
            <h2>${card.name}</h2>   
            <p>${card.text}</p>
          </div>
        `;
      }
    }
  })
  .catch(error => {
    console.error('Error:', error);
    // Fallback to original static English data
    cardsContainer.innerHTML = '';
    const fallbackCards = {
      card_1: {
        name: 'Professional Profile',
        text: 'We know finding the right job is stressful, so we\'ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter'
      },
      card_2: {
        name: 'Best Portfolio',
        text: 'We know finding the right job is stressful, so we\'ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter'
      },
      card_3: {
        name: 'Powerful Resume',
        text: 'We know finding the right job is stressful, so we\'ve made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by'
      }
    };
    
    for (const cardKey in fallbackCards) {
      const card = fallbackCards[cardKey];
      cardsContainer.innerHTML += `
        <div class="feature">
          <hr>
          <h2>${card.name}</h2>   
          <p>${card.text}</p>
        </div>
      `;
    }
  });
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

