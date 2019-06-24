var wrapper = document.getElementById("reveal");

wrapper.classList.toggle("active")


window.setInterval(function () {
  wrapper.classList.toggle("active")  
}, 2000);

