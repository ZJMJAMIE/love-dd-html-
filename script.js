// 在 script.js 中添加以下 JavaScript 脚本

document.addEventListener('DOMContentLoaded', function () {
    // 获取按钮元素
    var joinButton = document.getElementById('joinButton');

    // 添加点击事件监听器
    joinButton.addEventListener('click', function () {
        // 弹出欢迎消息
        alert('欢迎加入爱坤足球社区！');
    });

    // 添加按钮显示动画
    joinButton.classList.add('button-enter-active');
});