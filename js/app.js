/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const pageSections = document.querySelectorAll("section");
const parentUL = document.getElementById("navbar__list");
let posArray = [];
let half_window_height = window.innerHeight / 3;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
pageSections.forEach((element, index) => {
  let sectionsInfo = element.getAttribute('data-nav');
  let newList = document.createElement("li");
  newList.innerHTML = `<a href="#section${index+1}" id="s${index+1}">${sectionsInfo}</a>`;
  parentUL.appendChild(newList)
});


// Add class 'active' to section when near top of viewport


document.addEventListener("scroll", () => {
    let posArray = [];
    pageSections.forEach(element => {
        posArray.push(element.getBoundingClientRect().top)
    })
    //console.log(posArray)
    let pos = posArray.find(el => el > 0);
    let posIndex = posArray.findIndex(el => el > 0);
    //console.log(pos, "  ", posIndex + 1)
    for (let j = 0; j < pageSections.length; j++) {
        if (posIndex === j && pos < half_window_height) {
            document.getElementById(`s${j+1}`).classList.add("highlighted");
        } else {
            document.getElementById(`s${j+1}`).classList.remove("highlighted");
        }
    }


})
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


