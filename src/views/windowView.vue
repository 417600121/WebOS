<template>
    <div id="windowView" class="animate" v-contextmenu>
        <transition-group enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
            <ll-frame
                v-for="(frame) in now_frames"
                :key="frame.id"
                @getFocus="getFocus"
                @close="close"
                @hide="hide"
                :ref="frame.runToken"
                v-show="frame.isShow"
                :info="frame">
                <div slot="content">
                    <component :is="frame.content.default"></component>
                </div>
            </ll-frame>
        </transition-group>


        <v-contextmenu ref="contextmenu">
            <v-contextmenu-item>
                <i class="iconfont icon-icon-test1 fs-5"></i>刷新
            </v-contextmenu-item>
            <v-contextmenu-item>
                
                
                <div v-if="!isFullScreen" @click="fullScreen">
                    <i class="iconfont icon-full-screen" style="margin-left: .1rem;margin-right: .4rem;"></i>
                    全屏
                </div>
                <div v-else @click="exitFullScreen">
                    <i class="iconfont icon-full-screen" style="margin-left: .1rem;margin-right: .4rem;"></i>
                    退出全屏
                </div>
            </v-contextmenu-item>
            <v-contextmenu-item>
                <i class="iconfont icon-icon-test fs-5"></i>设置
            </v-contextmenu-item>
            
            <v-contextmenu-item>
                <i class="iconfont icon-icon-test fs-5"></i>取消
            </v-contextmenu-item>
        </v-contextmenu>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                

    </div>
</template>

<script>
import Vue from 'vue'
import llFrame from '@/components/frames/FrameDefault.vue'
import frames from '@/plugins/frames.js'
import {getGuid} from '@/plugins/utils.js'
import 'animate.css'

export default {
    
    components: {
        llFrame,
    },
    data() {
        return {
            now_frames: [],
            minIndex: 100,
            maxIndex: 1000,

            isFullScreen: false
        }
    },
    methods: {
        // 获取当下所有窗口中的最大层级，如果没有就返回默认200
        getMaxFrameIndex(){
            if(this.now_frames.length == 0){
                return this.minIndex - 1;
            }else{
                return Math.max(...this.now_frames.map(item => item.z));
            }
        },
        startFrame(frameObject){
            this.now_frames.push({
                ...frameObject,
                z: this.getMaxFrameIndex() + 1, //层级
                focus: false, //是否获取焦点
                runToken: getGuid()
            })
            this.setFrameFocus(frameObject)
            this.setTaskFocusByidx(this.now_frames.length-1)
        },
        // 将窗口置顶层
        onTop(frameObject){
            // if(frameObject.z == this.getMaxFrameIndex())return;
            let idx = this.now_frames.findIndex(item => item.runToken == frameObject.runToken);
            

            console.log('onTop',idx);
            this.setFrameShowByidx(idx);
            this.setTaskFocusByidx(idx);
            this.setFrameFocus(frameObject)
            
            this.now_frames[idx].z = this.getMaxFrameIndex() + 1;
            //当达到最大层级时，将所有窗口重置层级
            if(this.now_frames[idx].z > this.maxIndex){
                let tempFrames = [...this.now_frames].sort((a, b) => a.z - b.z);
                this.now_frames.forEach(item => {
                    let t = tempFrames.findIndex(i => item.z == i.z);
                    item.z = this.minIndex + t;
                })
            }
        },
        getFocus(frameObject){
            this.onTop(frameObject)
            this.$refs[frameObject.runToken][0].$el.focus()
            // console.log(frameObject.title + ' 窗口获得了焦点')
        },
        setTaskFocusByidx(idx){
            this.$store.commit('setTaskFocusByidx', idx);
        },
        setFrameFocus(frameObject){
            if(frameObject.runToken in this.$refs){
                console.log(11);
                this.$refs[frameObject.runToken][0].$el.focus();
            }
            let idx = this.now_frames.findIndex(item => item.id == frameObject.id);
            this.now_frames.forEach(item => {
                item.focus = false
            })
            this.now_frames[idx].focus = true;
        },
        setFrameShowByidx(idx){
            this.now_frames[idx].isShow = true;
        },
        updateStore(){
            this.$store.commit('updateFrames', this.now_frames);
        },
        close(frameInfo){
            let idx = this.now_frames.findIndex(item => item.id == frameInfo.id);
            this.now_frames.splice(idx, 1);
        },
        hide(frameInfo){
            let idx = this.now_frames.findIndex(item => item.runToken == frameInfo.runToken);
            this.now_frames[idx].isShow = false;
            frameInfo.focus = false
        },
        fullScreen(){
            const html = document.querySelector('html');
            html.requestFullscreen()
            .then(() => {
                console.log('进入全屏成功')
                this.isFullScreen = true
            })
            .catch(() => {
                console.log('进入全屏失败')
                this.isFullScreen = false
            })
        },
        exitFullScreen(){
            if(document.exitFullscreen) {
                document.exitFullscreen().then();
                this.isFullScreen = false
            } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
                this.isFullScreen = false
            } else if(document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
                this.isFullScreen = false
            }
        }
    },
    watch:{
        now_frames:{
            handler(val){
                this.updateStore();
            },
            deep: true,
            immediate: true,
        }
    },
    mounted() {
        this.$bus.$on('updateFocus', (frameObject)=>{
            if(frameObject.focus===false){
                this.onTop(frameObject)
                frameObject.isShow = true;
            }else{
                frameObject.isShow = false;
                frameObject.focus = false;
            }
        });

        this.startFrame(frames[0])
        this.startFrame(frames[1])
        this.startFrame(frames[2])
    },
}
</script>

<style scoped>
    #windowView{
        width: 100%;
        height: 100%;
        position: relative;
    }

    .mydiv{
        display: inline-block;
        width: 150px;
        height: 150px;
    }

    .animate{
        --animate-duration: .3s;
    }

    .v-contextmenu{
        background: rgba(30,30,30,.6);
        border: 1px solid rgba(185,185,185,.2);
        backdrop-filter: blur(20px);
        box-shadow: 0 10px 30px rgb(0 0 0 / 50%);
        padding: 5px !important;
        border-radius: 10px;
        min-width: 160px;

    }
    .v-contextmenu-item{
        padding: 8px 15px !important;
        height: 2rem;
        color: white !important;
        font-size: 14px !important;
        border-radius: 5px;

        display: flex;
        align-items:center;
    }
    .v-contextmenu-item i{
        margin-right: .5rem;
    }
    .v-contextmenu-item.v-contextmenu-item--hover{
        background-color: rgba(100,100,100,.4);
    }
</style>