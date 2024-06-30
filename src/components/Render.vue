<!-- 渲染器主要职责：将不同的类型的表单项进行渲染 和   -->

<template>
	<a-form :layout="props.layout">
		<a-form-item v-for="(schemaItem, index) in props.schema" :key="index" v-bind=schemaItem.formItemProps>
			<component
				:is="$blockSuites[schemaItem.type].material"
				v-model="formData[schemaItem.field]"
				v-bind="schemaItem.props"
			/>
		</a-form-item>
	</a-form>
</template>

<script setup>
import { Form } from 'ant-design-vue';
const props = defineProps({
	// 表单项配置
	schema:{ type: Object, default: () => ({}) },
	// 表单布局
	layout: { type: String, default: 'horizontal' },
	formData: { type: Object, default: () => ({})},
});
</script>