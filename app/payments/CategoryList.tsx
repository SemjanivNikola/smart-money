import Category from "./Category";

const CategoryList = () => {
  return (
    <div>
      <h2>Categories</h2>
      <div className="f a-c gap-s py-m">
        <Category text="Mobile connection" />
        <Category text="Internet and TV" />
        <Category text="Games" />
        <Category text="Groceries" />
        <Category text="Loans repayment" />
        <Category text="Utility" />
        <Category text="Insurance" />
        <Category text="Education" />
        <Category text="Travel and vacation" />
        <Category text="Fines and violations" />
      </div>
    </div>
  );
};

export default CategoryList;
