export const categories = [
    {id: 1, name: 'Ягоды'},
    {id: 2, name: 'Пряности'},
    {id: 3, name: 'Травы'},
];

export const ingredients = [
    {id: 1, name: 'Клюква', category: 1},
    {id: 2, name: 'Ежевика', category: 1},
    {id: 3, name: 'Черника', category: 1},
    {id: 4, name: 'Облепиха', category: 1},
    {id: 5, name: 'Крыжовник', category: 1},
    {id: 6, name: 'Малина', category: 1},
    {id: 7, name: 'Голубика', category: 1},

    {id: 8, name: 'Корица', category: 2},
    {id: 9, name: 'Ваниль',category: 2},
    {id: 10, name: 'Кардамон', category: 2},
    {id: 11, name: 'Шафран', category: 2},
    {id: 12, name: 'Имбирь', category: 2},

    {id: 13, name: 'Мята', category: 3},
    {id: 14, name: 'Шалфей', category: 3},
    {id: 15, name: 'Анчан', category: 3},
    {id: 16, name: 'Базилик', category: 3},
    {id: 17, name: 'Лаванда', category: 3},
];

export const initialIngredients = [
    {id: 1, name: 'Клюква', category: 1, price: 100, weight: 150, image: '/assets/Клюква.jpg', png_image: '/assets/png_img/Клюква.png'},
    {id: 2, name: 'Ежевика', category: 1, price: 100, weight: 150, image: '/assets/Ежевика.jpg', png_image: '/assets/png_img/Ежевика.png'},
    {id: 3, name: 'Черника', category: 1, price: 100, weight: 150, image: '/assets/Черника.jpg', png_image: '/assets/png_img/Черника.png'},
    {id: 4, name: 'Облепиха', category: 1, price: 100, weight: 150, image: '/assets/Облепиха.jpg', png_image: '/assets/png_img/Облепиха.png'},
    {id: 5, name: 'Крыжовник', category: 1, price: 100, weight: 150, image: '/assets/Крыжовник.jpg', png_image: '/assets/png_img/Крыжовник.png'},
    {id: 6, name: 'Малина', category: 1, price: 100, weight: 150, image: '/assets/Малина.jpg', png_image: '/assets/png_img/Малина.png'},
    {id: 7, name: 'Голубика', category: 1, price: 100, weight: 150, image: '/assets/Голубика.jpg', png_image: '/assets/png_img/Голубика.png'},

    {id: 8, name: 'Корица', category: 2, price: 100, weight: 150, image: '/assets/Корица.jpg', png_image: '/assets/png_img/Корица.png'},
    {id: 9, name: 'Ваниль', category: 2, price: 100, weight: 150, image: '/assets/Ваниль.jpg', png_image: '/assets/png_img/Ваниль.png'},
    {id: 10, name: 'Кардамон', category: 2, price: 100, weight: 150, image: '/assets/Кардамон.jpg', png_image: '/assets/png_img/Кардамон.png'},
    {id: 11, name: 'Шафран', category: 2, price: 100, weight: 150, image: '/assets/Шафран.jpg', png_image: '/assets/png_img/Шафран.png'},
    {id: 12, name: 'Имбирь', category: 2, price: 100, weight: 150, image: '/assets/Имбирь.jpg', png_image: '/assets/png_img/Имбирь.png'},

    {id: 13, name: 'Мята', category: 3, price: 100, weight: 150, image: '/assets/Мята.jpg', png_image: '/assets/png_img/Мята.png'},
    {id: 14, name: 'Шалфей', category: 3, price: 100, weight: 150, image: '/assets/Шалфей.jpg', png_image: '/assets/png_img/Шалфей.png'},
    {id: 15, name: 'Анчан', category: 3, price: 100, weight: 150, image: '/assets/Анчан.jpg', png_image: '/assets/png_img/Анчан.png'},
    {id: 16, name: 'Базилик', category: 3, price: 100, weight: 150, image: '/assets/Базилик.jpg', png_image: '/assets/png_img/Базилик.png'},
    {id: 17, name: 'Лаванда', category: 3, price: 100, weight: 150, image: '/assets/Лаванда.jpg', png_image: '/assets/png_img/Лаванда.png'},
];

export const CatalogItems = [
    {
        id: 1, 
        name: 'Клюквенная',
        imageUrl: '/assets/png/Клюквенная.png',
        volume: 1,
        price: 2000,
        totalPrice: 2000, 
        ingredientList: [1,8,9,13],

    },
    {
        id: 2,
        imageUrl: '/assets/png/Ежевичная.png',
        name: 'Ежевично-кардамоновая',
        volume: 1,
        price: 1700,
        totalPrice: 1700, 
        ingredientList: [2,10,9,14],

    },
    {
        id: 3,
        imageUrl: '/assets/png/Голубичная.png',
        name: 'Голубично-лавандовая',
        volume: 1,
        price: 2300,
        totalPrice: 2300, 
        ingredientList: [7,2,17,8,9],

    },
    {
        id: 4,
        imageUrl: '/assets/png/Облепиховая.png',
        name: 'Облепиховая',
        volume: 1,
        price: 1800,
        totalPrice: 1800, 
        ingredientList: [4,2,8,11,13],

    },
    {
        id: 5,
        imageUrl: '/assets/png/Ягодная.png',
        name: 'Ягодная',
        volume: 1,
        price: 2000,
        totalPrice: 2000, 
        ingredientList: [1,2,3,6,8,12,13],

    },
    ];