
<template>
        <section id="mainSection">
            <div class="main__background-img">
                <img src="../assets/img/background-woman.png" alt="">
            </div>
            <div class="container">
                <div class="row">
                    <div class="main__content col-lg-6 col-12 ms-auto">
                        <img src="../assets/img/logo.svg" alt="">
                        <div class="main__content-highlight-text">
                            Уважаемые любители моды и стильных проектов! Мы рады сообщить вам, что в скором времени наша краудфандинговая платформа для фешен-проектов, FashionStart, будет запущена!
                        </div>
                        <div class="main__content-text">
                            FashionStart - поддержка молодых дизайнеров и производителей одежды. Мы помогаем получить финансовую поддержку, привлечь инвесторов и расширить бизнес. Наши услуги доступны для всех уровней опыта. <br>
                            <br>
                            Следите за новостями и готовьте проекты - скоро начнем работу! Оставьте свою почту, чтобы быть в курсе.
                        </div>
                        <form action="" class="main__form" @submit.prevent="submitForm">
                            <div class="main__form-input">
                                <FormInput type="text" name="email" placeholder="E-mail" v-model="emailInput" :errors="v$.emailInput.$errors"></FormInput>

                                <MainButton class-name="btn-primary" type="submit">Отправить</MainButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            
        </section>
        <ModalBase class="modal-result" v-model="showResultModal">
            <div class="modal-result__label">
                Благодарим за ваш интерес к платформе
            </div>
            <div class="modal-result__text">
                Ваша заявка отправлена
            </div>
        </ModalBase>
</template>

<script>
import MainButton from "../components/UI/MainButton.vue"
import FormInput from '../components/UI/FormInput.vue'
import ModalBase from '../components/UI/ModalBase.vue'

import { useVuelidate } from '@vuelidate/core'
import { helpers, required, email } from '@vuelidate/validators'

export default {
    components: {
        MainButton,
        FormInput,
        ModalBase,
    },

    data() {
        return{
            emailInput: '',
            showResultModal: true,
        }
    },
    setup () {
        return { v$: useVuelidate() }
    },
    validations() {
        return {
            emailInput: {
                required: helpers.withMessage("Поле должно быть заполнено", required),
                email: helpers.withMessage("Неправильный формат почты", email),
            },
        };
    },
    methods: {
        async submitForm () {
            const isFormCorrect = await this.v$.$validate()
            // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
            if (isFormCorrect) {

                this.showResultModal = !this.showResultModal;
                return
            } 
            // actually submit form
        }
    },


}
</script>


<style scoped>

</style>
