<template>
    <div>
        <div>
            <Shot v-if="readyToSnap"></Shot>
            <User v-if="readyToUser"></User>
        </div>
    </div>
</template>

<script>
    import User from "./User";
    import Shot from "./Shot"

    export default {
        name: "Base",
        components: {
            Shot,
            User
        },
        data () {
            return {

            }
        },
        computed: {
            readyToSnap() {
                let i = this.$store.getters.showStep;
                if (i == 1) {
                    console.log(i);
                    return true;
                } else {
                    return false;
                }
            },
            readyToUser() {
                let i = this.$store.getters.showStep;
                if (i == 2) {
                    return true;
                } else {
                    return false;
                }
            },
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>