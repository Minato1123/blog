<div class="intro-title">
  Hello, I am Carrie.
</div>

<div class="dog-img">
</div>
<div class="content">
  ↗ 這是我家狗狗很可愛給你看一下。
</div>
<div class="about-me-container">
  <div class="sub-title">
    About Me
  </div>
  <div class="content">
    Carrie, or Minato.<br>
    元智大學通訊四年級，想成為前端工程師。目前使用 Vue 的開發經驗大約一年。
  </div>
</div>
<div class="about-blog-container">
  <div class="sub-title">
    About Blog
  </div>
  <div class="content">
    從以前就養成做筆記的習慣，喜歡把學到的東西做成筆記寫下來，幫助記憶的同時也方便以後複習，所以決定將這些有關前端或其他程式的學習過程也整理成筆記，放進這個小小的部落格。<br>由於是自學拼湊的理解，有部分可能理解不全，有注意到的話會及時改正。
  </div>
</div>
<div class="about-blog-container">
  <div class="sub-title">
    About Side-Project
  </div>
  <div class="content">
    <div>
      帕恰購物｜Pochacco Online Store
    </div>
    <div >
      <a class="project-link" href="https://github.com/Minato1123/online-store" target="_blank">
        • GitHub
      </a>
      <a class="project-link" href="https://minato1123.github.io/online-store/" target="_blank">
        • Demo
      </a>
    </div>
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
    margin-top: 1.5rem;
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

  .project-link {
    display: inline-block;
    margin-top: 0.2rem;
  }


</style>