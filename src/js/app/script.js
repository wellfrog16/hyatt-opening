// 剧本

define([
    'jquery',
    'block',
    'music',
    'loader',
    'video',
    'index',
    'utils/sword',
    'utils/blade'],
($) => {
    return () => {
        const world = window.myWorld;
        const sword = world.sword;

        // 加载jquery插件
        sword.jqueryPlugins();
        // 自动修正rem
        sword.fixRem();

        world.blade.share('悦享自然，从心之旅', '2018.6.15 | 北京望京凯悦酒店 初见');

        // 如果是手机端，加载横屏提示
        if (!sword.isPC) { world.lakers.$block.mount(); }

        // world.lakers.$music.mount(false);
        world.lakers.$loader.mount(() => {
            // world.lakers.$video.mount($('body'));
            world.rivers.$index.mount();
        });
    };
});
