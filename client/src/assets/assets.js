import logo from './logo.png';
import header from './header.jpg';
import with_bg_img from './with_bg.jpg';
import without_bg_img from './without_bg.jpeg';
import withbg from './with.jpg';
import withoutbg from './without.jpeg';

export const assets =  { 
    logo,
    header,
    with_bg_img,
    without_bg_img,
    withbg,
    withoutbg
};

export const testimonialData =  [
    { 
        id: 1,
        text: 'John Doe',
        author: 'This service is amazing! It saved me so much time.',
        image: 'logo',
        jobTitle: 'Software Engineer'
    },
];


export const plans = [
    {
        id: 'Basic Plan',
        price: 10,
        credit: 100,
        desribtion: 'Basic features for individuals and small teams.',
    },
    {
        id: 'Pro Plan',
        price: 20,
        credit: 200,
        desribtion: 'Advanced features for professionals and businesses.',
    },
    {
        id: 'Enterprise Plan',
        price: 50,
        credit: 500,
        desribtion: 'Comprehensive solutions for large organizations.',
    },
]