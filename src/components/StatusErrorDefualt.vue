<template>
    <div class="errors_center">
        <div class="errors__code">{{ code }}</div>
        <div class="errors__message" v-html="title"></div>
    </div>
</template>
<script>
export default {
    components: {},
    props: {
        code: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        }
    }
};
</script>
<style lang="scss">
.errors {
    &_center {
        width: 100vw;
        height: calc(100vh - 56px);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__code {
        font-size: 26px;
        text-align: center;
        padding: 0 15px;
        border-right: 2px solid #636b6faa;
        color: #636b6f;

        font: 400 4rem Roboto;
    }

    &__message {
        padding: 10px;
        color: #636b6f;

        font: 300 1.3rem Roboto;
    }
}
</style>