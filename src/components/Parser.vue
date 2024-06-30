<template>
	<Render :schema="formCfg" :formData="formData"/>
</template>

<script setup>
import { useParseFormCfg } from '@/hooks/parseFormConfig.js'
import Render from './Render.vue';

// 定义属性
const props = defineProps({
	config: {
    type: Object,
    required: true,
  },
	initValue: {
    type: Object,
		default: () => ({}),
	}
});

// 定义事件
const emits = defineEmits(['validate', 'update']);

const { formCfg, formData } = useParseFormCfg(props.config, props.initValue);

console.log(formData.value);



</script>

<style scoped>

</style>