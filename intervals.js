const intervalManifest = {};

function intervalHandler(intervalName, intervalDuration, intervalCode, task) {
  if (task == "add") {
    if (!intervalManifest[intervalName]) {
      const id = setInterval(intervalCode, intervalDuration);
      intervalManifest[intervalName] = id;
    }
  } else if (task == "remove") {
    const id = intervalManifest[intervalName];
    clearInterval(id);
    delete intervalManifest[intervalName];
  }
}