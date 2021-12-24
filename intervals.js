const intervalManifest = {};

function intervalHandler(intervalName, intervalDuration, intervalCode, task) {
  if (task == "add") {
    const id = setInterval(intervalCode, intervalDuration);
    intervalManifest[intervalName] = id;
  } else if (task == "remove") {
    const id = intervalManifest[intervalName];
    clearInterval(id);
    delete intervalManifest[intervalName];
  }
}