import { ReactElement } from "react";
import "./double-content.css";

type DoubleContentPageProps = {
  mainContent: ReactElement;
  sideContent: ReactElement;
  reverse?: boolean;
  mainContentBasis?: number;
  sideContentBasis?: number;
};

const DoubleContentPage = ({
  mainContent,
  sideContent,
  reverse = false,
  mainContentBasis = 50,
  sideContentBasis = 50,
}: DoubleContentPageProps) => {
  let className = "double-content f a-s gap-m w-100 h-100";
  if (reverse) className += " row-reverse";

  return (
    <div className={className}>
      <div style={{ flexBasis: `${mainContentBasis}%` }}>{mainContent}</div>
      <div style={{ flexBasis: `${sideContentBasis}%` }}>{sideContent}</div>
    </div>
  );
};

const DoubleContentWithDivider = ({
  mainContent,
  sideContent,
  reverse = false,
  mainContentBasis = 50,
  sideContentBasis = 50,
}: DoubleContentPageProps) => {
  let className = "double-content f a-s w-100";
  if (reverse) className += " row-reverse";

  return (
    <div className={className}>
      <div style={{ flexBasis: `${mainContentBasis}%` }}>{mainContent}</div>
      <div className="screen-content-divider" />
      <div style={{ flexBasis: `${sideContentBasis}%` }}>{sideContent}</div>
    </div>
  );
};

DoubleContentPage.Divider = DoubleContentWithDivider;


export default DoubleContentPage;
