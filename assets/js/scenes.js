// ================================ INITIALISATION ================================
let app;
const right = document.querySelector("#right");
const body = document.body;
const left = document.querySelector("#left");

let loader = PIXI.Loader.shared;
const Tween = createjs.Tween;
const Ticker = createjs.Ticker;
Ticker.framerate = 60;
// ================================ CHANGE SLIDES ================================
function slidesChange(slideNum) {
  clearIntervals(); clearDomTween();
  app.stage.removeChildren(); left.innerHTML = "";

  const sceneLoad = slides[slideNum];
  for (let i = 1; i <= slideNum; i++) {
    const pos = `./assets/${i}/${i}.json`;
    if (!loader.resources[pos] && i != slideNum) loader.add(pos);
    else if (!loader.resources[pos] && i == slideNum) loader.add(pos).load(sceneLoad);
    else if (loader.resources[pos] && i == slideNum) sceneLoad();
  };
}

function changeLink(i) {
  const nav = document.querySelector("div.menu");
  for (let j = 0; j < 12; j++) {
    if (j+1 != i) nav.children[j].className = "";
    else nav.children[j].className = "active";
  }
  slidesChange(i);
}

const slides = {
  "1": () => scene1(),
  "2": () => scene2(),
  "3": () => scene3(),
  "4": () => scene4(),
  "5": () => scene5(),
  "6": () => scene6(),
  "7": () => scene7(),
  "8": () => scene8(),
  "9": () => scene9(),
  "10": () => scene10(),
  "11": () => scene11(),
  "12": () => scene12()
};

const slideText = {
  "2": ["Throughout my life, I have relied on the kindness of strangers.", "", "Those who wiped away my very first tears.", "Those who welcomed me into their homes when I had none.", "Those who judged me on the content of my character,", "And not the colour of my skin.", "", "I have grown familiar with the kindness of strangers in life.", "I could not afford to do otherwise.", "", "The road still carries on."],
  "3": ["We are all walking a journey.","To a destination we do not know.","We cannot know for we have never been.","","The sky's fire in a sunrise.","The open landscape amidst a clearing of trees.","Don't wait to appreciate beauty when it comes.","Just don't wait.","","Thinking is easy.","Believing is the hard part.","","The road still carries on."],
  "4": ["We are all borne to the human hardship","That joy becomes struggle;","And struggle becomes joy.","","Yet they were never anything but entwined.","","What difference in the loss of peace and the loss of war?","Suffering is human, whether in wartime or peace.","","We all trek the hills of struggle and joy.","Weaving invisible, intractable, incomprehensible tracks.","Inevitably, the ground disappears beneath our feet.","","The road still carries on."],
  "5": ["Sink down lower.","Let the waves crash and rise.","","I see but I do not look.","I look but I do not see.","","The universe is an ashen barrens.","","How low can I go?","How long till there is light?","","The road still carries on."],
  "6": ["I fight up the hill.","","Though it is hot;","Though I do not like it;","Though I do not know why I started;","Nor what I will see when I get up there.","","I reach the top.","","Great the journey, little the gain.","Atop the hill: an unlit torch.","A silent beacon on the hill.","","Light the torch.",],
  "7": ["Lights come and go,","But the darkness is constant.","Darkness is one;","It's the light that has distinctions.","","Look in the mirror;","But the reflection is not my own.","Look down to my hands;","See the monster I have been.","","But truth be told,","There is nothing separating light and darkness,","But the strain in our eyes.","","The road still carries on."],
  "8": ["We search 'out there' for meaning.","Something to fill the emptiness.","Yet the truth is this:","There is no meaning to be found 'out there'.","","No matter how we chase the fog,","when we're in the fog it eludes us.","No matter how we admire the frost,","when we touch the frost it fades.","","Some things, we may only appreciate from afar.","The beauty of things in the end,","is the very fact they do not last.","","The road still carries on."],
  "9": ["Our artificial boundaries in the sand","Are ever-fading in the tempest of life.","","In truth, all is connected. ","","The greeting of the breeze on my face","Takes and brings my warmth.","The grass on which I step","Is shaped by the footprints I leave.","The sun's rays and human smiles","Brighten my face just as theirs.","","The road still carries on."],
  "10": ["We are like fire.","From dust we came;","And to dust we shall return.","Yet the transient spark in the middle is noble.","","In a way only we can understand.","In a way only we can celebrate.","In a way only we can be.","","I am proud to listen to the human.","Not in her divinity,","But in her imperfect growth.","","The road still carries on."],
  "11": ["My story may not have had a happy beginning.","Yet it is not the beginning that defines a story.","","Art is to choose to create;","Knowing full well its lack of meaning;","And its inevitable demise.","","The excitement of creativity,","The pull of curiosity,","The relief of humour,","The awe of nature,","The compassion of giving.","","There are things that can block the meaningless of life.","","To live is to create meaning.","To live is art.","","The road still carries on."],
  "12": ["Just as I am within the universe.","The universe is within me.","There is no world","But the world I choose to see.","","I am the source of darkness.","I am the source of light.","I am the lighter of torches.","The only citadel in night.","","Be not master of my fate","I am captain of my soul.","","The road still carries on."],
}

// ================================ SCENES ================================
function scene1() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["./assets/1/1.json"].spritesheet.textures;
  const body = new PIXI.Sprite(s['BodyArms1.png']); 
  const hill = new PIXI.Sprite(s['roundHill1.png']);
  let eyes = [new PIXI.Sprite(s['Eyes1.png']), new PIXI.Sprite(s['ClosedEyes1.png'])]; 
  eyes = new PIXI.AnimatedSprite(eyes); eyes.gotoAndStop(0);

  //Init Text
  const title = document.createElement('h1'); title.innerText = "The Road Still Carries On";
  const text = document.createElement('p'); text.innerText = "A journey through fear.";
  const button = document.createElement("button"); button.innerText = "Start"; button.className = "poetic"

  //Size
  person.addChild(body); 
  person.addChild(eyes);
  person.scale.x = 0.5; person.scale.y = 0.5; person.x = app.width / 3; person.y = app.height / 6; 
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26; hill.y = app.height / 20;

  //Create animation
  Tween.get(person, {loop: true})
    .to({y: app.height / 8}, 1500, createjs.Ease.sineInOut)
    .to({y: app.height / 6}, 1500, createjs.Ease.sineInOut)
  const blinkingEyes = () => {
    if (eyes.currentFrame == 0 && Math.random() > 0.6) {
      eyes.gotoAndStop(1);
      setTimeout(() => eyes.gotoAndStop(0), 100);
    }
  };
  addInterval("blinkingEyes", 1000, blinkingEyes);

  //Add to screen
  scene.addChild(person); scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  left.appendChild(title); left.appendChild(text); left.appendChild(button);
  button.onclick = () => changeLink(2);

  app.stage.addChild(scene); addDomEl("person", person);
}

function scene2() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s1 = loader.resources["./assets/1/1.json"].spritesheet.textures;
  const s = loader.resources["./assets/2/2.json"].spritesheet.textures;
  const body = new PIXI.Sprite(s['Body2.png']); const child = new PIXI.Sprite(s["Body2.png"]);
  const leftArm = new PIXI.Sprite(s['Left_trim2.png']); const rightArm = new PIXI.Sprite(s['Right_trim2.png']);
  let eyes = [new PIXI.Sprite(s['SmilingEyes2.png']), new PIXI.Sprite(s1['Eyes1.png'])]; const oneEye = new PIXI.Sprite(s["OneEye2.png"]);
  eyes = new PIXI.AnimatedSprite(eyes); eyes.gotoAndStop(0);  

  //Init Text
  const poem = slideText["2"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; left.appendChild(button);

  //Size
  person.addChild(body); person.addChild(eyes); person.addChild(leftArm); person.addChild(rightArm);
  person.scale.x = 0.7; person.scale.y = 0.7; person.x = app.width / 3; person.y = app.height / 6; 
  leftArm.pivot.set(0, 0); leftArm.x = person.width / 2.2; leftArm.y = person.height / 1.35; leftArm.angle = 20;
  rightArm.pivot.set(0, 0); rightArm.x = person.width / 1.2; rightArm.y = person.height / 1.35; rightArm.angle = 30;
  
  child.addChild(oneEye); oneEye.x = child.width / 5;
  child.scale.x = 0.22; child.scale.y = 0.22; child.x = app.width / 2.3; child.y = app.height / 1.3; child.angle = -88;

  //Create animation
  Tween.get(person, {loop: true})
    .to({y: app.height / 8}, 1500, createjs.Ease.sineInOut)
    .to({y: app.height / 6}, 1500, createjs.Ease.sineInOut)
  Tween.get(child, {loop: true})
  .to({y: app.height / 1.37}, 1500, createjs.Ease.sineInOut)
  .to({y: app.height / 1.3}, 1500, createjs.Ease.sineInOut)
  const eyesAndRock = () => {
    if (eyes.currentFrame == 0 && Math.random() > 0.6) {
      eyes.gotoAndStop(1);
      setTimeout(() => eyes.gotoAndStop(0), 1500);
    }
    if (Math.random() > 0.5) {
      Tween.get(leftArm)
      .to({angle: -10}, 1200, createjs.Ease.sineInOut)
      .to({angle: 20}, 1200, createjs.Ease.sineInOut)
      Tween.get(rightArm)
        .to({angle: -10}, 1200, createjs.Ease.sineInOut)
        .to({angle: 30}, 1200, createjs.Ease.sineInOut)
      Tween.get(child)
      .to({angle: -92, x: app.width / 1.9}, 1200, createjs.Ease.sineInOut)
      .to({angle: -88, x: app.width / 2.3}, 1200, createjs.Ease.sineInOut)
    }
  };
  addInterval("eyesAndRock", 2500, eyesAndRock);

  //Add to screen
  scene.addChild(person); //addChild for PIXI.js el. appendChild for DOM el
  scene.addChild(child);
  button.onclick = () => changeLink(3);

  app.stage.addChild(scene); addDomEl("person", person); addDomEl("child", child);
}

function scene3() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["./assets/3/3.json"].spritesheet.textures;
  const body = new PIXI.Sprite(s['SideBody3.png']); 
  const hill = new PIXI.Sprite(s['Hill3.png']);
  let eyes = [new PIXI.Sprite(s['SideEye3.png']), new PIXI.Sprite(s['SideEyeGlare3.png'])];
  eyes = new PIXI.AnimatedSprite(eyes); eyes.gotoAndStop(0); 

  //Init Text
  const poem = slideText["3"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; left.appendChild(button);

  //Size
  person.addChild(body); person.addChild(eyes);
  person.scale.x = 0.5; person.scale.y = 0.5; person.x = app.width / 3; person.y = app.height / 6; 
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26; hill.anchor.set(0.75,0.2);

  //Create animation
  Tween.get(hill, {loop: true})
    .wait(500)
    .to({x: 500, y: -50}, 1000, createjs.Ease.sineIn)
    .to({x: 1000, y: 450}, 700)
    .to({x: 1932, y: 613}, 1600, createjs.Ease.sineOut)
    .call(() => {
      Tween.get(person)
      .to({y: app.height / 8}, 1500, createjs.Ease.sineInOut)
      .to({y: app.height / 6}, 1500, createjs.Ease.sineInOut)
    })
    .wait(1500)
  Tween.get(person, {loop: true})
    .wait(500)
    .to({angle: -10}, 1000, createjs.Ease.sineInOut)
    .to({angle: 20}, 350, createjs.Ease.sineInOut)
    .wait(350)
    .to({angle: 0}, 1600, createjs.Ease.sineOut)
    .wait(1500)
  const glaringEyes = () => {
    setTimeout(() => eyes.gotoAndStop(1), 500);
    setTimeout(() => eyes.gotoAndStop(0), 3800);
  };
  glaringEyes();
  addInterval("glaringEyes", 5300, glaringEyes);

  //Add to screen
  scene.addChild(person); scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  button.onclick = () => changeLink(4);

  app.stage.addChild(scene); addDomEl("person", person); addDomEl("hill", hill);
}

function scene4() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["./assets/4/4.json"].spritesheet.textures;
  const s3 = loader.resources["./assets/3/3.json"].spritesheet.textures;
  const hill = new PIXI.Sprite(s['Flat4.png']);
  const body = new PIXI.Sprite(s3['SideBody3.png']); 
  let eyes = [new PIXI.Sprite(s3['SideEye3.png']), new PIXI.Sprite(s['DizzyEye4.png'])];
  eyes = new PIXI.AnimatedSprite(eyes); eyes.gotoAndStop(0); 

  //Init Text
  const poem = slideText["4"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; left.appendChild(button);

  //Size
  person.addChild(body); person.addChild(eyes);
  person.scale.x = 0.5; person.scale.y = 0.5; person.x = app.width / 3; person.y = app.height / 6; 
  hill.scale.x = 1.2; hill.scale.y = 1.3; hill.anchor.set(0.7, -0.52)

  //Create animation
  Tween.get(person, {loop: true})
    .to({y: app.height / 8}, 1500, createjs.Ease.sineInOut)
    .to({y: app.height / 6}, 1500, createjs.Ease.sineInOut)
    .to({y: app.height / 8}, 1500, createjs.Ease.sineInOut)
    .to({y: app.height / 6}, 1500, createjs.Ease.sineInOut)
    .to({y: 400}, 800, createjs.Ease.sineIn)
    .to({x: 400}, 3000, createjs.Ease.sineIn)
    .to({y: 500, x: 200}, 3000, createjs.Ease.sineOut)
    .to({y: 600, x: app.width / 3}, 200, createjs.Ease.elasticIn)
    .wait(500)
    .to({y: app.height / 6}, 1000, createjs.Ease.sineIn)
    .wait(1100) //14.1
  Tween.get(person, {loop: true})
    .wait(4000)
    .to({angle: -10}, 1600, createjs.Ease.sineInOut)
    .to({angle: -40}, 1500, createjs.Ease.sineInOut)
    .to({angle: -440}, 6000, createjs.Ease.sineInOut)
    .wait(500)
    .to({angle: -360}, 1500, createjs.Ease.sineInOut)
    .wait(500) //14.1
  Tween.get(hill, {loop: true})
    .wait(4000)
    .to({x: 2500}, 3000, createjs.Ease.sineIn)
    .wait(6000)
    .to({x: 0, y: 300}, 1, createjs.Ease.elasticIn)
    .to({x: 0, y: 0}, 150, createjs.Ease.elasticOut)
    .wait(2400) //14.1
  const dizzyEyes = () => {
    setTimeout(() => eyes.gotoAndStop(1), 6550);
    setTimeout(() => eyes.gotoAndStop(0), 13600);
  };
  dizzyEyes();
  addInterval("dizzyEyes", 15600, dizzyEyes);
  
  //Add to screen
  scene.addChild(person); scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  button.onclick = () => changeLink(5);

  app.stage.addChild(scene); addDomEl("person", person); addDomEl("hill", hill);
}

function scene5() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["./assets/5/5.json"].spritesheet.textures;
  const s4 = loader.resources["./assets/4/4.json"].spritesheet.textures;
  const base = new PIXI.Sprite(s['SideBody5.png']); const head = new PIXI.Sprite(s['Head5.png']);
  const sadEye = new PIXI.Sprite(s['SadEye5.png']); const hill = new PIXI.Sprite(s4['Flat4.png']);

  //Init Text
  const poem = slideText["5"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; left.appendChild(button);

  //Size
  head.addChild(sadEye); person.addChild(head); person.addChild(base);
  person.scale.x = 0.5; person.scale.y = 0.5; person.x = app.width / 1.05; person.y = app.height / 6; 
  hill.scale.x = 1.2; hill.scale.y = 1.2; hill.anchor.set(0.7, -0.7)

  //Create animation
  Tween.get(person, {loop: true})
    .to({y: app.height / 8}, 1500, createjs.Ease.sineInOut)
    .to({y: app.height / 6}, 1500, createjs.Ease.sineInOut)
    .to({y: app.height / 8}, 1500, createjs.Ease.sineInOut)
    .to({y: app.height / 6}, 1500, createjs.Ease.sineInOut)
  Tween.get(person, {loop: true})
    .to({x: app.height / 3}, 8000, createjs.Ease.sineInOut)
    .wait(8000)
    .to({x: -170}, 8000, createjs.Ease.sineInOut)
  Tween.get(head, {loop: true})
    .wait(8000)
    .to({angle: 20, x: 110, y: -50}, 4000, createjs.Ease.sineInOut)
    .to({angle: 0, x: 0, y: 0}, 4000, createjs.Ease.sineInOut)
    .wait(8000)

  //Add to screen
  scene.addChild(person); scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  button.onclick = () => changeLink(6);

  app.stage.addChild(scene); addDomEl("person", person); addDomEl("head", head);
}

function scene6() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["./assets/6/6.json"].spritesheet.textures;
  const s1 = loader.resources["./assets/1/1.json"].spritesheet.textures;
  const hill = new PIXI.Sprite(s1['roundHill1.png']);
  const stone = new PIXI.Sprite(s["Stone6.png"]); const stone2 = new PIXI.Sprite(s["Stone6.png"])
  const leftArm = new PIXI.Sprite(s["LeftArm6.png"]); const rightArm = new PIXI.Sprite(s["RightArm6.png"]);
  const base = new PIXI.Sprite(s["BodyAndHead6.png"]); const stick = new PIXI.Sprite(s["Stick6.png"]);
  let fire = getFire();
  let eyes = [new PIXI.Sprite(s['Eyes6.png']), new PIXI.Sprite(s['ClosedEyes6.png'])];
  eyes = new PIXI.AnimatedSprite(eyes); eyes.gotoAndStop(0); 

  //Init Text
  const poem = slideText["6"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; button.id = "light-button"; left.appendChild(button);

  //Size
  person.scale.x = 1/2.8; person.scale.y = 1/2.8; person.x = app.width / 2.3; person.y = app.height / 2.7; 
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.2;
  fire.scale.set(0.6); fire.position.set(205,280); 
  stick.scale.x = 1/4.7; stick.scale.y = 1/4.7; stick.x = 330; stick.y = 390;
  stone.scale.set(1/2.2, 1/2.2); stone.anchor.set(0,-1.7); stone2.scale.set(1/2.2, 1/2.2); stone2.anchor.set(-0.1,-2.4);


  //Create animation
  Tween.get(person, {loop: true})
    .to({y: app.height / 2.6}, 1500, createjs.Ease.sineInOut)
    .to({y: app.height / 2.7}, 1500, createjs.Ease.sineInOut)
  const blinkingEyes = () => {
    if (eyes.currentFrame == 0 && Math.random() > 0.6) {
      eyes.gotoAndStop(1);
      setTimeout(() => eyes.gotoAndStop(0), 100);
    }
  };
  addInterval("blinkingEyes", 1000, blinkingEyes);

  function light() {
    const button = document.getElementById("light-button"); button.innerText = "The road still carries on."
    button.onclick = () => changeLink(7);
    let fireInterval
    Tween.get(leftArm)
      .to({angle: 10, x: 80, y: -50}, 500, createjs.Ease.sineIn)
      .to({angle: 0, x: 0, y: 0}, 100)
      .call(() => {
        scene.removeChildren();
        scene.addChild(stick, fire, hill, person);
        let i = 0;
        fireInterval = () => {
          fire.children[1].gotoAndStop(i)
          i++
          if (i == 40) i = 0;
        };
        addInterval("firePlay", 42, fireInterval);
      });
    Tween.get(rightArm)
      .to({angle: -10, x: -80, y: 50}, 500, createjs.Ease.sineIn)
      .to({angle: 0, x: 0, y: 0}, 100)
    Tween.get(person)
      .wait(500)
      .to({x: app.width / 1.3, angle: 20}, 600, createjs.Ease.sineInOut) 
  }

  //Add to screen
  rightArm.addChild(stone); person.addChild(rightArm); person.addChild(base); 
  leftArm.addChild(stone2); person.addChild(leftArm); person.addChild(eyes);
  scene.addChild(stick); scene.addChild(hill); scene.addChild(person); //addChild for PIXI.js el. appendChild for DOM el
  button.onclick = light;

  app.stage.addChild(scene); addDomEl("person", person); addDomEl("leftArm", leftArm); addDomEl("rightArm", rightArm);
}

function scene7() {
  const scene = new PIXI.Container(); const person = new PIXI.Container(); const fg = new PIXI.Container();
  //Init Sprites
  const s1 = loader.resources["./assets/1/1.json"].spritesheet.textures;
  const s = loader.resources["./assets/7/7.json"].spritesheet.textures;

  const base = new PIXI.Sprite(s1['BodyArms1.png']);
  const hill =  new PIXI.Sprite(s1['roundHill1.png']); const bg = new PIXI.Sprite(s['HillTrail7.png']); 
  let eyes = [new PIXI.Sprite(s1['Eyes1.png']), new PIXI.Sprite(s1['ClosedEyes1.png'])]; 
  eyes = new PIXI.AnimatedSprite(eyes); eyes.gotoAndStop(0);

  let fires = []
  for (let f = 0; f < 4; f++) {
    let fire = getFire();
    if (f == 0) fg.addChild(fire);
    else bg.addChild(fire);
    fires.push(fire);
  }

  //Init Text
  const poem = slideText["7"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; left.appendChild(button);

  //Size
  person.addChild(base); person.addChild(eyes); fg.addChild(person, hill);  
  person.scale.x = 0.5; person.scale.y = 0.5; person.x = app.width / 10; person.y = app.height / 6; 
  hill.anchor.set(0.08, 0.12); bg.scale.set(1/1.25, 1/1.25);
  fires[0].scale.set(0.6); fires[0].pivot.set(-400,-470); 
  fires[1].scale.set(0.3); fires[1].pivot.set(-1600,-800);
  fires[2].scale.set(0.15); fires[2].pivot.set(-4600, -900); 
  fires[3].scale.set(0.075); fires[3].pivot.set(-10900, -800);

  //Create animation
  const blurFG = new PIXI.filters.BlurFilter(0); const blurBG = new PIXI.filters.BlurFilter(10);
  bg.filters = [blurBG]; fg.filters = [blurFG]; 
  Tween.get(person, {loop: true})
    .to({y: app.height / 8}, 1500, createjs.Ease.sineInOut)
    .to({y: app.height / 6}, 1500, createjs.Ease.sineInOut)
  Tween.get(blurBG, {loop: true})
    .wait(4500)
    .to({blur: 0}, 3000, createjs.Ease.sineInOut)
    .wait(4500)
    .to({blur: 10}, 3000, createjs.Ease.sineInOut)
  Tween.get(blurFG, {loop: true})
    .wait(4500)
    .to({blur: 10}, 3000, createjs.Ease.sineInOut)
    .wait(4500)
    .to({blur: 0}, 3000, createjs.Ease.sineInOut)

  const blinkingEyes = () => {
    if (eyes.currentFrame == 0 && Math.random() > 0.6) {
      eyes.gotoAndStop(1);
      setTimeout(() => eyes.gotoAndStop(0), 100);
    }
  };
  addInterval("blinkingEyes", 1000, blinkingEyes);
  let i = 0;
  const firePlay = () => {
    for (f of fires) {f.children[1].gotoAndStop(i)}
    i++
    if (i == 40) i = 0;
  }
  addInterval("firePlay", 42, firePlay);

  //Add to screen
  scene.addChild(bg); scene.addChild(fg); //addChild for PIXI.js el. appendChild for DOM el
  button.onclick = () => changeLink(8);

  app.stage.addChild(scene); addDomEl("person", person); addDomEl("blurFG", blurFG); addDomEl("blurBG", blurBG);
}

function scene8() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["./assets/8/8.json"].spritesheet.textures;
  const s1 = loader.resources["./assets/1/1.json"].spritesheet.textures;
  const s2 = loader.resources["./assets/2/2.json"].spritesheet.textures;
  const s4 = loader.resources["./assets/4/4.json"].spritesheet.textures;

  const snow = new PIXI.Sprite(s['Snow8.png']); const hill = new PIXI.Sprite(s4["Flat4.png"]);
  const body = new PIXI.Sprite(s2['Body2.png']);  
  const leftArm = new PIXI.Sprite(s['LeftArm8.png']); const rightArm = new PIXI.Sprite(s['RightArm8.png']);
  let eyes = [new PIXI.Sprite(s1['Eyes1.png']), new PIXI.Sprite(s2['SmilingEyes2.png'])];
  eyes = new PIXI.AnimatedSprite(eyes); eyes.gotoAndStop(0);  

  //Init Text
  const poem = slideText["8"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; left.appendChild(button);

  //Size
  hill.scale.x = 1.2; hill.scale.y = 1.2; hill.anchor.set(0.7, -0.7);
  snow.scale.set(0.3,0.3); snow.position.set(250,-20);
  person.addChild(body); person.addChild(eyes); person.addChild(leftArm); person.addChild(rightArm);
  leftArm.pivot.set(1,0); leftArm.position.set(117,370); rightArm.position.set(300,385);
  person.scale.x = 0.5; person.scale.y = 0.5; person.x = app.width / 3; person.y = app.height / 4.8; 

  //Create animation
  Tween.get(person, {loop: true})
    .wait(4300)
    .to({y: app.height / 6}, 1500, createjs.Ease.sineInOut)
    .to({y: app.height / 4.8}, 1500, createjs.Ease.sineInOut)
    .wait(4300)
  Tween.get(snow, {loop: true})
    .to({x: 210}, 700, createjs.Ease.sineInOut).to({x: 250}, 700, createjs.Ease.sineInOut)
    .to({x: 210}, 700, createjs.Ease.sineInOut).to({x: 250}, 700, createjs.Ease.sineInOut)
    .to({x: 210}, 700, createjs.Ease.sineInOut).to({x: 250}, 700, createjs.Ease.sineInOut)
    .wait(100).to({x: 440}, 0).wait(3000)
    .to({x: 480}, 700, createjs.Ease.sineInOut).to({x: 440}, 700, createjs.Ease.sineInOut)
    .to({x: 480}, 700, createjs.Ease.sineInOut).to({x: 440}, 700, createjs.Ease.sineInOut)
    .to({x: 480}, 700, createjs.Ease.sineInOut).to({x: 440}, 700, createjs.Ease.sineInOut)
    .wait(3100)
  Tween.get(snow, {loop: true})
    .to({y: 50}, 700).to({y: 100}, 700)
    .to({y: 150}, 700).to({y: 200}, 700)
    .call(() => {
      Tween.get(leftArm)
        .to({angle: 90, y: 320, x: 170}, 1500, createjs.Ease.sineInOut)
        .wait(1000)
        .to({angle: 0, y: 370, x: 117}, 1500, createjs.Ease.sineInOut)
    })
    .to({y: 250}, 700).to({y: 295}, 700)
    .call(() => {
      eyes.gotoAndStop(1);
      setTimeout(() => eyes.gotoAndStop(0), 1500)
    })
    .to({alpha: 0}, 100)
    .to({y: -20, alpha: 1}, 0).wait(3000)
    .to({y: 50}, 700).to({y: 100}, 700)
    .to({y: 150}, 700).to({y: 200}, 700)
    .call(() => {
      Tween.get(rightArm)
      .to({angle: -90}, 1500, createjs.Ease.sineInOut)
      .wait(1000)
      .to({angle: 0}, 1500, createjs.Ease.sineInOut)
    })
    .to({y: 250}, 700).to({y: 290}, 700)
    .call(() => {
      eyes.gotoAndStop(1);
      setTimeout(() => eyes.gotoAndStop(0), 1500)
    })
    .to({alpha: 0}, 100)
    .wait(3000);

  //Add to screen
  scene.addChild(hill); scene.addChild(person); scene.addChild(snow); //addChild for PIXI.js el. appendChild for DOM el
  button.onclick = () => changeLink(9);

  app.stage.addChild(scene); addDomEl("person", person); addDomEl("snow", snow); addDomEl("leftArm", leftArm); addDomEl("rightArm", rightArm);
}

function scene9() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["./assets/9/9.json"].spritesheet.textures;
  const s1 = loader.resources["./assets/1/1.json"].spritesheet.textures;
  const s2 = loader.resources["./assets/2/2.json"].spritesheet.textures;

  const hill = new PIXI.Sprite(s1['roundHill1.png']); const base = new PIXI.Sprite(s2["Body2.png"]);
  const rightArm = new PIXI.Sprite(s["RightArm9.png"]); const leftArm = new PIXI.Sprite(s["LeftArm9.png"]);
  let eyes = [new PIXI.Sprite(s1["Eyes1.png"]), new PIXI.Sprite(s2["SmilingEyes2.png"])];
  eyes = new PIXI.AnimatedSprite(eyes); eyes.gotoAndStop(0);
  let wind = [];
  for (let i = 0; i < 31; i++) {
    j = i.toString();
    do { j = "0" + j } while (j.length < 4)
    wind.push(new PIXI.Sprite(s[`wind${j}.png`]));
  }
  wind = new PIXI.AnimatedSprite(wind); wind.gotoAndStop(31);

  //Init Text
  const poem = slideText["9"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; left.appendChild(button);

  //Size
  person.addChild(base, leftArm, rightArm, eyes);
  leftArm.position.set(-10,-15); rightArm.position.set(-10,10);
  wind.y = -30;
  person.scale.x = 0.5; person.scale.y = 0.5; person.x = 205; person.y = 200; person.angle = -20;
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26; hill.y = app.height / 20;

  //Create animation
  Tween.get(person, {loop: true})
    .to({y: 220}, 1500, createjs.Ease.sineInOut)
    .to({y: 200}, 1500, createjs.Ease.sineInOut)
  const windRepeat = () => {
    let i = 0;
    wind.angle = Math.random() * 10;
    const windPlay = () => {
      wind.gotoAndStop(i);
      i++
      if (i == 32) {
        removeSpecific("windPlay");
      }
    }
    addInterval("windPlay", 42, windPlay);
    setTimeout(() => eyes.gotoAndStop(1), 750);
    setTimeout(() => eyes.gotoAndStop(0), 1750);
  };
  windRepeat();
  addInterval("windRepeat", 3000, windRepeat);

  //Add to screen
  scene.addChild(hill); scene.addChild(person); scene.addChild(wind); //addChild for PIXI.js el. appendChild for DOM el
  button.onclick = () => changeLink(10);

  app.stage.addChild(scene); addDomEl("person", person);
}

function scene10() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["./assets/10/10.json"].spritesheet.textures;
  const ashes = new PIXI.Sprite(s["Ashes10.png"]);
  let fire = new PIXI.Texture.from("./assets/10/fire.mp4");
  fire.baseTexture.resource.source.loop = true; fire = new PIXI.Sprite(fire);

  //Init Text
  const poem = slideText["10"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; left.appendChild(button);

  //Size
  fire.scale.set(0.7, 0.7); ashes.scale.set(0.7, 0.7);
  fire.anchor.set(-0.21, -0.24); ashes.anchor.set(-0.21, -0.24);
  fire.alpha = 0;

  //Create animation
  Tween.get(fire, {loop: true})
    .wait(1000)
    .to({alpha: 1}, 3000, createjs.Ease.sineInOut)
    .wait(3000)
    .to({alpha: 0}, 3000, createjs.Ease.sineInOut)

  //Add to screen
  scene.addChild(ashes, fire); //addChild for PIXI.js el. appendChild for DOM el
  button.onclick = () => changeLink(11);

  app.stage.addChild(scene); addDomEl("fire", fire);
}

function scene11() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["./assets/11/11.json"].spritesheet.textures;
  const s2 = loader.resources["./assets/2/2.json"].spritesheet.textures;
  const s8 = loader.resources["./assets/8/8.json"].spritesheet.textures;
  const s4 = loader.resources["./assets/4/4.json"].spritesheet.textures;

  const trace = new PIXI.Sprite(s["Trace11.png"]); const hill = new PIXI.Sprite(s4["Flat4.png"]);
  const blockLeft = new PIXI.Sprite(s["Block11.png"]); const blockRight = new PIXI.Sprite(s["Block11.png"]);
  const base = new PIXI.Sprite(s2['Body2.png']); const eyes = new PIXI.Sprite(s2['SmilingEyes2.png']);
  const leftArm = new PIXI.Sprite(s8['LeftArm8.png']); const rightArm = new PIXI.Sprite(s8['RightArm8.png']);

  //Init Text
  const poem = slideText["11"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; left.appendChild(button);

  //Size
  hill.position.set(-1300,250); hill.scale.y = 1.25;
  person.addChild(base, eyes, leftArm, rightArm);
  leftArm.pivot.set(1,0); leftArm.angle = 110; leftArm.position.set(195,330); 
  rightArm.angle = -10; rightArm.position.set(298,385);
  person.scale.x = 0.5; person.scale.y = 0.5; person.x = app.width / 6.5; person.y = app.height / 5.8;
  trace.position.set(-875, 280); trace.scale.y = -0.6; 
  blockLeft.position.set(-540, 0); blockRight.scale.x = -1; blockRight.position.set(1200, 0);

  //Create animation
  Tween.get(trace, {loop: true})
    .call(() => {
      Tween.removeTweens(person);
      person.y = app.height / 5.8;
      Tween.get(person, {loop: true})
        .to({y: 40}, 2600, createjs.Ease.sineInOut)
        .to({y: app.height / 5.8}, 2600, createjs.Ease.sineInOut)
    })
    .to({x: 0}, 29700)
  Tween.get(hill, {loop: true})
    .to({x: 0}, 29700)

  //Add to screen
  scene.addChild(trace, blockLeft, blockRight, hill, person); //addChild for PIXI.js el. appendChild for DOM el
  button.onclick = () => changeLink(12);

  app.stage.addChild(scene); addDomEl("person", person); addDomEl("trace", trace); addDomEl("hill", hill);
}

function scene12() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["./assets/12/12.json"].spritesheet.textures;
  const s1 = loader.resources["./assets/1/1.json"].spritesheet.textures;
  const s2 = loader.resources["./assets/2/2.json"].spritesheet.textures;
  const s6 = loader.resources["./assets/6/6.json"].spritesheet.textures;

  const arms = new PIXI.Sprite(s["Arms12.png"]); const base = new PIXI.Sprite(s2["Body2.png"]);
  let eyes = [new PIXI.Sprite(s1['Eyes1.png']), new PIXI.Sprite(s1['ClosedEyes1.png'])]; 
  eyes = new PIXI.AnimatedSprite(eyes); eyes.gotoAndStop(0);  
  let fire = getFire().children[1]; const stick = new PIXI.Sprite(s6["Stick6.png"]);

  //Init Text
  const poem = slideText["12"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; left.appendChild(button);

  //Size
  person.addChild(base, arms, eyes, stick, fire); 
  person.scale.set(0.64); person.position.set(212, 100);
  fire.position.set(-137, 50); stick.scale.set(0.75, 0.25); stick.position.set(165, 380);
  fire.scale.set(1/0.64);

  //Create animation
  Tween.get(person, {loop: true})
    .to({y: 70}, 1500, createjs.Ease.sineInOut)
    .to({y: 100}, 1500, createjs.Ease.sineInOut)
  let i = 0;
  fireInterval = () => {
    fire.gotoAndStop(i)
    i++
    if (i == 40) i = 0;
  };
  addInterval("firePlay", 42, fireInterval);
  const blinkingEyes = () => {
    if (eyes.currentFrame == 0 && Math.random() > 0.6) {
      eyes.gotoAndStop(1);
      setTimeout(() => eyes.gotoAndStop(0), 100);
    }
  };
  addInterval("blinkingEyes", 1000, blinkingEyes);

  //Add to screen
  scene.addChild(person); //addChild for PIXI.js el. appendChild for DOM el
  button.onclick = () => window.location = "./credits.html"

  app.stage.addChild(scene); addDomEl("person", person);
}

function getFire() {
  const all = new PIXI.Container(); const s6 = loader.resources["./assets/6/6.json"].spritesheet.textures;

  const stick = new PIXI.Sprite(s6["Stick6.png"]);
  let fire = [];
  for (let i = 0; i < 41; i++) {
    j = i.toString();
    do { j = "0" + j } while (j.length < 4)
    fire.push(new PIXI.Sprite(s6[`lit${j}.png`]));
  }
  fire = new PIXI.AnimatedSprite(fire);

  stick.scale.x = 1/3; stick.scale.y = 1/3; stick.anchor.set(-2.53,-1);
  all.addChild(stick, fire);
  return all;
}