import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import { ReactElement } from "react";

const PageScreen = ({ title, children }: { title: string; children: ReactElement }) => {
  return (
    <main className="screen">
      <ScreenHeader title={title} />
      <div className="screen-content">{children}</div>
    </main>
  );
};

export default PageScreen;
