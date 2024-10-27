import TableWrapper from "@/src/common/table/TableWrapper";
import AccountWidget from "@/src/components/page-components/accounts-widget/AccountsWidget";
import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import DoubleContentPage from "@/src/layouts/DoubleContentPage";
import QuickActionBar from "../src/components/quick-action-bar/QuickActionBar";

export default function Home() {
  const MainContent = () => {
    return (
      <div className="f col gap-lg">
        <QuickActionBar />
        <TableWrapper />
      </div>
    );
  };
  return (
    <main className="main w-100 f col a-s gap-lg">
      <ScreenHeader title="Smart Money" />
      <DoubleContentPage mainContent={<MainContent />} sideContent={<AccountWidget />} />
    </main>
  );
}
