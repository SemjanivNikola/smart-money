import NavButton from "./NavButton";
import NavLink from "./NavLink";

const SideBarNav = () => {
    return (
        <section className="nav-wrapper px-1 py-2">
            <h1>Smart Money</h1>
            <div className="spacer-md"></div>
            <div className="py-2">
                <span className="nav-section-title">General</span>
                <NavLink
                    icon="dashboard"
                    title="Dashboard"
                    href="/9283298th/dashboard"
                />
                <NavLink icon="credit-card" title="Virtual Accounts" href="/" />
                <NavLink icon="chart" title="Analytics" href="/" />
            </div>
            <div className="py-2">
                <span className="nav-section-title">System</span>
                <NavLink icon="cog-outlined" title="Settings" href="/" />
            </div>
            <NavButton icon="signout" title="Sign out" />
        </section>
    );
};

export default SideBarNav;
