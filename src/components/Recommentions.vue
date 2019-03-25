<template>
    <div>
        <el-row type="flex" >
            <h2>用户个性化推荐</h2>
        </el-row>
        <el-row type="flex" justify="space-around" align="center">
            <el-col :span="12">
                <img width="80%" height="60%" :src="this.$store.getters.showImg"/>
                <el-row type="flex"  class="row-bg3" justify="center">
                    <h3>性别：{{gender}}</h3>
                </el-row>
            </el-col>

            <el-col :span="18">
                <a-carousel autoplay>
                    <div></div>
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

        },

        data(){
            return {
                gender:" ",
                url:" "
            }
        },


        mounted() {
            this.getGender();
            this.getImg();
        },

        methods:{
            getImg(){

            },
            getGender() {
                console.log("图片的"+this.$store.getters.showImg);
                this.$axios.get('https://haoxipeng.chinacloudapp.cn/scrm-1.0/customer/selectById',
                    {
                        params: {
                            user_id: "A1T7EHCMZ92TKC"
                        }
                    }, {retry: 4, retryDelay: 1000})
                    .then(response => {
                        console.log(response.data.customer.gender);
                       if(response.data.customer.gender==1){
                           this.gender="男";
                       }else {
                           this.gender="女";
                       }
                    })
            }



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