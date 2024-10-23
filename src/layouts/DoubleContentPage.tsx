import { ReactElement } from "react";
import "./double-content.css";

const DoubleContentPage = ({ mainContent, sideContent }: { mainContent: ReactElement; sideContent: ReactElement }) => {
  return (
    <div className="double-content f a-s w-100">
      {mainContent}
      <div className="screen-content-divider" />
      {sideContent}
    </div>
  );
};

export default DoubleContentPage;
