import { cn } from "@/lib/utils";
import { categories, type Category } from "@/data/books";

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
            selectedCategory === category
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-secondary/60 text-secondary-foreground hover:bg-secondary"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
