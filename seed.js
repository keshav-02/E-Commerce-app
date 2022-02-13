const Product = require('./models/product');


const products = [
    {
        name: 'Iphone 11',
        price: 100,
        img: "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007. Since then, Apple has annually released new iPhone models and iOS updates. As of November 1, 2018, more than 2.2 billion iPhones had been sold."
    },
    {
        name: 'Ipad',
        price: 250,
        img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXBhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "iPad is a line of tablet computers designed, developed and marketed by Apple Inc., which run the iOS and iPadOS mobile operating systems. The first iPad was released on April 3, 2010; the most recent iPad models are the ninth-generation iPad, released on September 24, 2021."
    },
    {
        name: 'Macbook',
        price: 400,
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        desc: "The MacBook is a brand of Macintosh notebook computers designed and marketed by Apple Inc. that use Apple's macOS operating system since 2006. It replaced the PowerBook and iBook brands during the Mac transition to Intel processors, announced in 2005. The current lineup consists of the MacBook Air (2008–present) and the MacBook Pro (2006–present). Two different lines simply named MacBook existed from 2006 to 2012 and 2015 to 2019."
    },
    {
        name: 'Drones',
        price: 500,
        img: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "An unmanned aerial vehicle (UAV), commonly known as a drone, is an aircraft without any human pilot, crew or passengers on board. UAVs are a component of an unmanned aircraft system (UAS), which include additionally a ground-based controller and a system of communications with the UAV."
    },
    {
        name: 'Sport Shoes',
        price: 1050,
        img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function."
    },
    {
        name: 'Jeans',
        price: 399,
        img: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        desc: "Jeans are a type of pants or trousers, typically made from denim or dungaree cloth. Often the term jeans refers to a particular style of trousers, called blue jeans, which were invented by Jacob W. Davis in partnership with Levi Strauss & Co. in 1871[1] and patented by Jacob W. Davis and Levi Strauss on May 20, 1873."
    }
];


const seedDB = async() => {
    await Product.deleteMany({});

    await Product.insertMany(products);

    console.log('DB Seeded');
}

module.exports = seedDB;