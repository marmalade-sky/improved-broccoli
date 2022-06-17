document.addEventListener('DOMContentLoaded', function () {
  const navTrigger = document.getElementById("NavTrigger");
  const siteContainer = document.getElementById("Site");
  navTrigger.addEventListener("click", function(){
    if (this.checked)
      siteContainer.classList.add('openMenu');
    else
      siteContainer.classList.remove('openMenu');
  });
});