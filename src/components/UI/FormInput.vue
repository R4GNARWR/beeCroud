<template lang="">
  <div class="form-control__wrap">
    <input class="form-control"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled" 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)">
    <div class="form-control__errors" v-for="error of errors" :key="error.$uid">
      <div class="form-control__errors-item">{{ error.$message }}</div>
    </div>
  </div>

</template>

<script>
export default {
    name: 'FormInput',
    data() {
        return{

        }
    },
    props: {
        type: String,
        name: String,
        modelValue: String,
        disabled: Boolean,
        placeholder: String,
        errors: Array,

    },
    methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    },
    onChange(event) {
      this.$emit('change', event.target.value);
    },
  },
}
</script>
<style lang="">
    
</style>