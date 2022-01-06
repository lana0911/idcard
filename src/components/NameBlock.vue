<template lang="pug">
.block
    // .avater
    .Info
        .chin 張黛妤
            .eng Lana Chang
        .decorate
        .work Front-End Enginner

    .link
        i.icon-github
        i.icon-mail2
        i.icon-display
        i.icon-location

</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
.block {
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: -1;
    .avater {
        z-index: 5;
        position: absolute;
        top: -20px;
        right: 0;
        height: 50%;
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        background-color: aqua;
        // background-image: url('../assets/my.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .Info {
        position: absolute;
        bottom: 0;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
            width: 100%;
            height: 30%;
            display: flex;
            align-items: center;
            flex-direction: column;
        }
        .chin {
            height: 40%;
            font-size: 1em;
            margin-top: .5rem
        }
        .eng {
            height: 10%;
            font-size: .5em
        }
        .decorate {
            height: 10%;
            width: 70%;
            font-size: .3em;
            border-bottom: 2px solid #ff11cc;
            margin: .5rem 0
        }
        .work {
            margin-top: 1rem;
            font-size: .1em;
        }
    }
    .link {
        position: absolute;
        bottom: 0;
        height: 10%;
        display: flex;
        font-size: .5em;
        justify-content: center;
        align-items: center;
        i {
            margin: 0 .5rem
        }
    }
}
</style>


