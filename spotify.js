// This is a test script for clicking "like this track" for a track in the playlist - needs fixing

// run this in chrome console

function checkIfHeart() {


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