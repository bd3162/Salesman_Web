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
                    <div >
                        <el-row >
                            <el-col :span="6" v-for="(object,o,index) in objectsOne" :key="o" >
                                <el-card :body-style="{ padding: '0px' }">
                                    <img :src="object.imUrl" class="image" width="100%" height="80%">
                                    <div style="padding: 14px;">
                                        <span>{{object.title}}</span>
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
                                        <span>{{object.title}}</span>
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
                                        <span>{{object.title}}</span>
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


    export default {
        name: "Recommentions",
        components:{

        },

        data(){
            return {
                gender:" ",
                url:" ",
                objectsOne:[ {
                    "asin": "B00007E829",
                    "brand": "Panasonic",
                    "category": "Home & Kitchen",
                    "imUrl": "http://ecx.images-amazon.com/images/I/51bP1dODlyL._SY300_.jpg",
                    "price": "6.29",
                    "rank": 1,
                    "title": "PANASONIC MC-V150M 3-Pack of Vacuum Bags"
                },
                    {
                        "asin": "B0016PS596",
                        "brand": "Panasonic",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/51iA5RSdpNL._SX300_.jpg",
                        "price": "11.03",
                        "rank": 2,
                        "title": "Package of 2 Genuine Panasonic Secondary HEPA Filter (V5100-V530"
                    },
                    {
                        "asin": "B002HRFLJO",
                        "brand": "null",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/51tr0w9jL0L._SY300_.jpg",
                        "price": "134.38",
                        "rank": 3,
                        "title": "4D Concepts 4-Drawer Wicker Stand, Wicker/ Metal"
                    },
                    {
                        "asin": "B000SSU8Z6",
                        "brand": "Norpro",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/515aQZ9DRIL._SX300_.jpg",
                        "price": "5.99",
                        "rank": 4,
                        "title": "Grip-EZ Tea Infuser with Cup"
                    }],
                objectsTwo:[
                    {
                        "asin": "B001LF8O7E",
                        "brand": "null",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/41a1FJc02uL._SY300_.jpg",
                        "price": "0.00",
                        "rank": 5,
                        "title": "SideSwipe for KitchenAid 4.5 and 5 Quart Tilt-Head Stand Mixers"
                    },
                    {
                        "asin": "B000VSB820",
                        "brand": "null",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/41PNe6cj0cL.jpg",
                        "price": "0.00",
                        "rank": 6,
                        "title": "One Touch Wine Opener - Open Any Bottle Of Wine In Seconds!"
                    },
                    {
                        "asin": "B003D7HHJY",
                        "brand": "OXO",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/41A9ieaYngL._SY300_.jpg",
                        "price": "39.99",
                        "rank": 7,
                        "title": "OXO Good Grips Plug-In Charging Shelf"
                    },
                    {
                        "asin": "B0049I8VUA",
                        "brand": "M.V. Trading Co.",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/31kGDPWMJtL.jpg",
                        "price": "11.95",
                        "rank": 8,
                        "title": "New Twist-Lock Spice Ball Tea Infuser Herb Infuser, Stainless Steel, Large Size (3 x 2.5&quot;)"
                    }],
                objectsThree:[
                    {
                        "asin": "B00004UE75",
                        "brand": "Norpro",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/41RmsBbaLVL._SY300_.jpg",
                        "price": "6.55",
                        "rank": 9,
                        "title": "Norpro Egg Rite Egg Timer"
                    },
                    {
                        "asin": "B00ILXY56S",
                        "brand": "King&#39;s Brand",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/51rMdwDEwlL._SX300_.jpg",
                        "price": "173.36",
                        "rank": 10,
                        "title": "Kings Brand Pewter Finish With Glass Top Coffee Table &amp; 2 End Tables Occasional Set"
                    },
                    {
                        "asin": "B000FMNLS6",
                        "brand": "Cross",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/41xwQU3AtwL._SX300_.jpg",
                        "price": "108.43",
                        "rank": 11,
                        "title": "New Marble Style Black 3pc Coffee / 2 End Table Set"
                    },
                    {
                        "asin": "B000LZQQEI",
                        "brand": "null",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/41JqWhEtC4L._SX300_.jpg",
                        "price": "0.00",
                        "rank": 12,
                        "title": "3pcs Traditional Style Cherry Finish Coffee &amp; 2 End Tables Set"
                    }],
                objectsFour:[
                    {
                        "asin": "B00ETIBNQY",
                        "brand": "Bella Esprit",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/5193251gEgL._SY300_.jpg",
                        "price": "378.00",
                        "rank": 13,
                        "title": "40&quot; Round Coffee Table with 4 Wedge Stools - Espresso Finish"
                    },
                    {
                        "asin": "B000MQU10G",
                        "brand": "Winsome Wood",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/41XO%2BqlY1LL._SX300_.jpg",
                        "price": "134.99",
                        "rank": 14,
                        "title": "Winsome Wood Round Coffee Table, Espresso"
                    },
                    {
                        "asin": "B000AO6HG2",
                        "brand": "null",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/51D0x0HDBuL._SX300_.jpg",
                        "price": "0.00",
                        "rank": 15,
                        "title": "Black Contemporary Coffee Table"
                    },
                    {
                        "asin": "B0002KNPL4",
                        "brand": "Acme Furniture",
                        "category": "Home & Kitchen",
                        "imUrl": "http://ecx.images-amazon.com/images/I/51DGLY%2B3KFL._SX300_.jpg",
                        "price": "124.99",
                        "rank": 16,
                        "title": "Matrix Coffee Table Set Wrought Iron with 8mm Beveled Glass"
                    }]
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
                //获取当前时间，转化成unix时间戳
                var time=Long.toString(System.currentTimeMillis()/1000);

                console.log("unix"+time);
                this.$axios.get('https://haoxipeng.chinacloudapp.cn/scrm-1.0/customer/selectById',
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
        height: 80px;

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