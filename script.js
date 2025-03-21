document.addEventListener('DOMContentLoaded', () => {
  const page = document.getElementById('page');


  document.body.addEventListener('click', () => {
    page.classList.add('fade-out');
    setTimeout(() => {
      window.location.href = "next.html"; 
    }, 1000);
  });
});