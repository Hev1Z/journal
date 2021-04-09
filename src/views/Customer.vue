<template>
    <div>
        <b-jumbotron
            header="Сведения о заказчиках или их представителях"
            class="text-center"
        >
            <router-link
                variant="primary"
                to="/customer/create"
                class="btn btn-primary"
                >Создать заказчика</router-link
            >
        </b-jumbotron>
        <div class="container">
            <b-card header-tag="header" title="Петров" class="">
                <b-card-text>potchta@mail.ru</b-card-text>
                <div>
                    <router-link
                        to="/customer/:id"
                        variant="primary"
                        class="btn btn-primary"
                        >Открыть</router-link
                    >

                    <router-link
                        style="margin-left:10px"
                        to="/customer/update/:id"
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