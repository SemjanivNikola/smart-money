import NavButton from "./NavButton";
import NavLink from "./NavLink";

const SideBarNav = () => {
    return (
        <section className="nav-wrapper px-m py-xl">
            <h1>Smart Money</h1>
            <div className="spacer-md" />
            <div className="py-xl">
                <span className="nav-section-title">General</span>
                <NavLink
                    icon="dashboard"
                    title="Dashboard"
                    href="/dashboard"
                />
                <NavLink icon="credit-card" title="Virtual Accounts" href="/" />
                <NavLink icon="chart" title="Analytics" href="/" />
                <NavLink icon="chart" title="Transactions" href="/" />
            </div>
            <div className="py-xl">
                <span className="nav-section-title">System</span>
                <NavLink icon="cog-outlined" title="Settings" href="/" />
            </div>
            <div className="py-xl">
                <span className="nav-section-title">Portfolio</span>
                <span className="nav-section-title">Cash</span>
                {/* List of bank holding, savings and cash in hand */}
            </div>
            <NavButton icon="signout" title="Sign out" />
        </section>
    );
};

export default SideBarNav;
