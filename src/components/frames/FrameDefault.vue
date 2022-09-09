<template>
    <div class="frame"
        ref="frame"
        v-drag="'.title-wrapper'"
        tabindex="111"
        :class="[info.focus?'focus':'']"
        :style="{
            width: info.width,
            height: info.height,
            zIndex: info.z,
        }">
        <div class="title">
            <!-- v-focus="'focus'" -->
            <div v-if="info.isShowTitle" class="title-wrapper" ref="title-wrapper">
                {{info.title}}
            </div>
            <div class="options">
                <template>
                    <slot name="options"></slot>
                </template>
                <button class="lbtn" @click.prevent.stop="hide"><i class="iconfont icon-2zuixiaohua-2"></i></button>
                <button class="lbtn" ><i class="iconfont icon-3zuidahua-1"></i></button>
                <button class="lbtn danger" @click.stop="close"><i class="iconfont icon-4guanbi-2"></i></button>
            </div>
        </div>
        <div class="content" ref="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        info:{
            type: Object,
            default:{
                width: 'auto', // 宽度
                height: 'auto', // 高度
                title: '窗口组件', // 标题
                titleBkgColor: '#f00', // 标题背景色
                frameBkgColor: '#fff', // 窗口背景色
                focus: false,
                isDraggable: true, // 是否可拖动
                isResizable: true, // 是否可改变大小
                isMaximizable: true, // 是否可最大化
                isMinimizable: true, // 是否可最小化
                isClosable: true, // 是否可关闭
                isShow: true, // 是否显示
                isShowTitle: true, // 是否显示标题
            }
        }
    },
    data() {
        return {
            title:'111',
        }
    },
    methods: {
        getFocus(){
            this.$emit('getFocus', this.info)
        },
        close(){
            this.$emit('close', this.info)
        },
        hide(){
            this.$emit('hide', this.info)
        }
    },
    watch:{
        'info.z':{
            handler(val){
                this.$refs['frame'].click()
            },
            // immediate: true,
        }
    },
    mounted() {
        // this.$refs['frame'].addEventListener('mousedown',()=>{
        //     this.getFocus();
        // })

        this.$refs['title-wrapper'].addEventListener('mousedown',()=>{
            this.getFocus();
        })

        this.$refs['content'].addEventListener('mousedown',()=>{
            this.getFocus();
        })
        
        // this.frame_style.width = this.frame_info.width;
        // this.frame_style.height = this.frame_info.height;
        // this.frame_style.backgroundColor = this.frame_info.titleBkgColor;
    },
}
</script>

<style scoped>
    .frame{
        position: absolute;
        border-radius: .5em;
        top: 10px;
        left: 10px;
        background-color: #fff;
        overflow: hidden;
        color: #000;
        outline: 1px solid rgba(61, 61, 61, 0.607);
        box-shadow: 0 0 10px rgba(61, 61, 61, 0.607);
        display: flex;
        flex-direction: column;
    }

    /* 使用 focus-within代替focus，从而使得子元素获得焦点时也会触发该样式*/
    .frame:focus-within,
    .frame.focus{
        outline: 1px solid red;
    }
    .frame>.content{
        flex-grow: 1;
    }
    .title{
        background: #e9e9e9;
        color: black;
        user-select: none;
        box-sizing: content-box;
        display: flex;
        justify-content: space-between;
        position: relative;
        opacity: .4;
        flex-shrink: 0;
    }
    .frame:focus-within .title,
    .frame.focus .title{
        opacity: 1;
    }
    .title-wrapper{
        flex-grow: 1;
        padding: .3em 1em;
    }
    .frame *{
        color: #000;
    }
    .options{
        display: inline-block;
        flex-shrink: 0;
    }
    .options>.lbtn{
        border: none;
        padding: 0;
        margin: 0;
        height: 100%;
        text-align: center;
        padding: 0 1em;
        border-radius: 0;
        background: rgba(0,0,0,0);
        transition: .3s;
    }
    .options>.lbtn:hover{
        background: rgba(10, 10, 10, .15);
        cursor: default;
    }
    .options>.lbtn:active{
        background: rgba(79, 79, 79, 0.15);
    }
    .options>.danger:hover{
        background: #d41325;
    }
    .options>.danger:active{
        background: rgb(163, 16, 16);
    }
    .danger:hover i{
        color: white !important;
        transition: .3s;
    }
    .danger:active i{
        color: white !important;
    }

</style>