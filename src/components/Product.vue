<template>
    <div>
        <div id="myProductCharts" :style="{width: '400px', height: '300px'}"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "Product",
        data() {
            return {}
        },

        mounted() {
            this.drawLine();
        },

        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myProductChart = echarts.init(document.getElementById('myProductCharts'));
                myProductChart.showLoading();

                var option = {
                    title: {
                        text: '产品偏好度',
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: []
                    },
                    series: [
                        {
                            name: '2012年',
                            type: 'bar',
                            data: [],
                            itemStyle:{
                                emphasis: {
                                    barBorderRadius: 7
                                },
                                normal:{
                                    barBorderRadius: 7,
                                    color :new echarts.graphic.LinearGradient(
                                        0, 0, 1, 0,
                                        [
                                            {offset: 0, color: '#4e98e6'},
                                            {offset: 1, color: '#37BBF8'}

                                        ]
                                    ),
                                }
                            },
                           /* itemStyle:{
                                normal:{
                                    color:'#ff7d15',
                                    barBorderRadius:2, //圆角半径

                                }
                            },*/
                        }
                    ]
                };


                var data=[];
                var product=[];
                let param={
                    "userId":this.$store.getters.showFaceid,
                    "statisDimens": "product",
                    "subNum":6,
                };

                this.$axios.post('https://wsw.chinanorth.cloudapp.chinacloudapi.cn//scrm-1.0/rest/report/person',param,{retry:4,retryDelay:1000 })
                    .then(response => {

                        if (response.data['msgDesc'] == "Success") {

                            var j=0;
                            for(let product_object of response.data.data.productSalesList[0]) {
                                if (product_object.product == "null") {
                                    console.log("产品为空");
                                } else if (j < 5) {
                                    data[j++] = product_object.salesCount;
                                    product.push(product_object.product.substr(0, 10) + "...");
                                }
                            }


                            myProductChart.hideLoading();

                            option.series[0].data=data;
                            option.yAxis.data=product;

                            console.log(option);
                            myProductChart.setOption(option);
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