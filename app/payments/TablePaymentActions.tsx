import Icon from "@/src/common/icon/Icon";
import { IconName } from "@/src/common/icon/IconType";
import Link from "next/link";
import TableTabs from "./TableTabs";
import TableStatusFilterList from "./TableStatusFilterList";

const Pill = ({ icon, text, href }: { icon: IconName; text: string; href: string }) => {
  return (
    <Link href={href} className="nav-link-pill">
      {text}
      <Icon name={icon} size={20} />
    </Link>
  );
};

const PillAction = ({ icon, text, href }: { icon: IconName; text: string; href: string }) => {
  return (
    <Link href={href} className="nav-link-pill action">
      <Icon name={icon} size={20} color="var(--primary)" />
      {text}
    </Link>
  );
};

const ActionWrapper = () => {
  return (
    <div className="f a-c gap-s">
      <TableStatusFilterList />
      <PillAction text="New payment" icon="chevron-left" href="/" />
      <PillAction text="Bulk payment" icon="chevron-left" href="/" />
      <Pill text="See All" icon="chevron-left" href="/" />
    </div>
  );
};

const TablePaymentActions = () => {
  return (
    <div className="f a-c j-sb gap-m" style={{ marginBottom: "var(--m)" }}>
      <TableTabs />
      <ActionWrapper />
    </div>
  );
};

export default TablePaymentActions;
