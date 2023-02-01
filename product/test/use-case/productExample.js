import { randomUUID } from 'crypto';

export const productExample = {
    id_user: randomUUID(),
    name: "coca",
    value: 2,
    quantity: 1,
    description: "refrigerante lata",
    category: "bebidas",
    features: [
        {
            name: "refrigerante",
            description: " bebidas",
        },
        {
            name: "lata",
            description: " 350ml",
        }
    ],
    images: [
        {
            url: "https://pixabay.com/pt/photos/posso-lata-de-cola-cola-bebida-592366/",
            description: "refrigerante de lata",
        },
        {
            url: "https://pixabay.com/pt/photos/posso-lata-de-cola-cola-bebida-592366/",
            description: "refrigerante de lata 350ml",
        }
    ],
}





