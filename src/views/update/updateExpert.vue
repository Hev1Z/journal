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

        <b-form-group
            id="fieldset-2"
            label="Ваша должность:"
            label-for="input-2"
        >
            <b-form-input
                id="input-2"
                v-model="position"
                type="text"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-3" label="Оброзование:" label-for="input-3">
            <b-form-input
                id="input-3"
                v-model="education"
                type="text"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-4" label="Опыт работы:" label-for="input-4">
            <b-form-input
                id="input-4"
                v-model="experience"
                type="number"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-5"
            label="Виды экспертиз:"
            label-for="input-5"
        >
            <b-form-input
                id="input-5"
                v-model="expertises"
                type="text"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-6" label="Адрес:" label-for="input-6">
            <b-form-input
                id="input-6"
                v-model="address"
                type="text"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-7"
            label="Ввеедие нормер телефона:"
            label-for="input-7"
        >
            <b-form-input
                id="input-7"
                type="tel"
                v-model="phoneNumber"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-8"
            label="Ввеедие email:"
            label-for="input-8"
        >
            <b-form-input
                id="input-8"
                v-model="email"
                type="email"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-9"
            label="Информация об отпуске и больничных:"
            label-for="input-9"
        >
            <b-form-input
                id="input-9"
                type="text"
                v-model="vacationInfo"
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
            fullName: "",
            position: "",
            education: "",
            experience: "",
            expertises: "",
            address: "",
            phoneNumber: "",
            email: "",
            vacationInfo: ""
        };
    }
};
</script>

<style>
</style>