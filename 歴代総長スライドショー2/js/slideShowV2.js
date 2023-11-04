
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
