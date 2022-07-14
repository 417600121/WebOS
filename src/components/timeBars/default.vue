<template>
    <div class="default-time">
        <div class="hour">
            {{hour}}
        </div>
        <div class="hour">
            {{minute}}
        </div>
        <div>
            {{month}} / {{day}}
        </div>
        <div class="week">
            {{week}}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        timestamp: {
            type: Number,
        }
    },
    data() {
        return {
            year: 0,
            month: 0,
            day: 0,
            hour: 0,
            minute: 0,
            second: 0,
            week: '',
        }
    },
    methods: {
        //根据时间戳time获取时间
        getNowTime(time) {
            let now = new Date(time);
            this.year = now.getFullYear();
            this.month = now.getMonth() + 1;
            this.day = now.getDate();
            //小时补0
            this.hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
            // 分钟补0
            this.minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
            this.second = now.getSeconds();
            //中文星期
            this.week = '星期'+['日', '一', '二', '三', '四', '五', '六'][now.getDay()];
        }
    },
    watch: {
        timestamp:{
            handler(val){
                this.getNowTime(val);
            },
            immediate: true
        }
    },
    mounted() {
    },
}
</script>

<style scoped>
.default-time{
    width: 100%;
    text-align: center;
}
.hour{
    font-size: 2em;
    /* font-weight: bold; */
}
.week{
    font-size: 12px
}
</style>