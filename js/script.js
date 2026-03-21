// script.js
console.log("網頁載入成功囉！");

// 讓你的名字點擊時變個顏色或是彈出視窗
const title = document.querySelector('.name-box');
title.addEventListener('click', () => {
    alert('歡迎來到 Kodi 的秘密基地！(〃∀〃)');
});