export default [
    // 窗口注册
    {
        // frameObject
        id: '1',
        title: '关于',
        width: '450px',
        height: '300px',
        type:'light',
        startPos: 1,
        /* startPos位置指引：
            1 2 3
            4 5 6
            7 8 9
        */
        isShow: true,
        isShowTitle: true,
        isDraggable: true,
        isResizable: true,
        isMaximizable: true,
        isMinimizable: true,
        isClosable: true,
        content: require(`@/windows/about.vue`)
    },
    {
        id: '2',
        title: '窗口组件by石磊2',
        width: '360px',
        height: '300px',
        type:'light',
        startPos: 1,
        isShow: true,
        isShowTitle: true,
        isDraggable: true,
        isResizable: true,
        isMaximizable: true,
        isMinimizable: true,
        isClosable: true,
        content: require(`@/windows/abc.vue`)
    },
    {
        id: '3',
        title: 'hello',
        width: '220px',
        height: '300px',
        type:'light',
        startPos: 1,
        isShow: true,
        isShowTitle: true,
        isDraggable: true,
        isResizable: true,
        isMaximizable: true,
        isMinimizable: true,
        isClosable: true,
        content: require(`@/windows/test2.vue`)
    },
]