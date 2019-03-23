<template>
    <div id="tables">
        <el-row type="flex"  justify="center">
            <el-col :span="8">
                <Brand></Brand>
            </el-col>
            <el-col :span="8">
                <Product></Product>
            </el-col>
            <el-col :span="8">
                <Price></Price>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import Brand from './Brand';
    import Category from './Category';
    import Price from './Price';
    import Product from "./Product";

    /*嵌套4个图表展示*/
    export default {
        name: "Tables",
        components:{
            Product,
            Brand,
            Category,
            Price,
        }
    }
</script>

<style scoped>

</style>