import NavLink from "@/src/components/navigation/NavLink";
import Table from "./Table";
import { IconName } from "../icon/IconType";
import Link from "next/link";
import Icon from "../icon/Icon";

const Pill = ({ icon, text, href }: { icon: IconName; text: string; href: string }) => {
  return (
    <Link href={href} className="nav-link-pill">
      {text}
      <Icon name={icon} size={20} />
    </Link>
  );
};

const TableAction = () => {
  return (
    <div className="f a-c gap-s">
      <Pill text="Yesterday" icon="chevron-left" href="/" />
      <Pill text="See All" icon="chevron-left" href="/" />
    </div>
  );
};

const TableNestedWrapper = () => {
  return (
    <div className="py-m">
      <div className="f a-c j-sb gap-m" style={{ marginBottom: "var(--m)" }}>
        <h2>Last Transactions (USD)</h2>
        <TableAction />
      </div>
      {/* <Table tableHeader={} /> */}
    </div>
  );
};

export default TableNestedWrapper;
