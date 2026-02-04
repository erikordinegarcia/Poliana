import BookCard from "./BookCard";
import { featuredBooks } from "@/data/books";

const FeaturedSection = () => {
  return (
    <section id="destaques" className="section-padding bg-secondary/30">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-caption uppercase tracking-[0.2em] mb-3">
            Seleção Especial
          </p>
          <h2 className="text-headline text-foreground">
            Destaques da Curadoria
          </h2>
          <p className="text-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Livros cuidadosamente selecionados por sua qualidade, relevância e valor 
            para quem ama cozinhar.
          </p>
        </div>

        {/* Featured Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredBooks.map((book, index) => (
            <div
              key={book.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
