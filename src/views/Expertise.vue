<template>
    <div>
        <b-jumbotron
            header="Сведения о полученных постановлениях о назначении экспертизы"
            class="text-center"
        >
            <router-link
                variant="primary"
                to="/expertise/create"
                class="btn btn-primary"
                >Создать постановление</router-link
            >
        </b-jumbotron>
        <div class="container">
            <b-card
                header-tag="header"
                title="Трасологическая экспертиза"
                class=""
            >
                <b-card-text>дата начала и дата конца</b-card-text>
                <div>
                    <router-link
                        to="/expertise/{id}"
                        variant="primary"
                        class="btn btn-primary"
                        >Открыть</router-link
                    >

                    <router-link
                        style="margin-left:10px"
                        to="/expertise/update/{id}"
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
