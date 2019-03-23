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
             //   myProductChart.showLoading();

                var option = {
                    title: {
                        text: '产品偏好度Top5',
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
                        data: ['巴西', '印尼', '美国', '印度', '中国']
                    },
                    series: [
                        {
                            name: '2012年',
                            type: 'bar',
                            data: [193, 234, 310, 121, 134],
                            itemStyle:{
                                normal:{
                                    color:'#ff7d15',
                                    barBorderRadius:2, //圆角半径

                                }
                            },
                        }
                    ]
                };
                myProductChart.setOption(option);
            }
        }
    }
</script>

<style scoped>

</style>