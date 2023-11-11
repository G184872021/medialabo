// 画像の総数
const totalImages = 11;

// 現在の画像のインデックス
let currentIndex = 0;

// 前の画像に切り替える関数
function prev() {
  // インデックスをデクリメントし、0より小さくなった場合は最後の画像に戻る
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  // 画像を更新する関数を呼び出す
  updateImage();
}

// 次の画像に切り替える関数
function next() {
  // インデックスをインクリメントし、総数を超えた場合は最初の画像に戻る
  currentIndex = (currentIndex + 1) % totalImages;
  // 画像を更新する関数を呼び出す
  updateImage();
}

// 画像を更新する関数
function updateImage() {
  // メインの画像要素を取得
  const mainImage = document.querySelector('.main img');
  // サムネイルの選択状態を更新
  updateThumbnails();

  // メインの画像のsrc属性を現在のインデックスに対応する画像のsrcに変更
  mainImage.src = document.querySelector(`.thumbnails img[alt="${currentIndex + 1}"]`).src;
}

// サムネイルの選択状態を更新する関数
function updateThumbnails() {
  const thumbnails = document.querySelectorAll('.thumbnails img');
  // すべてのサムネイルから選択状態のクラスを削除
  thumbnails.forEach(thumbnail => thumbnail.classList.remove('selected'));
  // 現在のインデックスに対応するサムネイルに選択状態のクラスを追加
  thumbnails[currentIndex].classList.add('selected');
}

// 初期表示
updateImage();
