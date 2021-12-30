const intervalManifest = {};

function addInterval(intervalName, intervalDuration, intervalCode) {
  if (!intervalManifest[intervalName]) {
    const id = setInterval(intervalCode, intervalDuration);
    intervalManifest[intervalName] = id;
  }
};

function clearIntervals() {
  for (k of Object.keys(intervalManifest)) {
    const id = intervalManifest[k];
    clearInterval(id);
    delete intervalManifest[k];
  }
}

function removeSpecific(name) {
  const id = intervalManifest[name];
  clearInterval(id);
  delete intervalManifest[name];
}

const domManifest = {};

function addDomEl(domName, domEl) {
  if (!domManifest[domName]) domManifest[domName] = domEl;
}

function clearDomTween() {
  for (k of Object.keys(domManifest)) {
    createjs.Tween.removeTweens(domManifest[k]);
    delete domManifest[k];
  }
}