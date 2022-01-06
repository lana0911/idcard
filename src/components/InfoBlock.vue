<template lang="pug">
#InfoBlock
    span ava

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
    
    .avater {
        height: 50%;
        display: flex;
        align-content: center;
        justify-content: center;
    }
    .Info {
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


