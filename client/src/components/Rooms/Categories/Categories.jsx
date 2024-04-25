import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryData";

const Categories = () => {
    return (
        <div>
            {categories.map(category => <CategoryBox key={category.label} label={category.label} icon={category.icon}/>)}
        </div>
    );
};

export default Categories;