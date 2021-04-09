<template>
    <div class="container">
        <b-form-group
            id="fieldset-1"
            label="Дата получения материалов:"
            label-for="input-1"
        >
            <b-form-input
                id="input-1"
                v-model="dateOfMaterial"
                type="date"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-2"
            label="Дата начала экспертизы:"
            label-for="input-2"
        >
            <b-form-input
                id="input-2"
                v-model="startDate"
                type="date"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-3"
            label="Дата окончания экспертизы:"
            label-for="input-3"
        >
            <b-form-input
                id="input-3"
                v-model="endDate"
                type="date"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-4"
            label="Дата выдачи заключения:"
            label-for="input-4"
        >
            <b-form-input
                id="input-4"
                v-model="detentionDate"
                type="date"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-5"
            label="Стоимост экспертизы (руб.):"
            label-for="input-5"
        >
            <b-form-input
                id="input-5"
                v-model="costExpertise"
                type="number"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-6"
            label="Вид экспертизы:"
            label-for="input-6"
        >
            <b-form-input
                id="input-6"
                v-model="typeExpertise"
                type="text"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-7"
            label="Колличество исследуемых объектов:"
            label-for="input-7"
        >
            <b-form-input
                id="input-7"
                type="number"
                v-model="objConclusion"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group id="fieldset-8" label="Виды выводов:" label-for="input-8">
            <b-form-input
                id="input-8"
                v-model="typeConclusion"
                type="text"
                :state="state"
                trim
            ></b-form-input>
        </b-form-group>

        <b-form-group
            id="fieldset-9"
            label="Заключение экспетра:"
            label-for="input-9"
        >
            <b-form-textarea
                id="input-9"
                type="text"
                v-model="textConclusion"
                :state="state"
                trim
            ></b-form-textarea>
        </b-form-group>

        <b-form-group
            id="fieldset-10"
            label="Фото табдицы:"
            label-for="input-10"
        >
            <b-form-file
                id="input-10"
                v-model="photoTable"
                :state="Boolean(photoTable)"
                placeholder="Выберите файл"
            ></b-form-file>
        </b-form-group>

        <b-button variant="primary">Создать</b-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dateOfMaterial: "",
            startDate: "",
            endDate: "",
            detentionDate: "",
            costExpertise: "",
            typeExpertise: "",
            objConclusion: "",
            typeConclusion: "",
            textConclusion: "",
            photoTable: ""
        };
    }
};
</script>
<style>
</style>