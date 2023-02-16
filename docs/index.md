<div class="intro-title">
  Hello, I am Carrie.
</div>

<div class="dog-img">
</div>
<div class="content">
  這是我家狗狗很可愛給你看一下。
</div>
<div class="about-me-container">
  <div class="sub-title">
    About Me
  </div>
  <div class="content">
    我是 Carrie / Minato。<br>
    目前就讀於元智大學，接觸前端網頁後決定往這條路繼續走下去的平凡快畢業焦慮大學生。
  </div>
</div>
<div class="about-blog-container">
  <div class="sub-title">
    About Blog
  </div>
  <div class="content">
    從以前就養成做筆記的習慣，喜歡把學到的東西做成筆記寫下來，幫助記憶的同時也方便以後複習，所以決定將這些有關前端或其他程式的學習過程也整理成筆記，放進這個小小的部落格。
  </div>
</div>

<style scoped> 
  @import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

  .intro-title {
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Kalam', cursive;
  }

  .dog-img {
    margin-top: 1.2rem;
    background-image: url(./.vitepress/images/dogdog.jpg);
    background-position: center;
    background-size: 200%;
    border-radius: 10rem;
    width: clamp(12rem, 50%, 18rem);
    padding-top: clamp(12rem, 50%, 18rem);
    border: 1px solid rgba(0, 0, 0, 1);
  }

  .about-me-container, .about-blog-container {
    margin-top: 2rem;
  }

  .sub-title {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Kalam', cursive;
  }

  .content {
    text-indent : 1rem;
    margin-top: 1rem;
  }


</style>