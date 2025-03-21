document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('page');


  document.body.addEventListener('click', () => {
    page.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = "next.html"; 
    }, 1000);
  });
});

window.addEventListener('pageshow', function (event) {
  // event.persisted 為 true 表示頁面是從快取中讀取
  if (event.persisted) {
    var page = document.getElementById('page');
    if (page) {
      page.classList.remove('fade-out');
    }
  }
});