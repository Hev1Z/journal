<template>
    <div class="container">
        <b-card title="Сведения об экспертизе:">
            <b-card-text>
                <h5>Дата получения материалов: {{ dateOfMaterial }}</h5>
                <h5>Дата начала экспертизы: {{ startDate }}</h5>
                <h5>Дата окончания экспертизы: {{ endDate }}</h5>
                <h5>Дата выдачи заключения: {{ detentionDate }}</h5>
                <h5>Стоимост экспертизы (руб.): {{ costExpertise }}</h5>
                <h5>Вид экспертизы: {{ typeExpertise }}</h5>
                <h5>Колличество исследуемых объектов: {{ objConclusion }}</h5>
                <h5>Виды выводов: {{ typeConclusion }}:</h5>
                <h5>Заключение экспетра: {{ textConclusion }}:</h5>
                <h5>Фото таблицы: {{ photoTable }}:</h5>
                <b-img :click="openImg()" :src="photoTable"></b-img>
            </b-card-text>
        </b-card>
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
    },
    methods: {
        openImg() {
            console.log(1);
        }
    }
};
</script>

<style>
</style>