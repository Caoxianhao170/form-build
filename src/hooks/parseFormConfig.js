import { ref, onMounted } from 'vue';
const useParseFormCfg = (config, initValue) => {
  const formCfg = ref([]);
  const formData = ref({});
  onMounted(() => {
    config.forEach(item => {
      const {
        field,
        type = 'input',
        label = '',
        required = false,
        defaultValue = '',
        labelCol = {},
        wrapperCol = {},
        placeholder = '',
        controls = {},
        props = {},
        formItemProps = {},
      } = item;

      // 配置合并
      formCfg.value.push({
        type,
        field,
        formItemProps: {
          ...formItemProps,
          label,
          required,
          labelCol,
          wrapperCol
        },
        props: {
          ...props,
          defaultValue,
          placeholder,
        }
      });

      // 表单数据
      formData.value[field] = initValue[field] || defaultValue;
    });
  });
  return {
    formCfg,
    formData,
  };
};


export { useParseFormCfg };