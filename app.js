class Drumkit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
  }
  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    // using the % operation makes it so once the index reaches 8 it will go back to 0 and loop
    let step = this.index % 8;
    // if step is x we select all pads with class bx
    const activeBars = document.querySelectorAll(`.b${step}`);

    this.index++;
  }
  // setInterval(function, milliseconds)
  start() {
    // calculate bpm by dividing bpm variable by 60(seconds) * 1000 to convert to milseconds to fit in setInterval()
    const interval = (60 / this.bpm) * 1000;
    setInterval(() => {
      this.repeat();
    }, interval);
  }
}

const drumKit = new Drumkit();

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
});

//selected play button in constructor and added event listener to run the start method when clicked
drumKit.playBtn.addEventListener("click", () => {
  drumKit.start();
});
