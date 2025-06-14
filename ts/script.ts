var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

interface CardContent {
    name: string;
    text: string;
}

declare global {
    interface Window {
        updateImage: (src: string) => void;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Modal handling
    const loginModal = document.getElementById('loginModal') as HTMLElement | null;
    const registerModal = document.getElementById('registerModal') as HTMLElement | null;
    const closeLoginModal = loginModal?.querySelector('.close') as HTMLElement | null;
    const closeRegisterModal = registerModal?.querySelector('.close') as HTMLElement | null;
    const modalWindows = document.querySelectorAll('.modal');
    const loginButton = document.getElementById('Login') as HTMLElement | null;
    const signUpButton = document.getElementById('SignUp') as HTMLElement | null;

    if (loginButton && loginModal) {
        loginButton.addEventListener('click', function () {
            loginModal.style.display = "block";
        });
    }

    if (signUpButton && registerModal) {
        signUpButton.addEventListener('click', function () {
            registerModal.style.display = "block";
        });
    }

    if (closeLoginModal && loginModal) {
        closeLoginModal.addEventListener('click', function () {
            loginModal.style.display = "none";
        });
    }

    if (closeRegisterModal && registerModal) {
        closeRegisterModal.addEventListener('click', function () {
            registerModal.style.display = "none";
        });
    }

    modalWindows.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
            }
        });
    });

    // Image slider
    const slides = document.querySelectorAll(".hero-image");
    let currentSlide = 0;
    const totalSlides = slides.length;

    function showSlide(index: number) {
        slides.forEach((slide, i) => {
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

    // Cards content loading
    const cardsContainer = document.getElementById('cards');
    if (cardsContainer) {
        loadCardsContent(cardsContainer);
    }
});

function updateImage(src: string) {
    const imageElement = document.getElementById("infImage") as HTMLImageElement | null;
    if (imageElement) {
        imageElement.src = src;
    } else {
        console.error('Element with id "infImage" not found.');
    }
}

window.updateImage = updateImage;

function loadCardsContent(container: HTMLElement) {
    return __awaiter(this, void 0, void 0, function* () {
        // Show loading state
        container.innerHTML = '<p class="loading">Loading content...</p>';

        // English content repository
        const englishContent: CardContent[] = [
            {
                name: 'Professional Profile',
                text: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiters"
            },
            {
                name: 'Best Portfolio',
                text: "Stand out from the crowd with a professionally designed portfolio that showcases your skills and achievements in the best possible light"
            },
            {
                name: 'Powerful Resume',
                text: "Create a resume that gets noticed. Our tools help you highlight your strengths and match with the right job opportunities"
            }
        ];

        try {
            const response = yield fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
            if (!response.ok) throw new Error('Network response was not ok');

            // Clear container
            container.innerHTML = '';

            // Create cards - using English content regardless of API response
            englishContent.forEach(card => {
                container.innerHTML += `
                    <div class="feature">
                        <hr>
                        <h2>${card.name}</h2>   
                        <p>${card.text}</p>
                    </div>
                `;
            });
        } catch (error) {
            console.error('Error loading content:', error);
            container.innerHTML = '<p class="error">Could not load content. Showing default information.</p>';
            
            // Fallback to English content
            englishContent.forEach(card => {
                container.innerHTML += `
                    <div class="feature">
                        <hr>
                        <h2>${card.name}</h2>   
                        <p>${card.text}</p>
                    </div>
                `;
            });
        }
    });
}