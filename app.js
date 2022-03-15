class Drumkit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
    this.isPlaying = null;
  }
  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    // using the % operation makes it so once the index reaches 8 it will go back to 0 and loop
    let step = this.index % 8;
    // if step is x we select all pads with class bx
    const activeBars = document.querySelectorAll(`.b${step}`);
    //Loop over pads
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      if (bar.classList.contains("active")) {
        if (bar.classList.contains("kick-pad")) {
          // active pad audio does not finish in time for following pad to play, setting the current time to 0 solves this
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
      }
    });
    this.index++;
  }
  // setInterval(function, milliseconds) when play is clicked we run the code in repeat based off the interval
  start() {
    // calculate bpm by dividing bpm variable by 60(seconds) * 1000 to convert to milseconds to fit in setInterval()
    const interval = (60 / this.bpm) * 1000;
    // repeat not active? run the code
    if (!this.isPlaying) {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    } else {
      //repeat is active? Clear the interval so it stops
      clearInterval(this.isPlaying);
      this.isPlaying = null;
    }
  }
  updateBtn() {
    if (!this.isPlaying) {
      this.playBtn.innerText = "Stop";
      this.playBtn.classList.add("active");
    } else {
      this.playBtn.innerText = "Play";
      this.playBtn.classList.remove("active");
    }
  }
}

const drumKit = new Drumkit();

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

//selected play button in constructor and added event listener to run the start method when clicked
drumKit.playBtn.addEventListener("click", () => {
  drumKit.updateBtn();
  drumKit.start();
});
