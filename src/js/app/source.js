const resources = {};

resources.preload = [
    { 'src': 'common/block/landscape.png' }
];

// loading 用雪碧图
// for (let i = 1; i <= 66; i++) {
//     let zero = '';
//     for (let j = 0; j < 2 - i.toString().length; j++) {
//         zero += '0';
//     }

//     resources.preload.push({ 'src': `common/loader/sprite/${zero + i}.jpg` });
// }

resources.mainload = [
    { 'src': 'main/scene1/logo.png' },
    { 'src': 'main/scene1/photo.jpg' },
    { 'src': 'main/scene1/text.png' },

    { 'src': 'main/scene2/bg.jpg' },
    { 'src': 'main/scene2/photo.jpg' },
    { 'src': 'main/scene2/text.png' },

    { 'src': 'main/scene3/bg.jpg' },
    { 'src': 'main/scene3/photo.jpg' },
    { 'src': 'main/scene3/text.png' },

    { 'src': 'main/scene4/bg.jpg' },
    { 'src': 'main/scene4/photo.jpg' },
    { 'src': 'main/scene4/text.png' },

    { 'src': 'main/scene5/bg.jpg' },
    { 'src': 'main/scene5/photo.jpg' },
    { 'src': 'main/scene5/text.png' }
];

define(resources);
