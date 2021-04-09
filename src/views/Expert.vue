<template>
    <div>
        <b-jumbotron header="Сведения об экспертах" class="text-center">
            <router-link
                variant="primary"
                to="/expert/create"
                class="btn btn-primary"
                >Создать эксперта</router-link
            >
        </b-jumbotron>
        <div class="container">
            <b-card header-tag="header" title="Хомяков" class="">
                <b-card-text>Трасологическая экспертиза</b-card-text>
                <div>
                    <router-link
                        to="/expert/{id}"
                        variant="primary"
                        class="btn btn-primary"
                        >Открыть</router-link
                    >

                    <router-link
                        style="margin-left:10px"
                        to="/expert/update/{id}"
                        variant="primary"
                        class="btn btn-primary"
                        >Изменить</router-link
                    >
                </div>
            </b-card>
        </div>
    </div>
</template>


<script>
</script>

<style>
</style>