import { Controller, Get } from '@nestjs/common';

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;        
  imageUrl: string;
};

@Controller('products')
export class ProductsController {
  private readonly products: Product[] = [
    {
      id: 'p1',
      title: 'Wireless Headphones',
      description: 'Bluetooth over-ear headphones with 30h battery.',
      price: 3999,
      imageUrl: 'https://m.media-amazon.com/images/I/51FNnHjzhQL._UF1000,1000_QL80_.jpg',
    },
    {
      id: 'p2',
      title: 'Smart Watch',
      description: 'Fitness tracking, heart-rate, notifications.',
      price: 5499,
      imageUrl: 'https://img.thecdn.in/278008/1691235493459_SKU-0899_2.jpg?width=600&format=webp',
    },
    {
      id: 'p3',
      title: 'Mechanical Keyboard',
      description: 'Hot-swappable keys, RGB, compact layout.',
      price: 6999,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEMxMO4WXhpVDBzU_bpTgF_8mb1md8uk03dg&s',
    },
  ];

  @Get()
  findAll(): Product[] {
    return this.products;
  }
}
