interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

interface Subcategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
}

interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
}

export interface Product {
    sold: number;
    images: string[];
    subcategory: Subcategory[];
    ratingsQuantity: number;
    _id: string;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    imageCover: string;
    category: Category;
    brand: Brand;
    ratingsAverage: number;
    createdAt: string;
    updatedAt: string;
    id: string;
}
export interface Product1 {
    title: string;
    price: number;
    // Add other fields as needed
  }
  // item.interface.ts
export interface Item {
    title: string;
    price: number;
    // Add other properties as needed
  }
  