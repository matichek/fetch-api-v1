document.getElementById("button1").addEventListener('click', getText);
document.getElementById("button2").addEventListener('click', getJson);
document.getElementById("button3").addEventListener('click', getExternal);

// get text file

function getText() {
  fetch('test.txt')
    .then(function(res) {
      return res.text();
    })
    .then(function(data) {
      console.log(data);
      document.getElementById("output").innerHTML = data;
    })
    .catch(function(err) {
      console.log(err);
    });
}

// get json

function getJson() {
  fetch('posts.json')
    .then(function(res) {
      return res.json()
    })
    .then(function(data) {

      console.log(data);

      let output = '';

      data.forEach(function(post) {

        output += `<li>${post.title}</li>`

      });
      document.getElementById('output').innerHTML = output;

    })
    .catch(function(err) {
      console.log(err);
    })
}


// Git 
function getExternal() {
  
  fetch("https://api.github.com/users")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      let output = '';

      data.forEach(function(user) {
        output += `<div style='clear: both; margin-bottom: 5px;'><img width='50' style='float: left; border-radius: 5px;' src='${user.avatar_url}'/><li>${user.login}</li></div>`;
      });

      document.getElementById("output").innerHTML = output;
    })
    .catch(function(err) {
      console.log(err);
    })
}

