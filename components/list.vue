<template>
  <div>
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </div>
</template>

<script>
export default {
  name: 'List', 
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>