import { Button } from '@/components/ui/button';
import type { Book } from '@/data/books';
import { Link } from 'react-router-dom';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  return (
    <article className="group bg-card rounded-lg overflow-hidden shadow-card card-hover flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-secondary/50">
        <img
          src={book.image}
          alt={book.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground rounded-full">
          {book.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title & Author */}
        <div>
          <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">
            {book.title}
          </h3>
          <p className="text-caption mt-1">{book.author}</p>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-muted-foreground break-words">{book.description}</p>

        {/* Price & CTA */}
        <div className="mt-auto pt-4 flex items-center justify-between gap-3">
          <span className="text-lg font-serif font-semibold text-primary">
            {formatPrice(book.price)}
          </span>

          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link
              to={`/compra/${book.id}`}
              className="inline-flex items-center gap-1.5"
            >
              Comprar
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
