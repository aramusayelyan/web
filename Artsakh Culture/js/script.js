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
const burgerLink = document.querySelectorAll('.burger_link');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  offscreenMenu.classList.toggle('active');
});


// Translate switch function
function Switch() {
  const items = document.getElementsByClassName("language");
  const tmp = items[0].innerHTML;
  items[0].innerHTML = items[1].innerHTML;
  items[1].innerHTML = tmp;

}

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
document.addEventListener('DOMContentLoaded', function() {
  const marquee = document.querySelector('.first_group');
  const marquee1 = document.querySelector('.second_group');
  const content = document.querySelector('.img_container');

  const cloneCount = 30;
  for (let i = 0; i < cloneCount; i++) {
    const clone = content.cloneNode(true);
    marquee.appendChild(clone);
  }

  for (let i = 0; i < cloneCount; i++) {
    const clone = content.cloneNode(true);
    marquee1.appendChild(clone);
  }
});

// card slider
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.card_content');
  const slides = document.querySelectorAll('.card');
  const prevButton = document.querySelector('.cards_right_arrow');
  const nextButton = document.querySelector('.cards_left_arrow');
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
