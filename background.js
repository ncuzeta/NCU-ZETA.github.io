// background.js

/**
 * 設定固定背景圖片
 * @param {string} imagePath - 圖片路徑，例如 "111.png"
 */
function setBackground(imagePath) {
    const content = document.querySelector('.content');
    if (content) {
        content.style.background = `url("${imagePath}") no-repeat center center fixed`;
        content.style.backgroundSize = "cover";
    }
}
