var typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Blogger", "Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

document.getElementById("git").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://github.com/KrishanMihiranga", "_blank");
  });
  document.getElementById("codePen").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://codepen.io/mkrishan", "_blank");
  });
  document.getElementById("instagram").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://instagram.com/xxp3cto", "_blank");
  });
  document.getElementById("linkedIn").addEventListener("click", function(event) {
    event.preventDefault();
    window.open("https://linkedin.com/in/krishan mihiranga", "_blank");
  });
  
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
  }
  