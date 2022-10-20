import Vue from 'vue'

// v-hover
Vue.directive('hover',{
    inserted(el, binding){
        el.addEventListener('mouseenter', () => {
            if(!el.classList.contains(binding.value)){
                el.classList.add(binding.value);
            }
        })
        el.addEventListener('mouseleave', () => {
            if(el.classList.contains(binding.value)){
                el.classList.remove(binding.value);
            }
        })
    }
})

//v-drag
Vue.directive('drag',{
    inserted(el, binding){
        var dragBar = el.querySelector(binding.value);
        // console.log(dragBar)
        // PC端
        dragBar.addEventListener('mousedown', (e) => {
            // console.log(el)
            var disX = e.clientX - el.offsetLeft;
            var disY = e.clientY - el.offsetTop;
            console.log(e);
            document.onmousemove = (e) => {
                el.style.left = e.clientX - disX + 'px';
                el.style.top = e.clientY - disY + 'px';
            }
            document.onmouseup = () => {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        })
        
        // PE端
        dragBar.addEventListener('touchstart', (e) => {
            
            var disX = e.changedTouches[0].clientX - el.offsetLeft;
            var disY = e.changedTouches[0].clientY - el.offsetTop;
            console.log(e);
            document.ontouchmove = (e) => {
                el.style.left = e.changedTouches[0].clientX - disX + 'px';
                el.style.top = e.changedTouches[0].clientY - disY + 'px';
            }
            document.ontouchend = () => {
                document.ontouchmove = null;
                document.ontouchend = null;
            }
        })
    }
})

// v-focus
Vue.directive('focus',{
    inserted(el, binding){
        // 基于鼠标位置来判断失去或者获得焦点
        // console.log(el)
        // PC端
        el.addEventListener('mousedown', (e) => {
            if(!el.classList.contains(binding.value)){
                el.classList.add(binding.value);
            }
            // 将其它frame的焦点移除
            var otherFrame = document.querySelectorAll('.frame');
            for(var i = 0; i < otherFrame.length; i++){
                if(otherFrame[i] != el){
                    if(otherFrame[i].classList.contains(binding.value)){
                        otherFrame[i].classList.remove(binding.value);
                    }
                }
            }
        })

        // PE端
        el.addEventListener('touchstart', (e) => {
            if(!el.classList.contains(binding.value)){
                el.classList.add(binding.value);
            }
            // 将其它frame的焦点移除
            var otherFrame = document.querySelectorAll('.frame');
            for(var i = 0; i < otherFrame.length; i++){
                if(otherFrame[i] != el){
                    if(otherFrame[i].classList.contains(binding.value)){
                        otherFrame[i].classList.remove(binding.value);
                    }
                }
            }
        })
    }
})