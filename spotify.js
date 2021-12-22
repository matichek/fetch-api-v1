
function checkIfHeart() {

  let Hearts = document.querySelector


  console.log("Timestamp: " + Date.now());
  let allHearts = document.querySelectorAll('div[role="presentation"]')

  allHearts.forEach(function(heart) {

    setInterval(function() {
      if(heart.getAttribute('aria-checked') === true) {
        heart.parentElement.style.backgroundColor = "green";
  
      } else if(heart.getAttribute('aria-checked') === false) {
        heart.parentElement.style.backgroundColor = "red";
        heart.click();
      }
    }, 500)



  })

}


setInterval(checkIfHeart, 10000); 