const quoteElement = document.querySelector('.typing-quote');
if (quoteElement) {
  const fullText = quoteElement.textContent.trim();  // "Hi, I'm Ali" (بدون العلامات إذا بدك)
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