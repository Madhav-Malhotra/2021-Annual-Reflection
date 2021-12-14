// ================================ START SCREEN ================================
function startScreen() {
  prac = document.createElement("h1"); prac.innerText = "Practical";
  poetic = document.createElement("h1"); poetic.innerText = "Poetic";

  left.className = "practical button light"; right.className = "poetic button dark";
  left.addEventListener("click", launchPractical); right.addEventListener("click", initApp);
  left.appendChild(prac); right.appendChild(poetic);
}

function launchPractical() {};

window.onload = startScreen();

// ================================ INIT CANVAS ================================
function initApp() {
  left.innerHTML = ""; right.innerHTML = "";
  left.removeEventListener("click", launchPractical);
  //Create PIXI application and add to body
  app = new PIXI.Application({
    backgroundColor: 0x202020, //Just add 0x and then a hex code.
    width: right.offsetWidth,
    height: body.offsetHeight
  });
  app.width = right.offsetWidth; app.height = body.offsetHeight;
  
  right.appendChild(app.view); 
  left.className = "poetic dark"; right.className = "";
  slidesChange([], "1");
};