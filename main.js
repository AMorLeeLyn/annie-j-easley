function toggleDarkMode() {
    let bodyElement = document.getElementById("mainBackground");
    let darkModeBtnElement = document.getElementById("dark-Mode-Button");

    if (bodyElement.style.background === "black" ) {

        bodyElement.style.background = "#0B3D91";
        darkModeBtnElement.innerHTML = "Change to Dark Mode";
        
   
    } else {
        
        bodyElement.style.background = "black";
        darkModeBtnElement.innerHTML="Change to Light Mode";
    
    } 

}