import React, { createContext, useState, ReactNode, useContext } from 'react';
import { products as initialProducts } from '../data/products';
import { Product } from '../types/Product';
import { ProductContextType } from '../types/ProductContextType';

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts debe ser usado dentro de un ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  
  const [products, setProducts] = useState<Product[]>(initialProducts);


  const addProduct = (newProduct: Product) => {
    const productWithId = { ...newProduct, id: newProduct.id || `temp-${Date.now()}` };
    setProducts(prevProducts => [productWithId, ...prevProducts]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const deleteProduct = (productId: string | number) => {
    setProducts(prevProducts =>
      prevProducts.filter(product => product.id !== productId)
    );
  };

  const contextValue: ProductContextType = {
    products, 
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};