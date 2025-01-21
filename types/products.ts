export interface Product {
  _id: string;
  _type: 'product';
  title: string;
  productImage?: {
    asset: {
      _ref: string;
      _type: 'image';
    };
  };
  rentalPrice: number;
  size: string;
  availability: string;
  category: string;
  tags: string[];
  discountPercentage?: number; // Optional field
  isNew: boolean;
  description: string;
}
