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
}

function prev() {
    let old = count;
    count--;
    count = (19 + count) % 19;
    url = makeURL(count);
    main.setAttribute("src", url);
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
let thumbnailsElement = document.querySelector("div.thumbnails");

let thumbnailsImges = thumbnailsElement.children;
for(let i=0;i<thumbnailsImges.length;i++){
    thumbnailsImges[i].style.opacity="1.0";
}