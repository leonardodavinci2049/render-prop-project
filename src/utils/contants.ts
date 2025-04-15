import { faker } from "@faker-js/faker";

// Definição das interfaces
export interface ProductType {
  productName: string;
  description: string;
  price: number; // ajustado para ser um número
}

export interface CompanyType {
  companyName: string;
  phrase: string;
}

export const products: ProductType[] = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
  };
});

export const companies: CompanyType[] = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});
