/*
Eiliskumas:
- pagal pavadinima A-Z
- pagal pavadinima Z-A
- pagal kaina A-Z
- pagal kaina Z-A
- pagal data A-Z
- pagal data Z-A
- pagal irasymo eiliskuma (entry) A-Z
- pagal irasymo eiliskuma (entry) Z-A
- pagal lankomumas A-Z
- pagal lankomumas Z-A
- pagal xxx A-Z
- pagal xxx Z-A
- pagal random
*/

const portfolioData = {
    size: {
        min: 3,
        max: 6,
    },
    rendering: {
        strategy: 'title',
        order: 'az',
    },
    content: [
        {
            published: false,
            img: './img/portfolio/1.jpg',
            alt: 'Portfolio image 1',
            title: 'Working Keyboard',
            link: '#',
            tags: ['Branding', 'Designing'],
        },
        {
            published: false,
            img: './img/portfolio/2.jpg',
            alt: 'Portfolio image 2',
            title: 'The Micro Headphones',
            link: '#',
            tags: ['Branding', 'Development'],
        },
        {
            published: true,
            img: './img/portfolio/3.jpg',
            alt: 'Portfolio image 3',
            title: 'The Coffee Cup',
            link: '#',
            tags: ['Designing', 'Development'],
        },
        {
            published: true,
            img: './img/portfolio/4.jpg',
            alt: 'Portfolio image 4',
            title: 'The Wooden Desk',
            link: '#',
            tags: ['Photography'],
        },
        {
            published: true,
            img: './img/portfolio/5.jpg',
            alt: 'Portfolio image 5',
            title: 'Camera',
            link: '#',
            tags: ['Photography'],
        },
        {
            published: true,
            img: './img/portfolio/6.jpg',
            alt: 'Portfolio image 6',
            title: 'Branded Laptop',
            link: '#',
            tags: ['Photography'],
        },
        {
            published: true,
            img: './img/portfolio/7.jpg',
            alt: 'Portfolio image 7',
            title: 'Kitchen',
            link: '#',
            tags: ['Photography', 'Designing'],
        },
        {
            published: true,
            img: './img/portfolio/8.jpg',
            alt: 'Portfolio image 8',
            title: 'Flower',
            link: '#',
            tags: ['Photography', 'Designing'],
        },
        {
            published: true,
            img: './img/portfolio/9.jpg',
            alt: 'Portfolio image 9',
            title: 'Chair',
            link: '#',
            tags: ['Branding', 'Development'],
        },
    ],
};

export { portfolioData };