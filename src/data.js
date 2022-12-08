import { images } from './constants';

const projects = [
  {
    id: 1,
    categories: 'webapp',
    name: 'devKeo Blog',
    img: images.blog,
    desc: 'Modern fully functional blog application.',
    lang: [
      'Javascript,',
      ' NextJS,',
      ' Hygraphy,',
      ' GraphQL',
      ' HTML5,',
      ' CSS3',
    ],
    link: 'https://devkeo-blog.vercel.app/',
    github: 'https://github.com/kenneth-okoro/graph-cms-blog',
  },
  {
    id: 2,
    categories: 'webapp',
    name: 'Dunes Communication',
    img: images.duneShop,
    desc: 'Gadgets and accessories e-commerce shop.',
    lang: ['Javascript,', ' NextJS,', ' Sanity', ' HTML5,', ' CSS3'],
    link: 'https://sanity-ecommerce-paystack.vercel.app/',
    github: 'https://github.com/kenneth-okoro/sanity-ecommerce',
  },
  {
    id: 3,
    categories: 'website',
    name: 'Tesla',
    img: images.tesla,
    desc: 'Cloned Tesla landing page.',
    lang: ['Javascript,', ' ReactJS,', ' HTML5,', ' CSS3'],
    link: 'https://keo-tesla.netlify.app/',
    github: 'https://github.com/kenneth-okoro/tesla-clone',
  },
  {
    id: 4,
    categories: 'webapp',
    name: 'Clothing Store',
    img: images.clothingStore,
    desc: 'Online fashion store with CRUD and local storage functionality.',
    lang: ['Javascript,', ' HTML5,', ' CSS3'],
    link: 'https://devkeo-clothingstore.netlify.app/',
    github: 'https://github.com/kenneth-okoro/Clothing-Store',
  },
  {
    id: 5,
    categories: 'website',
    name: 'Cartzilla',
    img: images.cartzilla,
    desc: 'A food ordering and delivery landing page website.',
    lang: ['Javascript,', ' SaSS,', ' HTML5,', 'CSS3'],
    link: 'https://ricocart.netlify.app/dist',
    github: 'https://github.com/kayodeolowo',
  },
];

export default projects;