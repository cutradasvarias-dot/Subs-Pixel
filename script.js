let yt = 12345;
let ig = 6789;

function update() {
  yt += Math.random() > 0.7 ? 1 : 0;
  ig += Math.random() > 0.8 ? 1 : 0;

  document.getElementById("youtube").innerText = yt;
  document.getElementById("instagram").innerText = ig;
}

setInterval(update, 2000);
update();
