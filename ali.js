const quoteElement = document.querySelector('.typing-quote');
if (quoteElement) {
  const fullText = quoteElement.textContent.trim();  // 
  let index = fullText.length;
  let isDeleting = true;

  function animate() {
    if (isDeleting) {
      quoteElement.textContent = fullText.substring(0, index);
      index--;
      if (index < 0) {
        index = 0;
        isDeleting = false;
      }
    } else {
      quoteElement.textContent = fullText.substring(0, index);
      index++;
      if (index > fullText.length) {
        index = fullText.length;
        isDeleting = true;
      }
    }

    const speed = isDeleting ? 40 : 80;
    setTimeout(animate, speed);
  }

  // نبدأ بعد نص ثانية تقريبًا
  setTimeout(animate, 800);
}
const text = document.querySelector('.marquee-text');
let pos = -text.offsetWidth; // ا

function moveMarquee() {
    pos += 0.3; //
    if (pos >100) {
        pos = -text.offsetWidth; // 
    }
    text.style.left = pos + '%';
    requestAnimationFrame(moveMarquee);
}

moveMarquee();
