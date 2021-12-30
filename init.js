// ================================ INIT CANVAS ================================
function initApp() {
  //Create PIXI application and add to body
  app = new PIXI.Application({
    backgroundColor: 0x202020, //Just add 0x and then a hex code.
    width: right.offsetWidth,
    height: body.offsetHeight
  });
  app.width = right.offsetWidth; app.height = body.offsetHeight;
  
  right.appendChild(app.view); 
  left.className = "poetic dark"; right.className = "";
  slidesChange("1");

  initNav()
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

window.onload = initApp();