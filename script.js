document.addEventListener('DOMContentLoaded', function() {
  const completeBtn = document.getElementById('completeBtn');
  const completedMsg = document.getElementById('completedMsg');

  if (completeBtn && completedMsg) {
    completeBtn.addEventListener('click', function() {
      completeBtn.style.display = 'none';
      completedMsg.style.display = 'block';
    });
  }
});
