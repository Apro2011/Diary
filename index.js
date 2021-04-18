// Image Section

document.querySelector("img").style = "width: 18.75rem";
document.querySelector(".chill").addEventListener("click", function () {
  var selectImageIdentity = this.getAttribute("src");
  if (selectImageIdentity.indexOf("images/must-have.png") === -1) {
    this.setAttribute("src", "images/must-have.png");
  } else {
    this.setAttribute(
      "src",
      "https://media.giphy.com/media/l1J9Jso7LPhtYWEKI/giphy.gif"
    );
  }
});

// Quote Section - Clicks

document.querySelector(".magic").addEventListener("click", function () {
  var classSelect = document.querySelector(".quote-2").classList;
  var checkInvisibility = classSelect.contains("invisibility");
  switch (checkInvisibility) {
    case true:
      document.querySelector(".quote-2").classList.remove("invisibility");
      document.querySelector(".quote-1").classList.add("invisibility");

      break;

    case false:
      document.querySelector(".quote-2").classList.add("invisibility");
      document.querySelector(".quote-1").classList.remove("invisibility");

    default:
      console.log(checkInvisibility);
      break;
  }
});

// Quote Section - Keypresses

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "1":
      document.querySelector(".quote-2").classList.remove("invisibility");
      document.querySelector(".quote-1").classList.add("invisibility");

      break;

    case "2":
      document.querySelector(".quote-2").classList.add("invisibility");
      document.querySelector(".quote-1").classList.remove("invisibility");

    default:
      console.log(this.key);
      break;
  }
});

// Songs Section

var hereForYou = document.querySelector(".firehouse");
hereForYou.addEventListener("click", function () {
  hereForYou.classList.add("clickeffects");
  setTimeout(function () {
    hereForYou.classList.remove("clickeffects");
  }, 100);
});

var music = new Audio("Firehouse - Here for You (Official Video).weba");
var hereForYouPlay = document.querySelector(".firehouse");
hereForYouPlay.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    music2.pause();
    music2.currentTime = 0;
    music3.pause();
    music3.currentTime = 0;
  } else {
    music.pause();
    music.currentTime = 0;
  }
});

var iWillNeverLetYouGo = document.querySelector(".steelheart");
iWillNeverLetYouGo.addEventListener("click", function () {
  iWillNeverLetYouGo.classList.add("clickeffects");
  setTimeout(function () {
    iWillNeverLetYouGo.classList.remove("clickeffects");
  }, 100);
});

var music2 = new Audio(
  "Steelheart - I ll Never Let You Go (Official Video).mp3"
);
var iWillNeverLetYouGoPlay = document.querySelector(".steelheart");
iWillNeverLetYouGoPlay.addEventListener("click", function () {
  if (music2.paused) {
    music2.play();
    music.pause();
    music.currentTime = 0;
    music3.pause();
    music3.currentTime = 0;
  } else {
    music2.pause();
    music2.currentTime = 0;
  }
});

var missMisery = document.querySelector(".elliot-smith");
missMisery.addEventListener("click", function () {
  missMisery.classList.add("clickeffects");
  setTimeout(function () {
    missMisery.classList.remove("clickeffects");
  }, 100);
});

var music3 = new Audio(
  "Miss Misery by Elliott Smith [Lyrics] Good Will Hunting (ending song).mp3"
);
var missMiseryPlay = document.querySelector(".elliot-smith");
missMiseryPlay.addEventListener("click", function () {
  if (music3.paused) {
    music3.play();
    music2.pause();
    music2.currentTime = 0;
    music.pause();
    music.currentTime = 0;
  } else {
    music3.pause();
    music3.currentTime = 0;
  }
});
