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
  startButton.style.display = "none";


  // タップカウンターのリセットと表示



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

    } else if (time == 10) {
      tapFlag = true;

    } else {
      tapFlag = true;

    }
    time -= 1;
    // １秒後にtimeを引数にしてcountTime()を呼び出す
    setTimeout(countTime, 1000, time);
  } else {
  // 時間切れの処理
    tapFlag = false;
    countDown.textContent = "タイムアップ！";
    // ボタンの表示
    startButton.style.display = "block";
    
  }
}

// タップ数カウント
function tapCount() {
  if (tapFlag) { 
    counter += 1;
	// タップ数を表示
	
	
  }
}
