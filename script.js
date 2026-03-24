// Общие скрипты для сайта

document.addEventListener('DOMContentLoaded', function() {
    // Анимация при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Наблюдаем за всеми карточками
    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Функции для FAQ страницы
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allQuestions = document.querySelectorAll('.faq-question');
    
    // Закрываем все остальные ответы
    allAnswers.forEach(a => {
        if (a !== answer) {
            a.style.display = 'none';
        }
    });
    
    allQuestions.forEach(q => {
        if (q !== element) {
            q.classList.remove('active');
        }
    });
    
    // Переключаем текущий ответ
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        element.classList.remove('active');
    } else {
        answer.style.display = 'block';
        element.classList.add('active');
    }
}

// Валидация формы контактов
function validateContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    if (name.length < 2) {
        showError('name', 'Имя должно содержать минимум 2 символа');
        isValid = false;
    } else {
        hideError('name');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('email', 'Введите корректный email');
        isValid = false;
    } else {
        hideError('email');
    }
    
    if (message.length < 10) {
        showError('message', 'Сообщение должно содержать минимум 10 символов');
        isValid = false;
    } else {
        hideError('message');
    }
    
    return isValid;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = field.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
    field.classList.add('is-invalid');
}

function hideError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = field.nextElementSibling;
    if (errorDiv && errorDiv.classList.contains('error-message')) {
        errorDiv.style.display = 'none';
    }
    field.classList.remove('is-invalid');
}
