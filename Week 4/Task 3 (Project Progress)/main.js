// this function adds some specific keywrods to the navigation bar class such that it can be styled in css for responsiveness
function navbarFunc() {
    var x = document.getElementById("nav-bar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  }

// ================================= //

// these are listener functions which adds specific keywords to navigation bar class such that it can be styled in css
// to achieve sticky nav bar
window.addEventListener("scroll", function(){
  var navbar = document.getElementById("nav-bar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function(){
  var navbar = document.getElementById("nav-bar");
  var estimate = window.innerHeight/6;
  navbar.classList.toggle("sticky1", window.scrollY > window.innerHeight-estimate);
})

// ================================== //
