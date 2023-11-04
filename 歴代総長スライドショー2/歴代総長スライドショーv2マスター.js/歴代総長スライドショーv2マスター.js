let count=1;

function prev(){
    count--;
    if(count<1){
        count=19;
    }

let mainElement=document.querySelector("div.main>img");
let URL=(count<10)?
"https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg":
"https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
mainElement.setAttribute('src',URL);
updateThumbnails();
}
function next(){
    count++;
    if(count>19){
        count=1;
    }
    let mainElement=document.querySelector("div.main>img");
    let URL=(count<10)?
    "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg":
    "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
    mainElement.setAttribute('src',URL);
    updateThumbnails();
}
function changeImge(index){
    count=index;
    let mainElement=document.querySelector("div.main>img");
    let URL=(count<10)?
    "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg":
    "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
    mainElement.setAttribute('src',URL);
    updateThumbnails();
}
function updateThumbnails(){
    let thumbnails=document.querySelectorAll(".thumbnails img");
    for(let i=0;i<thumbnails.length;i++){
        thumbnails[i].classList.remove("selected");

    }
    thumbnails[count-1].classList.add("selected");
}

/*

const photos=[
   
    "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01~09.jpg",
    "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_10~20.jpg"
];
var num=0;
function next() {
    
    //console.log(p.src);
    const p=document.getElementById("photo");
    num++;
    if(num >= photos.length){
        num = 0;
    }
    p.src = photos[num];

}
*/