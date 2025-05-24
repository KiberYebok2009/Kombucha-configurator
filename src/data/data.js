export const categories = [
    {id: 1, name: 'Ягоды'},
    {id: 2, name: 'Специи'},
    {id: 3, name: 'Травы'},
];

export const ingredients = [
    {id: 1, name: 'Клюква', category: 1},
    {id: 2, name: 'Ежевика', category: 1},
    {id: 3, name: 'Черника', category: 1},
    {id: 4, name: 'Облепиха', category: 1},
    {id: 5, name: 'Крыжовник', category: 1},

    {id: 6, name: 'Корица', category: 2},
    {id: 7, name: 'Ваниль',category: 2},
    {id: 8, name: 'Кардамон', category: 2},
    {id: 9, name: 'Шафран', category: 2},

    {id: 10, name: 'Мята', category: 3},
    {id: 11, name: 'Шалфей', category: 3},
];

export const initialIngredients = [
    {id: 1, name: 'Клюква', category: 1, price: 100, weight: 150, image: '/assets//Клюква.jpg'},
    {id: 2, name: 'Ежевика', category: 1, price: 100, weight: 150, image: '/assets/Ежевика.jpg'},
    {id: 3, name: 'Черника', category: 1, price: 100, weight: 150, image: '/assets/Черника.jpg'},
    {id: 4, name: 'Облепиха', category: 1, price: 100, weight: 150, image: '/assets/Облепиха.jpg'},
    {id: 5, name: 'Крыжовник', category: 1, price: 100, weight: 150, image: '/assets/Крыжовник.jpg'},

    {id: 6, name: 'Корица', category: 2, price: 100, weight: 150, image: '/assets/Корица.jpg'},
    {id: 7, name: 'Ваниль', category: 2, price: 100, weight: 150, image: '/assets/Ваниль.jpg'},
    {id: 8, name: 'Кардамон', category: 2, price: 100, weight: 150, image: '/assets/Кардамон.jpg'},
    {id: 9, name: 'Шафран', category: 2, price: 100, weight: 150, image: '/assets/Шафран.jpg'},

    {id: 10, name: 'Мята', category: 3, price: 100, weight: 150, image: '/assets/Мята.jpg'},
    {id: 11, name: 'Шалфей', category: 3, price: 100, weight: 150, image: '/assets/Шалфей.jpg'},
];

export const CatalogItems = [
    {
        id: 1, 
        name: 'Клюквенная',
        imageUrl: '/assets/png/Клюквенная.png',
        volume: 1,
        price: 2000,
        totalPrice: 2000, 
        ingredientList: [1,6,7,10],

    },
    {
        id: 2,
        imageUrl: '/assets/png/Ежевичная.png',
        name: 'Ежевично-кардамоновая',
        volume: 1,
        price: 1700,
        totalPrice: 1700, 
        ingredientList: [2,8,7,11],

    },
    {
        id: 3,
        imageUrl: '/assets/images/beautiful-clouds-digital-art.jpg',
        name: 'Кастом №3',
        volume: 1,
        price: 2000,
        totalPrice: 2000, 
        ingredientList: [1,2,3,4,5],

    },
    {
        id: 4,
        imageUrl: '/assets/images/beautiful-clouds-digital-art.jpg',
        name: 'Кастом №4',
        volume: 1,
        price: 2000,
        totalPrice: 2000, 
        ingredientList: [1,2,3,4,5],

    },
    {
        id: 5,
        imageUrl: '/assets/images/beautiful-clouds-digital-art.jpg',
        name: 'Кастом №5',
        volume: 1,
        price: 2000,
        totalPrice: 2000, 
        ingredientList: [1,2,3,4,5],

    },
    {
        id: 6, 
        name: 'Кастом №6',
        imageUrl: '/assets/images/beautiful-clouds-digital-art.jpg',
        volume: 1,
        price: 2000,
        totalPrice: 2000, 
        ingredientList: [1,2,3,4,9],

    },
    ];