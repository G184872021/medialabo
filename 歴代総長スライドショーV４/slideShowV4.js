
let count = 0;
let url;

let nowPlaying = false;
let timer;
let speed = 1000; 

const main = document.querySelector("div>img");
const thumb = document.querySelector("div.thumbnails");
function next() {
    let old = count;
    count++;
    count =count  % 19;
    url = makeURL(count);
    main.setAttribute("src", url);
    changeOpacity(old, count);
}

function prev() {
    let old = count;
    count--;
    count = (19 + count) % 19;
    url = makeURL(count);
    main.setAttribute("src", url);
    changeOpacity(old, count);
}

function changeOpacity(oldNum, newNum) {
    thumb.children[oldNum].classList.remove("selected");
    thumb.children[newNum].classList.add("selected");
}

function makeURL(num) {
    const head = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
    const tail = ".jpg";
    /*
    let n;
    num++;
*/
    let n = (num + 1).toString().padStart(2, "0");
    
/*
    if (num < 10) {
        n = "0" + num;
    } else {
        n = num;
    }
*/
    return head + n + tail;
}

function autoPlay() {
    next();
    timer =setTimeout(autoPlay, speed);
  }
  
  function play() {
    if (!nowPlaying) {
      nowPlaying = true;
      autoPlay();
    }
  }
  
  function stop() {
    clearTimeout(timer);
    nowPlaying = false;
  }
  
  function reset() {
    
   
  stop();
    thumbnails[count].classList.remove("selected");
    count = 0;
    
    url = makeURL(count);
    main.setAttribute("src", url);
    thumbnails[count].classList.add("selected");
  }
  
  function doubleSpeed() {
    stop();
    speed = 500; 
    play();
  }
  

func
  function reversePlay() {
    stop();
    speed = 1000; 
    prev();
    timer = 
    timer = setT
  setTimeout(() => { speed = 1000; play(); }, speed);
  }
  
  function doubleReverseSpeed() {
    stop();
    speed = 500; 
    prev();
    timer =  setTimeout(() => { speed = 1000; play(); }, speed);
  }

  document.getElementById("play").addEventListener("click", play);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("doubleSpeed").addEventListener("click", doubleSpeed);

docume
document.getElementById("reversePlay").addEventListener("click", reversePlay);
document.getElementById("doubleReverseSpeed").addEventListener("click", doubleReverseSpeed);


