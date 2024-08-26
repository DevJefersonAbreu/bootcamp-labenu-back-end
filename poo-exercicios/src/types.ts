// src/types.ts

// Tipagem para um usuário
export type TUser = {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string; // formato: ano-mês-diaTHH:mm:ss.sssZ
  };
  
  // Tipagem para um produto
  export type TProduct = {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  };
  