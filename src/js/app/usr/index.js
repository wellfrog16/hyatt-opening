// 剧本

define([
    'text!../components/usr/index.html!strip',
    'swiper',
    'jquery',
    'jquery.hammer',
    'helper/rivers',
    'utils/sword'],
(html, Swiper) => {
    const world = myWorld;
    const river = {};

    // 挂载
    river.mount = function() {
        if (!this.$root) {
            world.root.append(html);
            this.$root = world.root.find('.usr-index');

            this.bind();
        }
    };

    river.bind = function() {
        const mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            direction: 'vertical',
            on: {
                init: function() {
                    swiperAnimateCache(this); // 隐藏动画元素
                    swiperAnimate(this); // 初始化完成开始动画
                },
                slideChangeTransitionEnd: function() {
                    swiperAnimate(this); // 每个slide切换结束时也运行当前slide动画
                }
            }
        });
        mySwiper.a = null;

        $('.swiper-container').on('touchstart', function(e) {
            e.preventDefault();
        });

        this.$root.find('.scene4 .button i').hammer().on('tap', () => {
            location.href = 'https://beijingwangjing.regency.hyatt.com/zh-Hans/hotel/home.html';
        });

        this.$root.find('.scene5 .button i').hammer().on('tap', () => {
            location.href = 'http://zd.zhiketong.cn/r_ticket_poster?id=84826&source=eb&appid=wx78eb159eda1fe3ef&user_id=173898&product_grouptype=0';
        });
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
