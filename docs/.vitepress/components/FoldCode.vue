<script setup lang="ts">
import { ref } from 'vue'
let isCodeFolded = ref(true)
</script>


<template>
  <div class="fold-container">
    <button class="fold-btn close-btn" v-show="!isCodeFolded" @click="isCodeFolded = true">
      <span class="title">折疊程式碼</span><icon-mdi-arrow-up-drop-circle-outline />
    </button>
    <button class="fold-btn open-btn" v-show="isCodeFolded" @click="isCodeFolded = false">
      <span class="title">展開程式碼</span><icon-mdi-arrow-down-drop-circle-outline />
    </button>
    <Transition name="code-fade">
      <div class="fold-code"  v-if="!isCodeFolded">
        <slot />
      </div>
    </Transition>
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
    left: 0rem;
    z-index: 8;
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.5rem;
    color: #edaa0c;
    transition: all 0.2s;

    &:hover {
      opacity: 0.6;
    }

    span {
      margin-right: 0.5rem;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .svg-icon {
      width: 1.6rem;
      height: 1.6rem;
      color: #edaa0c;
    }
  }

  .line {
    height: 1px;
    width: 50%;
    background: #edaa0c;
  }

  .code-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .code-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .code-fade-enter-from,
  .code-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
</style>