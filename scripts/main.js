document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const shareChoice = document.getElementById('share-choice');
    const viewChoice = document.getElementById('view-choice');
    
    // 添加点击事件
    shareChoice.addEventListener('click', function() {
        window.location.href = 'share.html';
    });
    
    viewChoice.addEventListener('click', function() {
        window.location.href = 'view.html';
    });
    
    // 添加键盘快捷键支持
    document.addEventListener('keydown', function(e) {
        // 防止在输入框中触发快捷键
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            return;
        }
        
        if (e.key === '1' || e.key === 's' || e.key === 'S') {
            shareChoice.click();
        } else if (e.key === '2' || e.key === 'v' || e.key === 'V') {
            viewChoice.click();
        }
    });
    
    // 添加触摸支持
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // 向左滑动 - 阅读漫画
            viewChoice.click();
        }
        
        if (touchEndX > touchStartX + 50) {
            // 向右滑动 - 分享漫画
            shareChoice.click();
        }
    }
});
