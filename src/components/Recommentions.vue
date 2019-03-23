<template>
    <div>
        <el-row type="flex" >
            <h2>用户个性化推荐</h2>
        </el-row>
        <el-row type="flex" justify="20">
            <el-col :span="12">
                <img src="../assets/logo.png"/>
                <el-row type="flex"  class="row-bg3" justify="center">
                    <h3>性别：</h3>
                </el-row>
            </el-col>

            <el-col :span="18">
                <a-carousel autoplay>
                    <div>  </div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </a-carousel>
            </el-col>
        </el-row>

    </div>
</template>

<script>


    export default {
        name: "Recommentions",
        components:{


        }
    }
</script>

<style scoped>
    /* For demo */
    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 450px;
   /* //    line-height: 160px;*/
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
</style>