document.addEventListener("DOMContentLoaded", function() {
    // Hide the loader after 2 seconds once the content is fully loaded
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");
  
    window.addEventListener("load", function() {
      setTimeout(function() {
        loader.style.display = "none";
        mainContent.style.display = "block";
      }, 2000); // 2000 milliseconds = 2 seconds
    });
  });
  
  function redirectToLinkedWorks() {
    window.location.href = "https://linked-works.vercel.app/sign-in";
  }
  