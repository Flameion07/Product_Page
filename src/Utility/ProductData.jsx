const ProductData = {
    title: 'FitBit 24 - The Smartest Watch',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae itaque vel magni, error nihil ducimus quis omnis ex officiis eligendi quibusdam at reprehenderit magnam deserunt assumenda corporis dolor perferendis debitis!',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This just makes your object as a constant. No values can be updated.

export default ProductData;