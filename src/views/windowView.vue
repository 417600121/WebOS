<template>
    <div id="windowView">
        <ll-frame
            v-for="frame in now_frames"
            :key="frame.id"
            @getFocus="getFocus"
            @close="close"
            :info="frame">
            <div slot="content">
                <component :is="frame.content.default"></component>
            </div>
        </ll-frame>
    </div>
</template>

<script>
import Vue from 'vue'
import llFrame from '@/components/frames/FrameDefault.vue'
import frames from '@/plugins/frames.js'
export default {
    
    components: {
        llFrame,
    },
    data() {
        return {
            now_frames: [],
            minIndex: 100,
            maxIndex: 1000,
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
            })
            this.setFrameFocus(frameObject)
            this.setTaskFocusByidx(this.now_frames.length-1)
        },
        // 将窗口置顶层
        onTop(frameObject){
            if(frameObject.z == this.getMaxFrameIndex())return;
            this.setFrameFocus(frameObject)
            let idx = this.now_frames.findIndex(item => item.id == frameObject.id);
            this.setTaskFocusByidx(idx);
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
            // console.log(frameObject.title + ' 窗口获得了焦点')
        },
        setTaskFocusByidx(idx){
            this.$store.commit('setTaskFocusByidx', idx);
        },
        setFrameFocus(frameObject){
            let idx = this.now_frames.findIndex(item => item.id == frameObject.id);
            this.now_frames.forEach(item => {
                item.focus = false
            })
            this.now_frames[idx].focus = true;
        },
        updateStore(){
            this.$store.commit('updateFrames', this.now_frames);
        },
        close(info){
            // console.log(info);
            let idx = this.now_frames.findIndex(item => item.id == info.id);
            this.now_frames.splice(idx, 1);
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
        this.$bus.$on('onTop', (frameObject)=>{
            this.onTop(frameObject);
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
</style>