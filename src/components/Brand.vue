<template>
    <div>
        <div id="myBrandChart" :style="{width: '400px', height: '300px'}"></div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "Brand",
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
                let myBrandChart = echarts.init(document.getElementById('myBrandChart'));
                myBrandChart.showLoading();

                var option = {
                    title: {
                        text: '品牌偏好度Top5',
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
                            data:[ ],
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
                        }
                    ]
                };

                console.log(this.$store.getters.showFaceid);

                var data=[];
                var brand=[];
                let param={
                    "userId":this.$store.getters.showFaceid,
                    "statisDimens": "brand",
                    "subNum":6,
                };

                this.$axios.post('https://haoxipeng.chinacloudapp.cn/scrm-1.0/rest/report/person',param,{retry:4,retryDelay:1000 })
                    .then(response => {

                        if (response.data['msgDesc'] == "Success") {
                            var j=0;
                            for(var i=0;i<6;i++){
                                if(response.data.data.brandSalesList[0][i].brand == "null" ){
                                    console.log("品牌为空");
                                }else if (j < 5){
                                    data[j++]=response.data.data.brandSalesList[0][i].salesCount;
                                    brand.push(response.data.data.brandSalesList[0][i].brand);
                                }
                            }

                            myBrandChart.hideLoading();
                            option.series[0].data=data;
                            option.yAxis.data=brand;

                            console.log("数据"+data);
                            console.log(option);
                            myBrandChart.setOption(option);
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