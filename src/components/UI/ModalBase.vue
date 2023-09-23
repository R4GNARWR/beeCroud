<template lang="">
    <div class="modalWrap" v-show="modelValue">
        <div class="modal-inner" >
            <div class="modal-close" @click="closeModal(false)"></div>
            <slot></slot>
            <MainButton
            class-name="btn-primary"
            type="button"
            @click="closeModal(false)">Ок</MainButton>
        </div>
    </div>
</template>

<script>
import MainButton from './MainButton.vue';
export default {
    components: {
        MainButton,
    },
    props: {
        modelValue: Boolean,
    },
    methods : {
        closeModal(value) {
            this.$emit('update:modelValue', value)
        },
        include () {
            return [document.querySelector('#mainSection')]
        },
    }
}
</script>

<style lang="">
    
</style>