// Опишем структуры данных
interface Card {
  card_name: string;
  card_text: string;
  image: string;
}

interface Post {
  body: string;
}

// Чтобы повесить функцию на window
declare global {
  interface Window {
    updateImage: (src: string) => void;
  }
}
window.addEventListener('DOMContentLoaded', () => {
  // Модальные окна
  const loginModal = document.getElementById('loginModal') as HTMLElement | null;
  const registerModal = document.getElementById('registerModal') as HTMLElement | null;

  const btnLogin = document.getElementById('Login');
  const btnRegister = document.getElementById('SignUp');

  const loginForm = document.getElementById('loginForm') as HTMLFormElement | null;
  const closeLogin = loginModal?.querySelector<HTMLElement>('.close') ?? null;

  const registerForm = document.getElementById('registerForm') as HTMLFormElement | null;
  const closeRegister = registerModal?.querySelector<HTMLElement>('.close') ?? null;

  if (btnLogin) {
    btnLogin.addEventListener('click', (e) => {
      e.preventDefault();
      if (loginModal) loginModal.style.display = 'block';
    });
  }

  if (btnRegister) {
    btnRegister.addEventListener('click', (e) => {
      e.preventDefault();
      if (registerModal) registerModal.style.display = 'block';
    });
  }

  closeLogin?.addEventListener('click', () => {
    if (loginModal) loginModal.style.display = 'none';
  });

  closeRegister?.addEventListener('click', () => {
    if (registerModal) registerModal.style.display = 'none';
  });

  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Вход выполнен успешно!');
    if (loginModal) loginModal.style.display = 'none';
  });

  registerForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Регистрация успешно выполнена!');
    if (registerModal) registerModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal!.style.display = 'none';
    if (e.target === registerModal) registerModal!.style.display = 'none';
  });