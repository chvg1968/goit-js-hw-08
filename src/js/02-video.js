import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player(document.querySelector("iframe"));

player.ready().then(function() {
  console.log("El reproductor está listo");
});

const updatePlaybackTime = function() {
  player.getCurrentTime().then(function(time) {
    console.log("El tiempo de reproducción actualizado es:", time);
    // Guardar el tiempo de reproducción en el almacenamiento local
    localStorage.setItem("videoplayer-current-time", time);
  });
};

player.on("timeupdate", throttle(updatePlaybackTime, 1000));

window.addEventListener("load", function() {
  // Obtener el tiempo de reproducción guardado
  const playbackTime = localStorage.getItem("videoplayer-current-time");
  if (playbackTime) {
    player.setCurrentTime(parseFloat(playbackTime));
  }
});


