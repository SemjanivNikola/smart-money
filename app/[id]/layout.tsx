import SideBarNav from "@/src/components/navigation/SideBarNav";
import TopBarNav from "@/src/components/navigation/TopBarNav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="main-layout">
            <SideBarNav />
            <section className="content">
                <TopBarNav />
                {children}
            </section>
        </main>
    );
};

export default MainLayout;
