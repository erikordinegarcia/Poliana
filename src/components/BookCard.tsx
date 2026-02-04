import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <article className="group bg-card rounded-lg overflow-hidden shadow-card card-hover">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary/50">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-background/90 backdrop-blur-sm text-foreground rounded-full">
          {book.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title & Author */}
        <div>
          <h3 className="font-serif text-lg font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {book.title}
          </h3>
          <p className="text-caption mt-1">{book.author}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {book.description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-serif font-semibold text-primary">
            {formatPrice(book.price)}
          </span>
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a
              href={book.mercadoLivreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              Ir para compra
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BookCard;
