<template>
    <div class="container">
        <b-form-group id="fieldset-1" label="Введите ФИО:" label-for="input-1">
            <b-form-input
                id="input-1"
                v-model="fullName"
                type="text"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-2" label-for="input-2">
            <b-form-checkbox
                id="input-2"
                v-model="position"
                type="text"
                value="true"
                unchecked-value="false"
                >Юридическое лицо</b-form-checkbox
            >
        </b-form-group>

        <b-form-group id="fieldset-3" label="Адрес:" label-for="input-3">
            <b-form-input
                id="input-3"
                v-model="address"
                type="text"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-4"
            label="Ввеедие нормер телефона:"
            label-for="input-4"
        >
            <b-form-input
                id="input-4"
                type="tel"
                v-model="phoneNumber"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-5"
            label="Ввеедие email:"
            label-for="input-5"
        >
            <b-form-input
                id="input-5"
                v-model="email"
                type="email"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-button variant="primary">Создать</b-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            legalEntity: "",
            fullName: "",
            address: "",
            phoneNumber: "",
            email: ""
        };
    }
};
</script>
<style>
</style>