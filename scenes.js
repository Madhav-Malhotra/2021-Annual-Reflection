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
function slidesChange(intervals, slideNum) {
  for (i of intervals) { intervalHandler(i, null, null, "remove"); }
  app.stage.removeChildren(); left.innerHTML = "";
  const sceneLoad = slides[slideNum];
  loader.add(`assets/${slideNum}/${slideNum}.json`).load(sceneLoad);
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
  "6": ["I fight up the hill.","","Though it is hot;","Though I do not like it;","Though I do not know why I started;","Nor what I will see when I get up there.","","I reach the top.","","Great the journey, little the gain.","Atop the hill: an unlit torch.","A silent beacon on the hill.","","Light the torch.","","The road still carries on."],
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
  const s = loader.resources["assets/1/1.json"].spritesheet.textures;
  const body = new PIXI.Sprite(s['Body.png']); 
  const hill = new PIXI.Sprite(s['roundHill.png']);
  let eyes = [new PIXI.Sprite(s['Eyes.png']), new PIXI.Sprite(s['ClosedEyes.png'])]; 
  eyes = new PIXI.AnimatedSprite(eyes); eyes.gotoAndStop(0);

  //Init Text
  const title = document.createElement('h1'); title.innerText = "The Road Still Carries On";
  const text = document.createElement('p'); text.innerText = "A journey through fear.";
  const button = document.createElement("button"); button.innerText = "Start"; button.className = "poetic"

  //Size
  person.addChild(body); 
  person.addChild(eyes);
  person.scale.x = 0.5; person.scale.y = 0.5; person.x = app.width / 3; person.y = app.height / 6; 
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

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
  intervalHandler("blinkingEyes", 1000, blinkingEyes, "add");

  //Add to screen
  scene.addChild(person); scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  left.appendChild(title); left.appendChild(text); left.appendChild(button);
  cleanIntervals = ["blinkingEyes"]; button.onclick = () => slidesChange(cleanIntervals, 2);

  app.stage.addChild(scene);
}

function scene2() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["assets/2/2.json"].spritesheet.textures;
  const body = new PIXI.Sprite(s['Body.png']); 
  const hill = new PIXI.Sprite(s['roundHill.png']);
  let eyes = [new PIXI.Sprite(s['Eyes.png']), new PIXI.Sprite(s['ClosedEyes.png'])]; 
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
  person.addChild(body); person.addChild(eyes);
  person.scale.x = 0.5; person.scale.y = 0.5; person.x = app.width / 3; person.y = app.height / 6; 
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

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
  intervalHandler("blinkingEyes", 1000, blinkingEyes, "add");

  //Add to screen
  scene.addChild(person); scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  cleanIntervals = []; button.onclick = () => slidesChange(cleanIntervals, 3);

  app.stage.addChild(scene);
}

function scene3() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["assets/3/3.json"].spritesheet.textures;
  const body = new PIXI.Sprite(s['Body.png']); 
  const hill = new PIXI.Sprite(s['roundHill.png']);
  let eyes = [new PIXI.Sprite(s['Eyes.png']), new PIXI.Sprite(s['ClosedEyes.png'])]; 
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
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

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
  intervalHandler("blinkingEyes", 1000, blinkingEyes, "add");

  //Add to screen
  scene.addChild(person); scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  cleanIntervals = []; button.onclick = () => slidesChange(cleanIntervals, 4);

  app.stage.addChild(scene);
}

function scene4() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["assets/4/4.json"].spritesheet.textures;
  const body = new PIXI.Sprite(s['Body.png']); 
  const hill = new PIXI.Sprite(s['roundHill.png']);
  let eyes = [new PIXI.Sprite(s['Eyes.png']), new PIXI.Sprite(s['ClosedEyes.png'])]; 
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
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

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
  intervalHandler("blinkingEyes", 1000, blinkingEyes, "add");

  //Add to screen
  scene.addChild(person); scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  cleanIntervals = []; button.onclick = () => slidesChange(cleanIntervals, 5);

  app.stage.addChild(scene);
}

function scene5() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["assets/5/5.json"].spritesheet.textures;
  const hill = new PIXI.Sprite(s['roundHill.png']);

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
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

  //Create animation

  //Add to screen
  scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  cleanIntervals = []; button.onclick = () => slidesChange(cleanIntervals, 6);

  app.stage.addChild(scene);
}

function scene6() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["assets/6/6.json"].spritesheet.textures;
  const hill = new PIXI.Sprite(s['roundHill.png']);

  //Init Text
  const poem = slideText["6"];
  for (el of poem.slice(0, poem.length - 1)) {
    const p = document.createElement("p")
    p.innerText = el;
    if (!el) p.className = "break";
    left.appendChild(p)
  }
  const button = document.createElement("button"); button.innerText = poem[poem.length - 1]; 
  button.className = "poetic"; left.appendChild(button);

  //Size
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

  //Create animation

  //Add to screen
  scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  cleanIntervals = []; button.onclick = () => slidesChange(cleanIntervals, 7);

  app.stage.addChild(scene);
}

function scene7() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["assets/7/7.json"].spritesheet.textures;
  const hill = new PIXI.Sprite(s['roundHill.png']);

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
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

  //Create animation

  //Add to screen
  scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  cleanIntervals = []; button.onclick = () => slidesChange(cleanIntervals, 8);

  app.stage.addChild(scene);
}

function scene8() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["assets/8/8.json"].spritesheet.textures;
  const hill = new PIXI.Sprite(s['roundHill.png']);

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
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

  //Create animation

  //Add to screen
  scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  cleanIntervals = []; button.onclick = () => slidesChange(cleanIntervals, 9);

  app.stage.addChild(scene);
}

function scene9() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["assets/9/9.json"].spritesheet.textures;
  const hill = new PIXI.Sprite(s['roundHill.png']);

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
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

  //Create animation

  //Add to screen
  scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  cleanIntervals = []; button.onclick = () => slidesChange(cleanIntervals, 10);

  app.stage.addChild(scene);
}

function scene10() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["assets/10/10.json"].spritesheet.textures;
  const hill = new PIXI.Sprite(s['roundHill.png']);

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
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

  //Create animation

  //Add to screen
  scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  cleanIntervals = []; button.onclick = () => slidesChange(cleanIntervals, 11);

  app.stage.addChild(scene);
}

function scene11() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["assets/11/11.json"].spritesheet.textures;
  const hill = new PIXI.Sprite(s['roundHill.png']);

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
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

  //Create animation

  //Add to screen
  scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  cleanIntervals = []; button.onclick = () => slidesChange(cleanIntervals, 12);

  app.stage.addChild(scene);
}

function scene12() {
  const scene = new PIXI.Container(); const person = new PIXI.Container();
  //Init Sprites
  const s = loader.resources["assets/12/12.json"].spritesheet.textures;
  const hill = new PIXI.Sprite(s['roundHill.png']);

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
  hill.scale.x = 1/1.24; hill.scale.y = 1/1.26;

  //Create animation

  //Add to screen
  scene.addChild(hill); //addChild for PIXI.js el. appendChild for DOM el
  //cleanIntervals = []; button.onclick = () => slidesChange(cleanIntervals, 3);

  app.stage.addChild(scene);
}