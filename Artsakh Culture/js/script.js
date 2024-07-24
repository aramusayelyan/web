// header dropdown function
document.querySelectorAll(".dropdown-btn").forEach((dropdownBtn, index) => {
  const dropdownCaret = document.querySelectorAll(".dropdown_arrow")[index];
  const dropdownContent = document.querySelectorAll(".dropdown-content")[index];
  
  dropdownBtn.addEventListener('click', () => {
    dropdownCaret.classList.toggle("dropdown_arrow-rotate");
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
      dropdownBtn.style.borderRadius = '10px';
    } else {
      dropdownContent.style.display = 'block';
      dropdownBtn.style.borderBottomRightRadius = 'unset';
      dropdownBtn.style.borderBottomLeftRadius = 'unset';
    }
  });
});

// burger js 
const burger = document.querySelector('.burger-lines');
const offscreenMenu = document.querySelector('.burger_content');
const burgerLinks = document.querySelectorAll('.burger_link');
const languageButtons = document.querySelectorAll('.burger_dropdown_link');

function toggleMenu() {
  burger.classList.toggle('active');
  offscreenMenu.classList.toggle('active');
}

function closeMenu() {
  burger.classList.remove('active');
  offscreenMenu.classList.remove('active');
}

burger.addEventListener('click', toggleMenu);

burgerLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    closeMenu();
  });
});


// Translate switch function
// // Получаем элементы
// const switchButton = document.querySelector('.language');
// const firstTextarea = document.querySelector('.left_textarea');

// // Функция для переключения
// function Switch() {
//     // Проверяем текущее значение placeholder и меняем на противоположное
//     if (firstTextarea.placeholder === switchButton.getAttribute('data-placeholder-arm')) {
//         // Переключаем на русское значение
//         switchButton.innerHTML = 'Բարբառ';
//         firstTextarea.placeholder = switchButton.getAttribute('data-placeholder-tr');
//     } else {
//         // Переключаем на английское значение
//         switchButton.innerHTML = 'Հայերեն';
//         firstTextarea.placeholder = switchButton.getAttribute('data-placeholder-arm');
//     }
// }

// Добавляем обработчик клика на кнопку для переключения
// switchButton.addEventListener('click', Switch);




// running line function
document.addEventListener('DOMContentLoaded', function() {
  const marquee = document.querySelector('.marquee');
  const content = document.querySelector('.marquee-content');

  const cloneCount = 30;
  for (let i = 0; i < cloneCount; i++) {
    const clone = content.cloneNode(true);
    marquee.appendChild(clone);
  }
});

// autoscroll gallery 
// document.addEventListener('DOMContentLoaded', function() {
//   const marquee = document.querySelector('.first_group');
//   const marquee1 = document.querySelector('.second_group');
//   const content = document.querySelector('.img_container');

//   const cloneCount = 30;
//   for (let i = 0; i < cloneCount; i++) {
//     const clone = content.cloneNode(true);
//     marquee.appendChild(clone);
//   }

//   for (let i = 0; i < cloneCount; i++) {
//     const clone = content.cloneNode(true);
//     marquee1.appendChild(clone);
//   }
// });

// card slider
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.card_content');
  const slides = document.querySelectorAll('.card');
  const prevButton = document.querySelector('.cards_left_arrow');
  const nextButton = document.querySelector('.cards_right_arrow');
  let currentIndex = 0;

  function updateSliderPosition() {
      slider.style.transform = `translateX(-${currentIndex * 370}px)`;
  }
  function updateButtonsState() {
    if (currentIndex === 0) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    if (currentIndex === slides.length - 1) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
  }
  prevButton.addEventListener('click', function() {
      if (currentIndex > 0) {
          currentIndex--;
          updateSliderPosition();
          updateButtonsState();
      }
  });
  nextButton.addEventListener('click', function() {
      if (currentIndex < slides.length - 1) {
          currentIndex++;
          updateSliderPosition();
          updateButtonsState();
      }
  });
let startX = 0;
let currentX = 0;
let isDragging = false;

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

slider.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  currentX = e.touches[0].clientX;
  const offset = currentX - startX;
  slider.style.transform = `translateX(${-currentIndex * 370 + offset / slider.offsetWidth * 370}px)`;
});

slider.addEventListener('touchend', () => {
  isDragging = false;
  const offset = currentX - startX;
  if (offset > 50 && currentIndex > 0) {
    currentIndex--;
  } else if (offset < -50 && currentIndex < slider.children.length - 1) {
    currentIndex++;
  }
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 370;
  slider.style.transform = `translateX(${offset}px)`;
}
});
// pop up

document.querySelectorAll('.card_btn').forEach(btn => {
  btn.onclick = function() {
    document.querySelector('.popup_wrapper').style.display = 'block';
  };
});

document.querySelector('.popup_close').onclick = function() {
  document.querySelector('.popup_wrapper').style.display = 'none';
};

document.querySelector('.popup_wrapper').onclick = function(event) {
  if (event.target === document.querySelector('.popup_wrapper')) {
      document.querySelector('.popup_wrapper').style.display = 'none';
  }
};

// Page animation 
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) =>{
    console.log(entry);
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show'); 
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements1 = document.querySelectorAll('.hiddentab');
const hiddenElements2 = document.querySelectorAll('.scrollLeft');
const hiddenElements3 = document.querySelectorAll('.scrollheading');
const hiddenElements4 = document.querySelectorAll('.scrollRight');
const hiddenElements5 = document.querySelectorAll('.scrollBottom');
const hiddenElements6 = document.querySelectorAll('.opacity');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
hiddenElements3.forEach((el) => observer.observe(el));
hiddenElements4.forEach((el) => observer.observe(el));
hiddenElements5.forEach((el) => observer.observe(el));
hiddenElements6.forEach((el) => observer.observe(el));
document.addEventListener('DOMContentLoaded', () => {
  const hiddenElements = document.querySelectorAll('.card_hidden');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show');
        }, index * 300);
      }
    });
  });

  hiddenElements.forEach(el => observer.observe(el));
});
