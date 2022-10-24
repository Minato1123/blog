<script setup lang="ts">
let isCodeFolded = ref(false)
</script>


<template>
  <div class="fold-container">
    <button class="fold-btn close-btn" v-show="!isCodeFolded" @click="isCodeFolded = true">
      <span>折疊程式碼</span><icon-mdi-arrow-up-drop-circle-outline />
    </button>
    <button class="fold-btn open-btn" v-show="isCodeFolded" @click="isCodeFolded = false">
      <span>展開程式碼</span><icon-mdi-arrow-down-drop-circle-outline />
    </button>
    <div class="fold-code" v-show="!isCodeFolded">
      <slot />
    </div>
  </div>
</template>


<style scoped lang="scss">
  .fold-container {
    position: relative;
    margin-top: 3rem;
  }

  .fold-btn {
    position: absolute;
    top: -3rem;
    right: 0rem;
    z-index: 100;
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.5rem;
    color: #ad2f09;

    span {
      margin-right: 0.5rem;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .svg-icon {
      width: 2rem;
      height: 2rem;
      color: #ad2f09;
    }
  }

</style>