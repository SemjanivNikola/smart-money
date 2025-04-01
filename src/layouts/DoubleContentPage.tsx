import { ReactElement } from "react";
import "./double-content.css";

type DoubleContentPageProps = {
  mainContent: ReactElement;
  sideContent: ReactElement;
  reverse?: boolean;
  mainContentBasis?: number;
  sideContentBasis?: number;
};

const MAX_BASIS = 100;
const DEFAULT_BASIS = 50;

const DoubleContentPage = ({
  mainContent,
  sideContent,
  reverse = false,
  mainContentBasis = DEFAULT_BASIS,
  sideContentBasis = DEFAULT_BASIS,
}: DoubleContentPageProps) => {
  let mcb = mainContentBasis,
    scb = sideContentBasis;
  let className = "double-content f a-s gap-m w-100 h-100";
  if (reverse) className += " row-reverse";

  if (mainContentBasis != DEFAULT_BASIS) scb = MAX_BASIS - mainContentBasis;
  else if (sideContentBasis != DEFAULT_BASIS) mcb = MAX_BASIS - sideContentBasis;

  return (
    <div className={className}>
      <div style={{ flexBasis: `${mcb}%` }}>{mainContent}</div>
      <div style={{ flexBasis: `${scb}%` }}>{sideContent}</div>
    </div>
  );
};

const DoubleContentWithDivider = ({
  mainContent,
  sideContent,
  reverse = false,
  mainContentBasis = DEFAULT_BASIS,
  sideContentBasis = DEFAULT_BASIS,
}: DoubleContentPageProps) => {
  let mcb = mainContentBasis,
    scb = sideContentBasis;
  let className = "double-content f a-s w-100";
  if (reverse) className += " row-reverse";

  if (mainContentBasis != DEFAULT_BASIS) scb = MAX_BASIS - mainContentBasis;
  else if (sideContentBasis != DEFAULT_BASIS) mcb = MAX_BASIS - sideContentBasis;

  return (
    <div className={className}>
      <div style={{ flexBasis: `${mcb}%` }}>{mainContent}</div>
      <div className="screen-content-divider" />
      <div style={{ flexBasis: `${scb}%` }}>{sideContent}</div>
    </div>
  );
};

DoubleContentPage.Divider = DoubleContentWithDivider;


export default DoubleContentPage;
