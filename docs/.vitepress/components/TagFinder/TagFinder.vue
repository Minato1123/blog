<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Tag } from './TagFinderData'
import { tags, data } from './TagFinderData'

const searchInput = ref<string>('')
const selectedTagList = ref<Tag[]>([])
const currentTagList = computed(() => {
  if (searchInput.value.trim() === '')
    return tags
  
  return tags.filter(t => t[0].includes(searchInput.value))
})

function clickTag(tag: Tag) {
  if (selectedTagList.value.includes(tag)) {
    const index = selectedTagList.value.findIndex(t => t === tag)
    selectedTagList.value.splice(index, 1)
    return
  }
  selectedTagList.value.push(tag)
}

function handleClearSelectedTags() {
  selectedTagList.value = []
}

const currentData = computed(() => {
  if (selectedTagList.value.length < 1)
    return data

  return data.filter(p => {
    const arr = p[2]
    const result = selectedTagList.value.map(s => arr.includes(s))

    if (result.includes(false))
      return false

    return true
  })
})
</script>

<template>
  <div class="container">
    <div class="tag-container">
      <div class="input">
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"></path></svg>
        <input v-model="searchInput" placeholder="搜尋 Tag ..." type="text">
        <button @click="handleClearSelectedTags" title="清除所選 Tags">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z"></path></svg>
        </button>
      </div>
      <div class="tags-block">
        <button @click="clickTag(tag[0])" v-for="(tag, i) in currentTagList" :key="`tag-${i}`" class="tag">
          <svg v-if="selectedTagList.includes(tag[0])" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.29 13.29a.996.996 0 0 1-1.41 0L5.71 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41l-7.58 7.59z"></path></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1zm1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg>
          {{ tag[0] }}<span class="tag-num">{{ tag[1] }}</span>
        </button>
      </div>
    </div>
    <div class="package-container">
      <div class="pack" v-for="(pack, i) in currentData" :key="`pack-${i}`">
        <div class="pack-name"><a target="_blank" :href="pack[1]">{{ pack[0] }}</a></div>
        <div class="tags">
          <div v-for="(t, j) in pack[2]" :key="`pack-tag-${j}`" class="tag">
            {{ t }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 100%;
  padding: 1rem 0;

  .tag-container {
    width: 100%;
    border: 0.1rem solid rgba(95, 172, 128, 1);
    border-radius: 1rem;
    padding: 1.5rem;

    .input {
      width: 100%;
      display: flex;
      align-items: center;

      .search-icon {
        color: rgba(95, 172, 128, 1);
        margin: 0 0.2rem;
      }

      input {
        flex-grow: 1;
        font-size: 1rem;
        padding: 0.2rem;
        border-bottom: 0.1rem solid rgba(95, 172, 128, 1);
      }

      button {
        padding: 0 0.5rem;
        transition: all 0.3s ease-in-out;
        
        &:hover {
          opacity: 0.5;
        }
      }
    }

    .tags-block {
      margin-top: 1rem;
      width: 100%;
      max-height: 12rem;
      overflow-y: scroll;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      padding: 0 0.5rem;

      .tag {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 1rem;

        .tag-num {
          color: rgba(95, 172, 128, 1);
          font-size: 0.5rem;
        }
      }
    }
  }

  .package-container {
    width: 100%;
    margin-top: 1rem;
    padding: 1.5rem;

    .pack {
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 0.1rem solid rgba(95, 172, 128, 0.5);

      .tags {
        margin-top: 0.5rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.3rem;

        .tag {
          font-size: 0.9rem;
          color: white;
          border-radius: 2rem;
          padding: 0.05rem 0.6rem;
          background-color: rgba(51, 65, 81, 0.35);
        }
      }
    }
  }
}


</style>