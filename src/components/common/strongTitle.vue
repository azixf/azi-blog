<template>
  <section class="strong-title flex align-center">{{ title }}</section>
</template>

<script lang="ts">
export default {
  name: 'StrongTitle',
}
</script>

<script lang="ts" setup>
interface PropsType {
  title: string
  bgColor?: string
  labelColor?: string
}

const props = withDefaults(defineProps<PropsType>(), {
  bgColor: '#eee',
  labelColor: '',
})

const tagColor = computed(() => {
  return props.labelColor || 'var(--el-color-primary)'
})
</script>

<style lang="scss" scoped>
.strong-title {
  padding: 12px;
  font-weight: 600;
  font-size: 16px;
  background-color: #eee;
  border-radius: 8px;
  margin: 8px 0;
  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 20px;
    background-color: v-bind(tagColor);
    margin-right: 12px;
  }
}
</style>
