<template>
    <div id="camera">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="10">
                <h1>人脸识别</h1>
                <!--<img id="image" :src="imgUrl"/>-->
                <video id="video" width="320" height="240" autoplay></video>
                <canvas id="canvas" width="320" height="240"></canvas>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {
        name: "Shot",
        data () {
            return {
                imgUrl: '',
                canvas: null,
                video: null,
                context: null,
            }
        },
        mounted() {
            // Grab elements, create settings, etc.
            var video = document.getElementById('video');

            // Get access to the camera!
            if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                // Not adding `{ audio: true }` since we only want video now
                navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                    //video.src = window.URL.createObjectURL(stream);
                    video.srcObject = stream;
                    video.play();
                });
            }

            this.canvas = document.getElementById('canvas');
            this.context = this.canvas.getContext('2d');
            this.video = document.getElementById('video');
            this.start();

        },
        methods: {
            shot: function () {
                this.context.drawImage(this.video, 0, 0, 320, 240);
                let dataURL = this.canvas.toDataURL("screenshot/png");

                this.$store.dispatch('changeImg',dataURL);
                console.log(this.$store.getters.showImg);
                return dataURL;
            },
            snap: function () {

                for (let i = 0; i < 5; i++) {
                    // 半秒钟拍一次照片并传到后台
                    // setTimeout(() => {
                    //     let base = this.shot();
                    // }, 500);
                    let base = this.shot();
                    this.$axios({
                        method: 'POST',
                        url: 'http://42.159.104.30:80/crm32/multiImage/sendBase',
                        //qs.stringify()将对象 序列化成URL形式，以&进行拼接
                        //用于set请求
                        data: this.qs.stringify({
                            bases: base,
                            name: i,
                        })
                    })
                        .then(response => {
                            console.log(response.data);
                            if (response.data.success == true) {
                                if (response.data.finish == true) {
                                    // 已经取到人脸识别faceID
                                    console.log("FACEID:" + response.data.faceid);
                                    this.$store.dispatch('setFaceid', response.data.faceid);

                                    // 验证是否为会员并取得验证码
                                    this.$axios({
                                        methods: 'POST',
                                        url: '/cashier/getVerif',
                                        data: this.qs.stringify({
                                            user_id: response.data.faceid,
                                        })
                                    })
                                        .then(response => {
                                            if (response.data["member"]) {
                                                // 数据库中有数据，是会员
                                                this.$store.dispatch('changeMember', true);

                                              /*  //获取当前时间，转化成unix时间戳
                                                var time=Long.toString(System.currentTimeMillis()/1000);

                                                //发送后台，准备获取推荐
                                                this.$axios({
                                                    method: 'POST',
                                                    url: 'https://wsw.chinanorth.cloudapp.chinacloudapi.cn/scrm-1.0/rest/marketing/notify',
                                                    data: this.qs.stringify({
                                                        "userId": this.$store.getters.showFaceid,
                                                        "isOld": 1,
                                                        "captureTime": time
                                                    })
                                                })
                                                    .then(console.log("准备获取推荐"));*/

                                                console.log("Already a member.");
                                            }
                                            // 查看用户购物行为分析
                                            this.$store.dispatch('changeStep', 2)

                                        })
                                        /*.catch(error => {
                                            console.log("Get Verif request error.");
                                        })*/
                                }
                                else {
                                    // 图片还没传完
                                    console.log("还没结束请耐心等待");
                                }
                            }
                            else {
                                console.log("图片请求失败，后台出错");
                            }
                        })
                        .catch(error => {
                            console.log(error);
                            this.$message.error('Face Request Error......');
                        })
                }

            },
            start () {
                console.log("what")
                setTimeout(()=>{
                    this.snap();
                },1000);//5秒拍一次照片
            }

        }
    }
</script>

<style scoped>


</style>