document.addEventListener('DOMContentLoaded', () => {
  // 1. 先取得 page 元素
  const page = document.getElementById('page');
  
  // 2. 在 DOM 載入後，再綁定點擊事件
  document.body.addEventListener('click', () => {
    // 確認 page 存在才執行
    if (page) {
      page.classList.add('fade-out');
    }
    setTimeout(() => {
      window.location.href = "next.html";
    }, 1000);
  });
});

// 3. 在返回上一頁時，移除 fade-out (無論是否快取)
window.addEventListener('pageshow', (event) => {
  const page = document.getElementById('page');
  if (page) {
    page.classList.remove('fade-out');
  }
});