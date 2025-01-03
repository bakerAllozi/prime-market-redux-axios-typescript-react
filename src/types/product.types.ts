export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
  price2: number;
  rating: {
    rate: number;
    count: number;
  };
}
