require(['jquery', 'script', 'helper/lakers'], ($, script) => {
    const world = window.myWorld;

    // 禁止拉动
    $('body').on('touchmove', function(e) {
        e.preventDefault();
    });

    $('body').on('touchstart', function(e) {
        e.preventDefault();
    });

    // 设置根节点
    world.root = $('body');
    script(1);
});
