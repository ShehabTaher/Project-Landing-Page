/**
 * I adding in these function to creating Sections
 * Sections creating dynamically
 */
// counter to specify attributes and number of section
let counter = 0;
const createSection = () => {
  counter++;
  const content = `<section id="section${counter}" data-nav="Section ${counter}">
  <div class="landing__container">
    <h2>Section ${counter}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
  </div>
</section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
};

/**
 * Make List Item equal The number of sections by Iterate on Item
 */
const navBar = document.getElementById("navbar__list");
const createNavItems = () => {
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((section) => {
    const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};


// Determines if section is in viewport to make Class Is active
function sectionIsInViewport(elem) {
  let sectionPos = elem.getBoundingClientRect()
  return (sectionPos.top >= 0)
}

// Adding and Removing Class when we are toggaling from section to another
function toggleActiveClass()  {
for (let section of sections){
  if(sectionIsInViewport(section)){
      if(!section.classList.contains('your-active-class')){
          section.classList.add('your-active-class')
      }
  }else {
      section.classList.remove('your-active-class')
  }
}
}

/**
 * Creating 5 section dynamically by javascript instead of HTML
 * create them Links
 * ability to toggle active class on these section  
 */
for(let i= 0 ; i < 5 ; i++) createSection();
createNavItems();
const sections = Array.from(document.querySelectorAll("section"));
document.addEventListener('scroll', toggleActiveClass)



/**
 * Disapper the Header after 3 seconds and Appear Agin when scrolling
 */
const header = document.querySelector(".page__header");
let isScrolling;
document.onscroll = () => {
  header.style.display = "block"
  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    header.style.display = "none"
  }, 3000)
}


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
