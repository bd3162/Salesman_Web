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
              //  myBrandChart.showLoading();

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
                        data: ['巴西','印尼','美国','印度','中国']
                    },
                    series: [
                        {
                            name: '2012年',
                            type: 'bar',
                            data: [193, 234, 310, 121, 134],
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
                console.log(option);
                myBrandChart.setOption(option);
            }
        }

    }
</script>

<style scoped>

</style>