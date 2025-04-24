export interface ChairItem {
    img: string;
    title: string;
    price: number;
    features: string[];
}

export const chairData: ChairItem[] = [
    {
        img: "./assets/chair-1.jpg",
        title: "Science meets design",
        features: [
            "Leisure and relaxing",
            "Comfortable for 4h",
            "Vegan leather",
            "Weighs 16 kg"
        ],
        price: 250,
    },
    {
        img: "./assets/chair-2.jpg",
        title: "The Worker Bee",
        features: [
            "Work",
            "Comfortable for 8h",
            "Vegan leather",
            "Weighs 22 kg"
        ],
        price: 525,
    },
    {
        img: "./assets/chair-3.jpg",
        title: "The Chair 4/2",
        features: [
            "Leisure and relaxing",
            "Comfortable all day!",
            "Organic cotton",
            "Weighs 80 kg"
        ],
        price: 1450,
    },
]