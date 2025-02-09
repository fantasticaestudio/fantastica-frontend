<template>
  <a :href="link" class="group flex items-center gap-[0.5em]">
    <span class="text-orange text-[2em] opacity-0 -ml-[1.6em] mr-[0.2em] transition-all group-hover:opacity-100 group-hover:m-0 " aria-hidden="true">
      <IconArrow />
    </span>
    <span>{{ text }}</span>
  </a>
</template>

<script lang="ts" setup>
defineProps<{ link: string, text: string }>()
</script>
