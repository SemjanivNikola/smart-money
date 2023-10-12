import SideBarNav from "@/src/components/navigation/SideBarNav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="main-layout">
            <SideBarNav />
            <section className="content">{children}</section>
        </main>
    );
};

export default MainLayout;
