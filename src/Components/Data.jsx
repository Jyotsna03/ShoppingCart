const items = [
    {
        ID: 1,
        Name: "Lenovo IdeaPad ",
        Image: "https://images-eu.ssl-images-amazon.com/images/I/71VB1UTcYkL._AC_UL200_SR200,200_.jpg",
        Desc: "Everyday laptops for first-time users. High-performance laptops for serious gamers. Convertible PCs for those who like their entertainment on the go.",
        Price: 50000,
        memory: {
            "name": "Ryzen 7000",
            "value": "8gb"
        },
        SSD: {
            "name": "256 GB",
            "value": "256gb"
        },
        "screen": "Anti-Glare, Non-Touch",
        "color": "Black"
    },
    {
        ID: 2,
        Name: "Inspiron 14 2-in-1 Laptop",
        Image: "https://cdn.moglix.com/p/0cpOYixcmUpfi-xxlarge.jpg",
        Desc: "The laptop features a 2-in-1 design, allowing you to switch between laptop and tablet modes effortlessly. This flexibility makes it suitable for various tasks, including productivity, entertainment, and creativity.",
        Price: 63000,
        memory: {
            "name": "8 GB",
            "value": "8gb"
        },
        SSD: {
            "name": "1 TB",
            "value": "1TB"
        },
        color: "Platinum Silver",
        processor: "Intel i7"
    },
    {
        ID: 3,
        Name: "Slim 3i Chromebook",
        Image: "https://www.warehousestationery.co.nz/on/demandware.static/-/Sites-wsl-master-catalog/default/dw1192979b/4e/a6/W2901809_30.jpg",
        Desc: "Everyday laptops for first-time users. High-performance laptops for serious gamers. Convertible PCs for those who like their entertainment on the go.",
        Price: 35000,
        memory: {
            name: "4gb",
            value: "4gb"
        },
        SSD: {
            name: "256 GB",
            value: "256gb"
        },
        color: "Platinum Grey",
        processor: "Intel i7"
    },
    {
        ID: 4,
        Name: "ASUS TUF Gaming",
        Image: "https://images-eu.ssl-images-amazon.com/images/I/91zVSkGGZbS._AC_UL200_SR200,200_.jpg",
        Desc: "ETUF Gaming is for those who demand superior durability, dependable stability and great gaming value.",
        Price: 55000,
        memory: {
            name: "Intel Core i5",
            value: "8gb"
        },
        SSD: {
            name: "512 GB",
            value: "512gb"
        },
        screen: "Anti-Glare, Non-Touch",
        color: "Black"
    },
    {
        ID: 5,
        Name: "Lenovo IdeaPad Slim 1",
        Image: "https://www.khoslaonline.com/wp-content/uploads/2023/07/61-dgckBgL._SL1500_-1.jpg",
        Desc: "Everyday laptops for first-time users. High-performance laptops for serious gamers. Convertible PCs for those who like their entertainment on the go.",
        Price: 36000,
        memory: {
            name: "Ryzen 7000",
            value: "8gb"
        },
        SSD: {
            name: "512 GB",
            value: "512gb"
        },
        screen: "Anti-Glare, Non-Touch",
        color: "Cloud Grey"
    },
    {
        ID: 6,
        Name: "ASUS VivoBook 15",
        Image: "https://in.store.asus.com/media/catalog/product/v/i/vivobook_15_x1502v_m1502y_product_photo_1k_quiet_blue_05_1_.jpg?width=439&height=439&store=en_IN&image-type=image",
        Desc: "Everyday laptops for first-time users. High-performance laptops for serious gamers. Convertible PCs for those who like their entertainment on the go.",
        Price: 26990,
        memory: {
            name: "Intel i5",
            value: "4gb"
        },
        SSD: {
            name: "1 TB",
            value: "1TB"
        },
        screen: "Anti-Glare, Non-Touch",
        color: "Pentium Silver"
    }
];

const filters = [
    {
        id: 1,
        LaptopName: 'Lenovo',
        Price: 50000,
        RAM: '8gb',
        SSD: '256GB'

    },
    {
        id: 2,
        LaptopName: 'DELL',
        Price: 63000,
        RAM: '16gb',
        SSD: '1TB'

    },
    {
        id: 3,
        LaptopName: 'Lenovo',
        Price: 35000,
        RAM: '8gb',
        SSD: '512GB'

    },
    {
        id: 4,
        LaptopName: 'Lenovo',
        Price: 50000,
        RAM: '16gb',
        SSD: '512GB'

    },
    {
        id: 5,
        LaptopName: 'Lenovo',
        Price: 36000,
        RAM: '8gb',
        SSD: '512GB'

    },
    {
        id: 6,
        LaptopName: 'Asus',
        Price: 26900,
        RAM: '8gb',
        SSD: '1TB'

    }
]

export { items, filters };
