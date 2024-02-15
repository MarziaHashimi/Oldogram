
document.addEventListener("DOMContentLoaded", function () {

    const profilePictureFooter = document.querySelector(".footer-one");
  
    profilePictureFooter.addEventListener("click", function () {
    
      const headerElement = document.getElementById("header");
  
    
      headerElement.scrollIntoView({ behavior: "smooth" });
    });
  });