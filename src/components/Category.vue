<template>
  <div>
   <!-- <el-form :inline="true" style="margin: 2%">
     &lt;!&ndash; <el-form-item>
        <el-input v-model="user_id" placeholder="Please input the User ID" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getData" type="primary" icon="el-icon-search" round>Search</el-button>
      </el-form-item>
      <el-form-item>
        <el-button @click="clear" type="danger" icon="el-icon-delete" circle></el-button>
      </el-form-item>&ndash;&gt;
    </el-form>-->
    <div id="myChart3" :style="{width: '600px', height: '600px'}"></div>
  </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "Category",
        data () {
            return {
                user_id: this.$store.getters.showFaceid,
            }
        },
        methods: {
            drawForce (data) {
                let option = {
                    legend: {
                        x: 'left',//图例位置
                        //图例的名称
                        //此处的数据必须和关系网类别中name相对应
                        data: data.categories.map(function (a) {
                            return a.name;
                        })
                    },
                    series: [{
                        type: 'graph',
                        layout: 'force',
                        // animation: false,
                        label: {
                            normal: {
                                show:true,
                                position: 'right'
                            }
                        },
                        draggable: true,
                        force: {
                            layoutAnimation:true,
                            // xAxisIndex : 0, //x轴坐标 有多种坐标系轴坐标选项
                            // yAxisIndex : 0, //y轴坐标
                            gravity:0.03,  //节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                            edgeLength: 150,  //边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
                            repulsion: 150  //节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                        },
                        data: data.nodes.map(function (node, idx) {  //node数据
                            node.id = idx;
                            return node;
                        }),
                        categories: data.categories,  //关系网类别，可以写多组
                        edges: data.links  //link数据
                    }]
                };
                console.log(option)
                let myChart4 = echarts.init(document.getElementById('myChart3'), 'light')
                // myChart4.clear()
                myChart4.setOption(option)
            },
            getData () {
                let data = {
                    categories:[
                        {name: "USER"},
                        {name: "Beauty"},       //关系网类别
                        {name: "Home & Kitchen"},
                        {name: "Health & Personal Care"},
                        {name: "Grocery & Gourmet Food"},
                        {name: "Electronics"},
                        {name: "Sports & Outdoors"},
                        {name: "Baby"},
                    ],
                    nodes:[
                        {category: 0, name: "测试行政区位", value: 5, id: 0, symbolSize:30},  //展示的节点 //category与关系网类别索引对应 //我的源数据中没有id属性，这里放出来的是目标数据，id是自动生成的
                        {category: 1, name: "省人民政府关于同意从江县部分乡镇行政区划调整的批复", value: 3, id: 1, symbolSize:50},
                        {category: 1, name: "丙妹镇", value: 1, id: 2, symbolSize:10},
                        {category: 1, name: "行政区域", value: 1, id: 3, symbolSize:20},
                        {category: 2, name: "水城县４个乡撤乡设镇获省政府批复", value: 3, id: 4},
                        {category: 2, name: "水城县", value: 1, id: 5},
                        {category: 2, name: "行政区划调整", value: 1, id: 6}
                    ],
                    links:[
                        {source: 0, target: 1, value: 5},    //节点之间连接 //source起始节点，0表示第一个节点  //target目标节点，1表示与索引(id)为1的节点进行连接
                        {source: 1, target: 2, value: 3},
                        {source: 1, target: 3, value: 3},
                        {source: 0, target: 4, value: 5},
                        {source: 4, target: 5, value: 3},
                        {source: 4, target: 6, value: 3}
                    ]
                };
                let param = {
                    userId: this.user_id,
                    statisDimens: "category",
                    subNum: "7"
                }
                this.$axios.post('https://wsw.chinanorth.cloudapp.chinacloudapi.cn/scrm-1.0/rest/report/person', param)
                    .then(response => {
                        if (response.data.msgCode == 0) {
                            let totalAmount = 0;
                            let totalCount = 0;
                            data.nodes = [{category: 0, name: this.user_id, symbolSize: 80}];
                            data.links = [];
                            for (let cate of response.data.data.categorySalesList[0]) {
                                totalAmount += cate.salesAmount;
                                totalCount += cate.salesCount;
                            }
                            response.data.data.categorySalesList[0].forEach((cate, i) => {
                                data.nodes.push({
                                    category: this.index_to_category(cate.category),
                                    name: cate.category,
                                    id: i + 1,
                                    symbolSize: 40 * cate.salesAmount / totalAmount + 30,
                                })
                                data.links.push({
                                    source: 0,
                                    target: i + 1,
                                    value: 5
                                })
                            })
                            console.log(data);
                            this.drawForce(data)
                        }
                        else {
                            this.$message.error('Request succeed, but return error. Go check console.');
                            console.log(response.data.msgDesc);
                        }

                    })
                    .catch(error => {
                        this.$message.error('Request Error, please check the console to find out what goes wrong.');
                        console.log(error)
                    });
                // this.drawForce(data)
            },
            index_to_category (cate_name) {
                if (cate_name == "Beauty") {
                    return 1;
                }
                else if (cate_name == "Home & Kitchen") {
                    return 2;
                }
                else if (cate_name == "Health & Personal Care") {
                    return 3;
                }
                else if (cate_name == "Grocery & Gourmet Food") {
                    return 4;
                }
                else if (cate_name == "Electronics") {
                    return 5;
                }
                else if (cate_name == "Sports & Outdoors") {
                    return 6;
                }
                else if (cate_name == "Baby") {
                    return 7;
                }
            },
            clear () {

            }
        },
        mounted () {
            this.getData();
        }
    }
</script>

<style scoped>

</style>
