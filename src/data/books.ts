export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  description: string;
  image: string;
  mercadoLivreUrl: string;
  featured?: boolean;
}

export const categories = [
  "Todos",
  "Confeitaria",
  "Panificação",
  "Culinária Geral",
  "Livros Raros",
] as const;

export type Category = typeof categories[number];

export const books: Book[] = [
  {
    id: "1",
    title: "Larousse da Confeitaria",
    author: "Larousse",
    category: "Confeitaria",
    price: 289.90,
    description: "A bíblia da confeitaria francesa com mais de 200 receitas clássicas e técnicas profissionais.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
    featured: true,
  },
  {
    id: "2",
    title: "Pão Nosso",
    author: "Luiz Américo Camargo",
    category: "Panificação",
    price: 149.90,
    description: "Receitas caseiras e técnicas artesanais para fazer pães incríveis em casa.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
    featured: true,
  },
  {
    id: "3",
    title: "Le Cordon Bleu - Todas as Técnicas",
    author: "Le Cordon Bleu",
    category: "Culinária Geral",
    price: 399.90,
    description: "Guia completo com todas as técnicas culinárias da prestigiada escola francesa.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
    featured: true,
  },
  {
    id: "4",
    title: "The French Laundry Cookbook",
    author: "Thomas Keller",
    category: "Livros Raros",
    price: 890.00,
    description: "Obra-prima do chef Thomas Keller com receitas do lendário restaurante três estrelas Michelin.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
    featured: true,
  },
  {
    id: "5",
    title: "Doces Lembranças",
    author: "Carole Crema",
    category: "Confeitaria",
    price: 119.90,
    description: "Receitas afetivas de doces brasileiros que marcaram gerações.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
  },
  {
    id: "6",
    title: "Tartine Bread",
    author: "Chad Robertson",
    category: "Panificação",
    price: 249.90,
    description: "O guia definitivo para pães de fermentação natural da padaria mais famosa de São Francisco.",
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
  },
  {
    id: "7",
    title: "Salt, Fat, Acid, Heat",
    author: "Samin Nosrat",
    category: "Culinária Geral",
    price: 189.90,
    description: "Domine os quatro elementos essenciais da boa cozinha com este bestseller ilustrado.",
    image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
  },
  {
    id: "8",
    title: "Modernist Cuisine",
    author: "Nathan Myhrvold",
    category: "Livros Raros",
    price: 4500.00,
    description: "Coleção enciclopédica de 6 volumes sobre a ciência e arte da culinária moderna.",
    image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
  },
  {
    id: "9",
    title: "Confeitaria Clássica",
    author: "Michel Roux",
    category: "Confeitaria",
    price: 175.90,
    description: "Técnicas e receitas tradicionais de confeitaria francesa por um mestre.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
  },
  {
    id: "10",
    title: "A Arte do Pão",
    author: "Richard Bertinet",
    category: "Panificação",
    price: 135.90,
    description: "Aprenda a fazer pães artesanais com as técnicas de um dos melhores padeiros do mundo.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
  },
  {
    id: "11",
    title: "Cozinha de Origem",
    author: "Alex Atala",
    category: "Culinária Geral",
    price: 220.00,
    description: "Receitas e histórias dos ingredientes brasileiros pelo chef do D.O.M.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
  },
  {
    id: "12",
    title: "Escoffier - Le Guide Culinaire",
    author: "Auguste Escoffier",
    category: "Livros Raros",
    price: 650.00,
    description: "A obra fundamental da culinária clássica francesa, edição original restaurada.",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=500&fit=crop",
    mercadoLivreUrl: "https://www.mercadolivre.com.br",
  },
];

export const featuredBooks = books.filter(book => book.featured);
