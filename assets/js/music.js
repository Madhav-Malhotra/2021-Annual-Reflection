document.getElementById("home-button").addEventListener("click", () => window.location = "./index.html");

const music = ["CleanWaterUponYou", "Eternity", "MemoirOfSolitude", "Motion", "WeAreSaved"];
let currAudio;
const musicButton = document.getElementById("music-button");
let musicCopy = JSON.parse(JSON.stringify(music));

function musicLoader() {
  window.onclick = null;
  let currMusic = musicCopy.length > 0 ? musicCopy : initMusicCopy();
  const rand = Math.floor(Math.random() * currMusic.length);
  const song = new Audio(`./assets/music/${currMusic[rand]}.mp3`);
  song.play();

  currAudio = song;
  musicButton.innerText = "Sound On";
  musicCopy.splice(rand, 1);
  song.addEventListener("ended", () => musicLoader());
}

function initMusicCopy() {
  const newMusic = JSON.parse(JSON.stringify(music));
  musicCopy = newMusic;
  return newMusic;
};

function musicToggle(el) {
  const state = el.innerText;
  if (state == "Sound On") {
    currAudio.pause();
    el.innerText = "Sound Off";
  } else {
    currAudio.play();
    el.innerText = "Sound On";
  }
}

window.onclick = musicLoader;