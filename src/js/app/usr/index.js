// 剧本

define([
    'text!../components/usr/index.html!strip',
    'swiper',
    'helper/rivers',
    'utils/sword'],
(htmlBlock, Swiper) => {
    const world = myWorld;
    const river = {};

    // 挂载
    river.mount = function() {
        if (!this.$root) {
            world.root.append(htmlBlock);
            this.$root = world.root.find('.usr-index');

            this.bind();
        }
    };

    river.bind = function() {
        const mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            direction: 'vertical'
        });
        console.log(mySwiper);
    };

    river.show = () => {
        river.$root.show();
    };

    river.hide = () => {
        river.$root.hide();
    };

    // 销毁
    river.destroy = function() {
        this.$root.remove();
        this.$root = null;
    };

    world.rivers.$index = river;
    return river;
});
