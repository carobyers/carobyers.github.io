
function button1Clicked(){
  document.getElementById("button-1").classList.toggle("was-clicked");
}


function windowLoaded() {
  console.log('loaded');
  document.getElementById("button-1").addEventListener("click", button1Clicked);
  document.getElementById("Hello").addEventListener("mouseover", HelloClicked);
}

window.onload = windowLoaded;

function HelloClicked(event){
  event.target.innerHTML="What's up?";
}
