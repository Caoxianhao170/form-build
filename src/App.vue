<script setup>
import { ref } from 'vue';
import FormRender from '@/components/Parser.vue';
console.log(window.$vue.config);

const config = ref([
  {
    field: 'name',
    label: '姓名',
    defaultValue: '',
    type: 'input',
    required: true,
    placeholder: '请输入姓名',
    // 表单项自定义属性
    props: {},
  },
  {
    field: 'age',
    label: '年龄',
    defaultValue: '18',
    type: 'input',
    required: true,
    placeholder: '请输入年龄',
    // 表单项自定义属性
    props: {},
  },
  {
    field: 'gender',
    label: '性别',
    defaultValue: 'male',
    type: 'select',
    required: true,
    placeholder: '请输入年龄',
    // 表单项自定义属性
    props: {
      options: [
        {
          label: '男',
          value: 'male',
        },
        {
          label: '女',
          value: 'female',
        },
      ]
    },
  },
  {
    field: 'valid',
    label: '是否有效',
    defaultValue: true,
    type: 'switch',
    required: true,
    // 表单项自定义属性
    props: {},
  },
])
</script>
<template>
  <FormRender :config="config"/>
</template>
