<template>
    <div>
        <el-row type="flex" class="row-bg">
            <h2>用户购买行为分析</h2>
        </el-row>
        <el-row type="flex"  justify="center">
            <el-col :span="12">
             <Category></Category>
            </el-col>
            <el-col :span="12" >
                <City></City>
            </el-col>
        </el-row>
        <el-row :gutter="24">
             <Tables></Tables>
        </el-row>
    </div>
</template>

<script>
    import Tables from "./Tables";
    import City from "./City";
    import Brand from "./Brand";
    import Category from "./Category";

    export default {
        name: "Profile",
        components: {
            Category,
            Brand,
            Tables,
            City,

        }
    }
</script>

<style scoped>
    /*.row-bg {
        padding: 10px 0;
        background-color: #d5dbc0;
    }*/
</style>