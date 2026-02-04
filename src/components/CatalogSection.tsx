import { useState, useMemo } from "react";
import BookCard from "./BookCard";
import CategoryFilter from "./CategoryFilter";
import { books, type Category } from "@/data/books";

interface CatalogSectionProps {
  searchQuery: string;
}

const CatalogSection = ({ searchQuery }: CatalogSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Todos");

  const filteredBooks = useMemo(() => {
    let result = books;

    // Filter by category
    if (selectedCategory !== "Todos") {
      result = result.filter((book) => book.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.description.toLowerCase().includes(query)
      );
    }

    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalogo" className="section-padding">
      <div className="container-wide mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-caption uppercase tracking-[0.2em] mb-3">
            Nossa Coleção
          </p>
          <h2 className="text-headline text-foreground">
            Catálogo Completo
          </h2>
          <p className="text-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Explore todos os títulos disponíveis em nossa curadoria de livros de receitas.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-10">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <p className="text-center text-muted-foreground mb-8">
            {filteredBooks.length} resultado{filteredBooks.length !== 1 ? "s" : ""} para "{searchQuery}"
          </p>
        )}

        {/* Books Grid */}
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredBooks.map((book, index) => (
              <div
                key={book.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <BookCard book={book} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Nenhum livro encontrado.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Tente buscar por outro termo ou categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogSection;
