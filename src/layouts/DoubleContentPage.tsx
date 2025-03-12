import { ReactElement } from "react";
import "./double-content.css";

const DoubleContentPage = ({
  mainContent,
  sideContent,
  reverse = false,
}: {
  mainContent: ReactElement;
  sideContent: ReactElement;
  reverse?: boolean;
}) => {
  let className = "double-content f a-s w-100";
  if (reverse) className += " row-reverse";

  return (
    <div className={className}>
      {mainContent}
      <div className="screen-content-divider" />
      {sideContent}
    </div>
  );
};

export default DoubleContentPage;
