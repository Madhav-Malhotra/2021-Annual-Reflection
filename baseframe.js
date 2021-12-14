// ================================ START SCREEN ================================
function startScreen() {
  prac = document.createElement("h1"); prac.innerText = "Practical";
  poetic = document.createElement("h1"); poetic.innerText = "Poetic";

  left.className = "practical button light"; right.className = "poetic button dark";
  left.addEventListener("click", () => chooseType("practical")); right.addEventListener("click", () => chooseType("poetic"));
  left.appendChild(prac); right.appendChild(poetic);
}

function chooseType(name) {
  if (name === "practical") console.log("practical");
  else if (name === "poetic") initApp();
}

window.onload = startScreen();

// ================================ INIT CANVAS ================================
function initApp() {
  left.innerHTML = ""; right.innerHTML = "";
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