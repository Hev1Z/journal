<template>
    <div class="container">
        <b-card title="Сведения о заказчике:">
            <b-card-text>
                <h5>ФИО: {{ fullName }}</h5>
                <h5 v-if="legalEntity">Юридическое лицо</h5>
                <h5 v-else>Физическое лицо</h5>
                <h5>Адрес: {{ address }}</h5>
                <h5>Номер телефона: {{ phoneNumber }}</h5>
                <h5>Email: {{ email }}</h5>
                <h5>Экспертизы:</h5>
            </b-card-text>
        </b-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            legalEntity: false,
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