<template>
    <div id="menuBar" class="h-100 mohu">
        <div class="wrapper h-100">
            <ul class="d-flex felx-row h-100 align-items-center">
                <li class="menu" v-for="menu in menus" :key="menu.id" v-hover="'mohu-hover'">
                    <i :class="menu.iconClass"></i>
                    {{menu.name}}
                    <div class="menu-items-wrapper">
                        <ul class="menu-items">
                            <li v-for="item in menu.items" :key="menu.id+''+item.id" v-hover="'mohu-hover'" :class="[item.type]">
                                <div v-if="item.type=='default'">
                                    <i :class="item.iconClass"></i>
                                    {{item.name}}
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                    
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        menus:{
            tyepe: Array,
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        
    },
}
</script>

<style scoped>
    #menuBar{
        border-left: 2px solid rgba(139, 139, 255, 0.7);
        border-bottom: var(--line-border);
        user-select: none;
        padding-left: 1em;
        position: relative;
        z-index: 9999;

    }
    .wrapper{

    }

    .menu{
        font-size: 13px;
        border-radius: .3em;
        padding: 0.1em 1em;
        transition: .2s;

        position: relative;

        display: inline-block;

    }


    .menu-items-wrapper{
        /* 菜单外层容器 */
        height: 0;
        overflow: hidden;
        position: absolute;
        left: 0px;
        border-radius: .3em;
        margin-top: 2px;

        background-color: rgba(50,50,50,1);
    }
    .menu:hover>.menu-items-wrapper,
    .menu-items-wrapper:hover{
        /* 展开菜单 */
        height: auto;
    }


    .menu-items{
        /* display: none; */
        /* transition: .3s; */
        overflow: hidden;
        /* top: 2em; */
        left: 0;
        width: 10em;
        padding: 1em 0 !important;
        /* backdrop-filter: blur(16px) !important; */
        /* background-color: rgba(50,50,50,.95); */
    }
    

    .menu-items>li{
        padding: 0.5em 1em 0.5em 2.5em;
        font-size: 13px;
        cursor: pointer;
    }
    .menu-items>li.line{
        padding: 0;
        height: 0.08em;
        line-height: 0.08em;;

        background-color: rgba(222, 222, 222, 0.3) !important;
        margin: .5em 0;
        cursor: default;
    }



</style>