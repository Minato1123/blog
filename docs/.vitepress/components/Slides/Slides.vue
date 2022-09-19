<script setup lang="ts">
import slide1Url from './images/slide-1.jpeg'
import slide2Url from './images/slide-2.jpeg'
import slide3Url from './images/slide-3.jpeg'


const slides = ref([
  {
    imageUrl: slide1Url,
  },
  {
    imageUrl: slide2Url,
  },
  {
    imageUrl: slide3Url,
  },
])
const numOfSlides = computed(() => slides.value.length)
const currentSlideIndex = ref(0)

function handleNextSlide() {
  if (currentSlideIndex.value === numOfSlides.value - 1)
    currentSlideIndex.value = 0
  else currentSlideIndex.value += 1
}

function handlePreviousSlide() {
  if (currentSlideIndex.value === 0)
    currentSlideIndex.value = numOfSlides.value - 1
  else currentSlideIndex.value -= 1
}

let slideInterval
onMounted(() => {
  slideInterval = setInterval(handleNextSlide, 5000)
})
onBeforeUnmount(() => clearInterval(slideInterval))

watch(
  currentSlideIndex,
  () => {
    clearInterval(slideInterval)
    if(typeof window !== "undefiend") {
      slideInterval = setInterval(handleNextSlide, 5000)
    }
  },
)
</script>

<template>
  <div class="slides-block">
    <div class="slides">
      <img
        v-for="(slide, i) in slides"
        :key="`slide-${i}`"
        :src="slide.imageUrl"
        alt="ad"
      >
    </div>
    <div class="slide-btn left-btn" @click="handlePreviousSlide">
      <icon-ic-twotone-keyboard-arrow-left />
    </div>
    <div class="slide-btn right-btn" @click="handleNextSlide">
      <icon-ic-outline-chevron-right />
    </div>
    <div class="slide-pages">
      <div
        v-for="(slide, i) in slides" :key="`slide-${i}`"
        class="slide-page-point"
        :class="{
          active: i === currentSlideIndex,
        }"
        @click="currentSlideIndex = i"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.slides-block {
  width: 100%;
  padding-top: 41.6666666667%;
  position: relative;
  margin-bottom: 2rem;
  overflow: hidden;

  .slides {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate3d(calc(v-bind(currentSlideIndex) * -100%), 0, 0);
    transition: transform 0.5s ease-in-out;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .slide-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 5rem;
    height: 100%;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;

    .svg-icon {
      width: 4rem;
      height: 4rem;
    }

    &:hover {
      opacity: 1;
    }

    &.left-btn {
      left: 0;
    }

    &.right-btn {
      right: 0;
    }
  }

  .slide-pages {
    position: absolute;
    bottom: 3%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .slide-page-point {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      background-color: white;
      margin: 0 0.5rem;
      opacity: 0.6;
      cursor: pointer;
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);

      &.active {
        background-color: #F7D08A;
      }

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
