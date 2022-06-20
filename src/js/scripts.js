document.addEventListener('DOMContentLoaded', function () {
  const navTrigger = document.getElementById("NavTrigger");
  const siteContainer = document.getElementById("Site");
  const hamburger = document.getElementById("Hamburger");

  navTrigger.addEventListener("click", function(){
    if (this.checked) {
      siteContainer.classList.add('openMenu')
      hamburger.classList.add('open');
    } 
    else {
      siteContainer.classList.remove('openMenu')
      hamburger.classList.remove('open');
    }  
  });
});