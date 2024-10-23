import { IconName } from "@/src/common/icon/IconType";
import QuickActionLink from "./QuickActionLink";
import "./quick-action.css";

type QuickActionList = {
  text: string;
  url: string;
  icon: IconName;
}[];

const quickActionList: QuickActionList = [
  { text: "Add money", url: "/", icon: "plus" },
  { text: "Send money", url: "/", icon: "plus" },
  { text: "Request", url: "/", icon: "plus" },
  { text: "Exchange", url: "/", icon: "plus" },
  { text: "Statement", url: "/", icon: "plus" },
  { text: "Account details", url: "/", icon: "plus" },
];

const QuickActionBar = () => {
  return (
    <div className="f a-c j-s gap-xs" style={{ flexGrow: 1 }}>
      {quickActionList.map((item) => (
        <QuickActionLink key={item.text} {...item} />
      ))}
    </div>
  );
};

export default QuickActionBar;
