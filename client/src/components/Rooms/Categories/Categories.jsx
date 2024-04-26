import Container from "../../Shared/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryData";

const Categories = () => {
  return (
    <Container>
      <div className="py-3 flex items-center justify-between overflow-auto">
        {categories.map((category) => (
          <CategoryBox
            key={category.label}
            label={category.label}
            icon={category.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
