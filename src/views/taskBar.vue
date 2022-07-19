<template>
    <div id="taskBar" class="mohu">
        <ul class="wrapper">
            <!-- 开始菜单 -->
            <li 
                v-tooltip.right="{content: '开始菜单',distance: '8',delay: tootip_delay}"
                class="start-menu now mohu-hover"
                >
                <b-icon icon="command" style="width: 2rem;height:2rem"></b-icon>
            </li>
            <div class="line" v-if="$store.state.now_frames.length"></div>
            <li
                v-hover="'mohu-hover'"
                @click="updateFocus(item,i)"
                v-for="(item,i) in [...$store.state.now_frames]" :key="item.id"
                :class="[i == $store.state.task_focus_idx?'task-itemFocus':'']"
                v-tooltip.right="{content:item.title,distance: '8',delay: tootip_delay}">
                <b-icon icon="inbox" style="width: 2rem;height:2rem"></b-icon>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tootip_delay: {
                show: 50,
                hide: 0
            }
        }
    },
    methods: {
        updateFocus(frame,i){
            this.$bus.$emit('updateFocus',frame);
        }
    },
    mounted() {
        
    },
}
</script>

<style scoped>
    #taskBar{
        width: 100%;
        /* height: 100%; */
        color: azure;
        /* background: red; */
        border-radius: 0 var(--radius) var(--radius) 0;
        /* background: linear-gradient(66deg,#0052d4,#4364f7,#6fb1fc); */
        position: relative;

        padding: .8rem;

        border: var(--line-border);
        border-left: none;
        /* background-color: rgba(0, 0, 0, .6); */

        /* top: 50%; */
        /* transform: translateY(-50%); */
        /* border-right: 2px solid red; */
    }

    #taskBar .wrapper{
        z-index: 1; 
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        /* height: 100%; */
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        list-style: none;
        justify-content: center;
        margin-bottom: 0;
    }
    .wrapper>li{
        /* width: 100%; */
        width: 3.5em;
        height: 3.5em;
        text-align: center;
        border-radius: 50%;
        transition: .3s;
        margin: 3px 0;
        user-select: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .start-menu{
        --opacity: .25;
    }

    li:hover{
        --opacity: 0.129;
    }

    li:active{
        --opacity: 0.3;
    }


    .line{
        display: inline-block;
        width: 90%;
        height: .3em;
        border-radius: .3em;
        margin: .2em 0;
        background-color: rgba(220, 220, 220, 0.7);
    }

    /* .wrapper>li.now:before{
        content: '';
        position: absolute;
        right: -.2em;
        display: inline-block;
        height: 50%;
        background: red;
        width: .2em;
        
    } */
</style>