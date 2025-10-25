import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';
import { useCart } from '@/context/CartContext';
import Button from '@/components/ui/Button';
import toast from 'react-hot-toast'; // ✅ import toast

interface ProductCardProps {
  product: Product & { rating?: number };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    toast.success(`${product.name} added to cart!`); // ✅ show toast
  };

  return (
    <div className="product-card relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200">
      <Link href={`/product/${product.id}`} className="block">
        <div className="aspect-square relative overflow-hidden cursor-pointer">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-200"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-semibold text-lg mb-2 hover:text-primary-600 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating stars (if exists) */}
        {product.rating !== undefined && (
          <div className="flex items-center mb-3">
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`${i < Math.round(product.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
              >
                ★
              </span>
            ))}
            <span className="ml-2 text-gray-600 text-sm">{product.rating}</span>
          </div>
        )}

        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-gray-900">
            ₹{product.price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full"
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
}
