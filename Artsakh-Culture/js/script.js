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

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  offscreenMenu.classList.toggle('active');
})

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
const scrollers = document.querySelectorAll('.first_group');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  addAnimation();
}

function addAnimation(){
  scrollers.forEach((first_group) => {
    first_group.setAttribute("data-animated", true);

  });
}
// top_slider 1 
// document.addEventListener('DOMContentLoaded', function() {
//   const Slider = document.querySelector('.first_group');
//   const Slider_Content = document.querySelector('.img_container');

//   const cloneCount = 10;
//   for (let i = 0; i < cloneCount; i++) {
//     const clone = Slider_Content.cloneNode(true);
//     Slider.appendChild(clone);
//   }
//   let currentPosition = 0;
//   const SliderWidth = Slider.scrollWidth;

//   function animateSlider() {
//     currentPosition -= 5;
//     if (Math.abs(currentPosition) >= SliderWidth / (cloneCount + 1)) {
//         currentPosition = 0;
//     }
//     Slider.style.transform = `translateX(${currentPosition}px)`;
//       requestAnimationFrame(animateSlider);
//     }

//   animateSlider();
// });
// top_slider 2
// document.addEventListener('DOMContentLoaded', function() {
//   const Slider_second = document.querySelector('.second_group');
//   const Slider_second_Content = document.querySelector('.img_container');

//   const cloneCount = 10;
//   for (let i = 0; i < cloneCount; i++) {
//     const clone = Slider_second_Content.cloneNode(true);
//     Slider_second.appendChild(clone);
//   }
//   let currentPosition = 0;
//   const SliderWidth2 = Slider_second.scrollWidth;

//   function animateSlider() {
//     currentPosition -= 5;
//     if (Math.abs(currentPosition) >= SliderWidth2 / (cloneCount + 1)) {
//         currentPosition = 0;
//     }
//     Slider_second.style.transform = `translateX(${currentPosition}px)`;
//       requestAnimationFrame(animateSlider);
//     }

//   animateSlider();
// });

// cards_slider