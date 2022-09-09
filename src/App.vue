<template>
    <div id="app">
        <div class="WindowView">
            <div class="MenuBar">
                <MenuBar :menus="menu.menus"></MenuBar>
            </div>
            <WindowView></WindowView>
        </div>
        <div class="TaskBar">
            <TimeBar skin="default"/>
            <TaskBar/>
        </div>
    </div>
</template>
<script>
import TaskBar from '@/views/taskBar.vue'
import WindowView from '@/views/windowView.vue'
import MenuBar from '@/views/menuBar.vue'
import TimeBar from '@/views/timeBar.vue'
export default {
    components: {
        TaskBar,
        WindowView,
        MenuBar,
        TimeBar
    },
    data() {
        return {
            menu:{
                menus:[
                    {
                        id: 1, type: 'default',name: '文件',iconClass:'icon',
                        items:[
                            {id: 1,type: 'default',name: '新建',iconClass:'icon-plus',items:[]},
                            {id: 2,type: 'default',name: '打开',iconClass:'icon-folder-open',items:[]},
                            {id: 3,type: 'default',name: '保存',iconClass:'icon-save',items:[]},
                            {id: 4,type: 'default',name: '另存为',iconClass:'icon-save-as',items:[]},
                            {id: 7,type: 'line'},
                            {id: 5,type: 'default',name: '关闭',iconClass:'icon-close',items:[]},
                            {id: 6,type: 'default',name: '退出',iconClass:'icon-exit',items:[]},
                        ]   
                    },

                    {
                        id: 2, type: 'default',name: '编辑',iconClass:'icon',
                        items:[
                            {id: 1,type: 'default',name: '新建',iconClass:'icon-plus',items:[]},
                            {id: 2,type: 'default',name: '打开',iconClass:'icon-folder-open',items:[]},
                            {id: 3,type: 'default',name: '保存',iconClass:'icon-save',items:[]},
                            {id: 4,type: 'default',name: '另存为',iconClass:'icon-save-as',items:[]},
                            {id: 5,type: 'default',name: '关闭',iconClass:'icon-close',items:[]},
                            {id: 6,type: 'default',name: '退出',iconClass:'icon-exit',items:[]},
                        ]   
                    },
                ]
            }
        }
    },
    methods: {
    },
    mounted() {
        
    },
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */

  width: 100vw;
  height: 100vh;
  padding: 0;

  display: flex;
  flex-direction: row-reverse;

    /* 壁纸 */
    background-image: url('./assets/bkg2.jpg'), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.WindowView{
    /* 使得视窗区域占满 */
    overflow: hidden;
    flex-grow: 1;
}
.TaskBar{
    width: 4em;
    overflow: hidden;
    flex-shrink: 0;
}
.MenuBar{
    width: 100%;
    height: 2em;
}
</style>
