// ================================ INIT CANVAS ================================
function initApp() {
  //Check device width
  const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if (width < 1000) widthError()
  else {
    //Create PIXI application and add to body
    app = new PIXI.Application({
      backgroundColor: 0x202020, //Just add 0x and then a hex code.
      width: 693,
      height: 657
    });
    app.width = 693; app.height = 657;
    
    right.appendChild(app.view); 
    left.className = "poetic dark"; right.className = "";
    slidesChange("1");

    initNav()
  }
};

function initNav() {
  const nav = document.createElement("div"); nav.className = "menu";
  for (let i = 1; i < 13; i++) {
    const link = document.createElement("a");
    link.innerText = " "; link.onclick = () => changeLink(i);
    if (i == 1) link.className = "active";
    nav.appendChild(link);
  }
  body.prepend(nav);
}

function widthError() {
  const p = document.createElement("p");
  p.innerText = "I'm so sorry, but the poetic reflection is only available on desktop right now :/ Please excuse the inconvenience - Madhav"
  p.className = "error";
  body.prepend(p);
}

window.onload = initApp();