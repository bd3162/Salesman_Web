<template>
    <div id="user">
        <!--一个用户需要展示的信息 推荐+图表-->
        <Recomm></Recomm>
        <Profile></Profile>

    </div>
</template>

<script>

    import Recommentions from "./Recommentions";

    import Profile from "./Profile";

    export default {
        name: "User",
        components: {
            Profile,
            Recomm: Recommentions,
        }
    }
</script>


<style scoped>

</style>