<template>
    <div>
        <div id="myPriceCharts" :style="{width: '400px', height: '300px'}"></div>
    </div>
</template>

<script>
    import echarts from "echarts";
    export default {
        name: "Price",
        data() {
            return {

            }
        },

        mounted() {
            this.drawLine();
        },

        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myPriceChart = echarts.init(document.getElementById('myPriceCharts'));
                myPriceChart.showLoading();

                var option = {
                    title : {
                        text: '购买价位占比',
                        x:'left'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        data: ['直接访问','邮件营销','联盟广告']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'}
                            ],
                            itemStyle: {
                                normal: {
                                    label:{
                                        show:true,
                                        formatter: '{b} : {c} \n ({d}%)'
                                    },
                                    labelLine:{
                                        show:true
                                    },
                                },
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ],
                    color :[
                        new echarts.graphic.RadialGradient(0.5, 0.5, 1,
                            [
                                {offset: 0, color: '#B8D3E4'},
                                {offset: 1, color: '#60acfc'}
                               // {offset: 1, color: '#37BBF8'}
                            ]
                        ),
                        new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#B8D3E4'},
                               // {offset: 1, color: '#32d3eb'}
                                {offset: 1, color: '#2febe5'}

                            ]
                        ),
                        new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#B8D3E4'},
                              //  {offset: 1, color: '#5bc49f'}
                                {offset: 1, color: '#aaf8d6'}

                            ]
                        ),
                    ]
                   // color: ['#60acfc' ,'#32d3eb','#5bc49f']
                };

                var data=[];
                var priceRegion=[];

                console.log(this.$store.getters.showFaceid);

                let param={
                    "userId":this.$store.getters.showFaceid,
                    "statisDimens": "price",
                    "subNum":4,
                };

                this.$axios.post('https://haoxipeng.chinacloudapp.cn/scrm-1.0/rest/report/person',param,{retry:4,retryDelay:1000 })
                    .then(response => {

                        if (response.data['msgDesc'] == "Success") {

                            var j=0;
                            for(var i=0;i<4;i++){
                                console.log(response.data.data.priceSalesList[0][i].endPrice);

                                if(response.data.data.priceSalesList[0][i].endPrice && j <3){
                                    priceRegion[j]= response.data.data.priceSalesList[0][i].startPrice + "-"+response.data.data.priceSalesList[0][i].endPrice + "元";
                                    data[j]= {value: response.data.data.priceSalesList[0][i].salesCount, name: priceRegion[j]} ;
                                    j++;
                                }
                            }
                            console.log(priceRegion);
                            console.log(data);

                            myPriceChart.hideLoading();
                            option.series[0].data=data;
                            option.legend.data=priceRegion;

                            console.log(option);
                            myPriceChart.setOption(option);
                        }else {
                            console.log("数据未获取到")
                        }


                    })

            }
        }

    }
</script>

<style scoped>

</style>