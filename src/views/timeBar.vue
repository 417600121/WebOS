<template>
    <div id="timeBar" class="mohu">
        <div class="wrapper">
            <!-- 在这里自定义组件 -->
            <defaultTimeBar :timestamp="time"></defaultTimeBar>
        </div>
    </div>
</template>

<script>
import defaultTimeBar from '@/components/timeBars/default.vue'
export default {
    props:{
        skin: {
            type: String,
            default: 'default'
        }
    },
    components: {
        defaultTimeBar
    },
    data(){
        return {
            //时间戳格式
            time: 0,
        }
    },
    mounted() {
        // 时间戳
        this.time = new Date().getTime();
        setInterval(() => {
            this.time = new Date().getTime();
        }, 1000);
    }
}
</script>

<style scoped>
#timeBar{
    /* background: red */
    border-bottom-right-radius: var(--radius);
    border: var(--line-border);
    border-top: none;
    border-left: none;
    /* background-color: rgba(0,0,0,.6); */
    margin-bottom: 0.5em;

    user-select: none;
}
#timeBar .wrapper{
    position: relative;
}
</style>