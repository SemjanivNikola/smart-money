import PageScreen from "@/src/common/screen/PageScreen";
import TableWrapper from "@/src/common/table/TableWrapper";
import AccountWidget from "@/src/components/page-components/accounts-widget/AccountsWidget";
import DoubleContentPage from "@/src/layouts/DoubleContentPage";
import QuickActionBar from "../../src/components/quick-action-bar/QuickActionBar";

export default function Home() {
  const MainContent = () => {
    return (
      <div className="h-100">
        <QuickActionBar />
        <div className="spacer-md" />
        <TableWrapper />
      </div>
    );
  };
  return (
    <PageScreen title="Smart Money">
      <DoubleContentPage.Divider mainContent={<MainContent />} sideContent={<AccountWidget />} sideContentBasis={20} />
    </PageScreen>
  );
}
