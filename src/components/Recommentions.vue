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

          <!--  <el-col :span="6"  >
                <el-card :body-style="{ padding: '0px' }">
                    <img v-for="item in objectsOne" :src="item.imUrl" class="image"/>
                    &lt;!&ndash;<div style="padding: 14px;">&ndash;&gt;
                        &lt;!&ndash;<span class="show">{{this.objectsOne[0].title}}</span>&ndash;&gt;
                        &lt;!&ndash;<div class="bottom clearfix">&ndash;&gt;
                            &lt;!&ndash;<time class="time">{{this.objectsOne[0].price }}</time>&ndash;&gt;
                        &lt;!&ndash;</div>&ndash;&gt;
                    &lt;!&ndash;</div>&ndash;&gt;
                    &lt;!&ndash;<img>&ndash;&gt;
                </el-card>
            </el-col>-->

            <el-col :span="18">

                <a-carousel autoplay>
                    <div >
                        <el-row >
                            <el-col :span="6" v-for="(object,o,index) in objectsOne" :key="o" >
                                <el-card :body-style="{ padding: '0px' }">
                                    <img :src="object.imUrl" class="image" width="100%" height="80%">
                                    <div style="padding: 14px;">
                                        <span class="show">{{object.title}}</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{object.price }}</time>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                    <div >
                        <el-row >
                            <el-col :span="6" v-for="(object,o,index) in objectsTwo" :key="o" >
                                <el-card :body-style="{ padding: '0px' }">
                                    <img :src="object.imUrl" class="image" width="100%" height="80%">
                                    <div style="padding: 14px;">
                                        <span class="show">{{object.title}}</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{object.price }}</time>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                    <div >
                        <el-row >
                            <el-col :span="6" v-for="(object,o,index) in objectsThree" :key="o" >
                                <el-card :body-style="{ padding: '0px' }">
                                    <img :src="object.imUrl" class="image" width="100%" >
                                    <div style="padding: 14px;">
                                        <span class="show">{{object.title}}</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{object.price }}</time>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>
                    <div >
                        <el-row >
                            <el-col :span="6" v-for="(object,o,index) in objectsFour" :key="o" >
                                <el-card :body-style="{ padding: '0px' }">
                                    <img :src="object.imUrl" class="image"   >
                                    <div style="padding: 14px;">
                                        <span class="show">{{object.title}}</span>
                                        <div class="bottom clearfix">
                                            <time class="time">{{object.price }}</time>
                                        </div>
                                    </div>
                                </el-card>
                            </el-col>
                        </el-row>
                    </div>

                </a-carousel>
            </el-col>
        </el-row>

    </div>
</template>

<script>
import Vue from 'vue'

    export default {
        name: "Recommentions",
        components:{

        },

        data(){
            return {
                gender:"",
                url:"",
                objectsOne:[],
                objectsTwo:[],
                objectsThree:[],
                objectsFour:[]
              //  currentDate: new Date()
            }
        },


        mounted() {
            this.getGender();
            this.getImg();
            this.getRecomments();
        },

        methods:{
            getImg(){

            },
            getGender() {
                console.log("图片的"+this.$store.getters.showImg);

                this.$axios.get('https://wsw.chinanorth.cloudapp.chinacloudapi.cn/scrm-1.0/customer/selectById',
                    {
                        params: {
                            user_id: this.$store.getters.showFaceid
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
            },
            getRecomments(){

                //获取当前时间，转化成unix时间戳
                var time= parseInt(new  Date().getTime()/1000);

                console.log("unix"+time);

                let param={
                    "userId":this.$store.getters.showFaceid,
                    "isOld": 1,
                    "captureTime": time
                };

                this.$axios.post('https://wsw.chinanorth.cloudapp.chinacloudapi.cn/scrm-1.0/rest/marketing/notify',param,{retry:5,retryDelay:1000 })

                    .then(response => {
                        if(response.data.msgDesc=='Success'){
                        console.log("准备好获取推荐");

                     this.$axios.get('https://wsw.chinanorth.cloudapp.chinacloudapi.cn/scrm-1.0/rest/marketing/queryRecommendation?salesManId=xxxxxxxxx',
                         {retry: 5, retryDelay: 1000})
                         .then(response => {
                             var objects=response.data.data.productsList;
                             console.log(objects);
                             var j=0;
                             for(var i=0;i<4;i++){

                                 Vue.set(this.objectsOne, i, objects[j++]);
                                 Vue.set(this.objectsTwo, i, objects[j++]);
                                 Vue.set(this.objectsThree, i, objects[j++]);
                                 Vue.set(this.objectsFour, i, objects[j++]);
                             }
                         })

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
    /*  //  line-height: 20px;*/
        overflow: hidden;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        overflow: hidden;
        height: 280px;
       /* display: block;
        background-size: cover;
        background-position: center 0;*/
    }

    .show{
        overflow: hidden;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>