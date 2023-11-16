
let count = 0;
let url;
const main = document.querySelector("div>img");
const thumb = document.querySelector("div.thumbnails");
function next() {
    let old = count;
    count++;
    count = count % 19;
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
    let n;
    num++;
    if (num < 10) {
        n = "0" + num;
    } else {
        n = num;
    }
    return head + n + tail;
}


