"use clinet";

import Icon from "@/src/common/icon/Icon";
import "./category.css";

const Category = ({ text }: { text: string }) => {
  return (
    <button className="quick-action-link f col a-c gap-lg px-m" style={{ borderRadius: "var(--border-radius-s)" }}>
      <div className="icon-bg f a-c j-c">
        <Icon name="plus" />
      </div>
      <p>{text}</p>
    </button>
  );
};

export default Category;
