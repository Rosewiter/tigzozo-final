var icon = document.getElementById("night-mode");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./Tig-images/brightness.png";
    }
    else{

        icon="./Tig-images/Vector.png";
    }
    }

/* When the user clicks on the button,  */
/* toggle between hiding and showing the dropdown content */ 

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

 const toggleButton = document.getElementsByClassName('toggle-button')[0]
 const navbarLinks = document.getElementsByClassName('navbar-links')[0]
  
 toggleButton.addEventListener('click',() => {
 navbarLinks.classList.toggle('active')
 })