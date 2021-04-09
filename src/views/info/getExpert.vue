<template>
    <div class="container">
        <b-card title="Сведения об эксперте:">
            <b-card-text>
                <h5>ФИО: {{ fullName }}</h5>
                <h5>Должность: {{ position }}</h5>
                <h5>Образование: {{ education }}</h5>
                <h5>Опыт работы: {{ experience }}</h5>
                <h5>Адрес: {{ address }}</h5>
                <h5>Номер телефона: {{ phoneNumber }}</h5>
                <h5>Email: {{ email }}</h5>
                <h5>Информация об отпусках и больничных {{ vacationInfo }}:</h5>
            </b-card-text>
        </b-card>
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