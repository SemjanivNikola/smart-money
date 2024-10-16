import Pill from "@/src/common/pill/Pill";
import NavButton from "./NavButton";
import NavLink from "./NavLink";
import QuickTransfer from "./QuickTransfer";

const SideBarNav = () => {
  return (
    <section className="nav-wrapper">
      <div className="py-m px-m">
        <h1>Smart Money</h1>
        <Pill text="Personal" />
      </div>
      <div className="spacer-md" />
      <div className="py-m">
        {/* <span className="nav-section-title">General</span> */}
        <NavLink icon="dashboard" title="Overview" href="/" />
        <NavLink icon="credit-card" title="Accounts" href="/accounts" />
        <NavLink icon="credit-card" title="Payments" href="/payments" />
        <NavLink icon="credit-card" title="Cards" href="/cards" />
        <NavLink icon="chart" title="Analytics" href="/analytics" />
        <NavLink icon="chart" title="Investments" href="/investments" />
        <NavLink icon="chart" title="Crypto" href="/crypto" />
        <NavLink icon="chart" title="Help Center" href="/help-center" />
        <NavLink icon="chart" title="Transactions" href="/transactions" />
      </div>
      <QuickTransfer />
    </section>
  );
};

export default SideBarNav;
