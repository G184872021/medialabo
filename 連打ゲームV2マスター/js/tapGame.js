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
// 「戻る」ボタン押下時の処理
function toMain() {
  // メイン部を表示・ランキング部を非表示
  main.style.display = "block";
  document.getElementById("ranking").style.display = "none";
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

const APP_KEY = 2215+"e4d0626077d7bdc0c76165d448ea31fe977716f6bc1cc4ac3a7667d7cbe1";
const CLIENT_KEY = 991+"afcbdb763e43d767985480becd26f70de6539f088baa70ff9714653b65e9a";
const ncmb = new NCMB(APP_KEY, CLIENT_KEY);

// ニフクラデータストアへのデータの保存
async function saveScore (name, score) {
  // 保存先を作成
  const ScoreClass = ncmb.DataStore("Score");
  const scoreData = new ScoreClass();


  // 名前とスコアをset
  scoreData.set("name", name);
  scoreData.set("score", score);


  // データストアに保存
  try {
    await scoreData.save();
    console.log("スコアが保存されました");
  } catch (error) {
    console.error("スコアの保存中にエラーが発生しました:", error);
  }

}

function toRanking() {
    // データ取得
    checkRanking();
    // ランキング部を表示・main部を非表示
    main.style.display = "none";
  document.getElementById("ranking").style.display = "block";

}


async function checkRanking() {
// データストアを指定
const ScoreClass = ncmb.DataStore("Score");

// scoreの降順でデータ5件を取得するように設定する
const results = await ScoreClass.order("score", true).limit(5).fetchAll();


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