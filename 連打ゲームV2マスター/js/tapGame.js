// タイマー設定
let countTimer = 13; // 3 + 10
// タップ回数カウンター
let counter = 0;
// タイマーエレメント
const countDown = document.getElementById("countDown");
// タップ可否設定（フラグ）
let tapFlag = false;
// スコア表示エレメント
const score = document.getElementById("score");
// メイン画面エレメント
const main = document.getElementById("main");
const startButton = document.getElementById("startButton");

// 「Start」ボタン押下時の処理
function startGame() {
  // ボタンの非表示
  rankButton.style.display = "none";
  startButton.style.display = "none";
  // タップカウンターリセット
  counter = 0;
  let score = document.getElementById('score');
  score.textContent = "0";

  // タイマーリセット(カウントダウン＋10秒)
  countTimer = 13;
  // タイマーを起動
  countTime(countTimer);
}

// タイマー処理
function countTime(time) {
  if (time > 0){
    if (time >= 11) {
      tapFlag = false;
      countDown.textContent = time-10;
    } else if (time == 10) {
      tapFlag = true;
      countDown.textContent = "スタート！";
    } else {
      tapFlag = true;
      countDown.textContent = time;
    }
    time -= 1;
    // １秒後にcountTime()を呼び出す
    setTimeout(countTime, 1000, time);
  } else {
    tapFlag = false;
    countDown.textContent = "タイムアップ！";
    imputName(counter);
    // ボタンの表示
    rankButton.style.display = "block";
    startButton.style.display = "block";
  }
}

// タップ数カウント
function tapCount() {
  if (tapFlag) { 
    counter += 1;
	// タップ数を表示
    counter += 1;
    score.textContent = counter;
  }
}

function imputName(count){
  let name = window.prompt("名前を入力してください", "");
  if (name == null || name == "") {
    countDown.textContent = "保存がキャンセルされました";
  } else {
    saveScore(name, count);
    countDown.textContent = name + "さんのスコアは" + count + "連打でした";
  }
}

const APP_KEY = 自分のアプリケーションキー;
const CLIENT_KEY = 自分のクライアントキー;
const ncmb = new NCMB(APP_KEY, CLIENT_KEY);

// ニフクラデータストアへのデータの保存
async function saveScore (name, score) {
  // 保存先を作成


  // 名前とスコアをset



  // データストアに保存


}

function toRanking() {
    // データ取得
    checkRanking();
    // ランキング部を表示・main部を非表示
    

}


async function checkRanking() {
// データストアを指定


// scoreの降順でデータ5件を取得するように設定する



// 取得したデータ(scoreとname）を元に、表に値を入れる
   const table = document.getElementById("rankingTable");
    for (i=0; i<results.length; i++) {
        // 名前の設定
        let name = table.rows[i].cells[1];
        name.innerHTML = results[i].name + "さん";
        // スコアの設定
        let score = table.rows[i].cells[2];
        score.innerHTML = results[i].score + "連打";
    }   
}
