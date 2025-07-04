const sentences = [

  "سلاممم :) همین‌طور بزن رو کادر، از طرف کیارش یه پیام کوچیک دارم برات 💬",
  "فقط می‌خواست بگه خیلی خوشحاله که باهات آشنا شده 🌟",
  "و اینکه دوست داره این آشنایی قشنگ، ادامه‌دار باشه ❤️",
  " عه ، همین الان ی خبر رسید دستم ، انگار خودشم میخواد باهات حرف بزنه! گوشیو میدم بهشششش ",
  "سلام الهه :) خوبی؟ اینم از سورپرایز من ، امیدوارم ازش خوشت اومده باشه❤️ ",
  "امیدوارم بتونیم تایمای خوبی کنار هم داشته باشیم ، البته شرطی که باز بی خبر آف نشی سکتمون بدی 😂 ",
  "من دل پاکت ، تلاشت برای پیشرفتت ، انرژی خوبه وقت گذروندن کنارت و... ات رو توی همین مدت کم دیدم ، امیدوارم بتونیم موفقیتامونو کنار هم جشن بگیریم دختر",
  "❤️مراقب خودت باش ، فعلاااااا❤️"

];

  let clickCount = 0;
  
  function showNextSentence() {
    const sentenceElement = document.getElementById("sentence");
  
    if (clickCount < 25) {
      sentenceElement.textContent = sentences[clickCount];
      sentenceElement.classList.remove("animated-text");
      // Force reflow to restart animation
      void sentenceElement.offsetWidth;
      sentenceElement.classList.add("animated-text");
      clickCount++;
    } else {
  
      sentenceElement.textContent = "پیام‌ها تمام شد!";
    }
  }
  