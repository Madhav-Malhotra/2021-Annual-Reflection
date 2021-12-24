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
  slidesChange([], "1");
};

window.onload = initApp();