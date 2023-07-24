// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b=document.querySelector('#kaito');
b.addEventListener('click',hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i=document.querySelector('input[name="seisu"]');
  let yoso=i.value;

  let span_kaisu=document.querySelector('span#kaisu');
  span_kaisu.textContent=kaisu+1;

  let span_answer=document.querySelector('span#answer');
  span_answer.textContent=yoso;

  let p_result=document.querySelector('p#result');
  
  // 課題3-1: 正解判定する
  console.log(kaisu+1+"回目の予想："+yoso);

  // kotae と yoso が一致するかどうか調べて結果を出力
if(kaisu>=3){
  p_result.textContent="答えは"+kotae+"でした。すでにゲームは終わっています。";
}
else if (yoso==kotae){
  p_result.textContent="正解です。おめでとう！";
}
else if (kaisu==2){
  p_result.textContent="まちがい。残念でした答えは"+kotae+"でした。";
}
else if (yoso<kotae){
  p_result.textContent="まちがい。答えはもっと大きいです。";
}
else {
  p_result.textContent="まちがい。答えはもっと小さいです。";
}
  // 課題3-1における出力先はコンソール
  kaisu=kaisu+1;
}