import { fetchDashData } from "@/api/fetchDashData";
import PageScreen from "@/src/common/screen/PageScreen";
import Table from "@/src/common/table/Table";
import WalletWidget from "@/src/components/page-components/wallet-widget/WalletWidget";
import DoubleContentPage from "@/src/layouts/DoubleContentPage";
import QuickActionBar from "../../src/components/quick-action-bar/QuickActionBar";

export default async function Home() {
  const { wallet, transactions, tableHeader } = await fetchDashData();

  const MainContent = () => {
    return (
      <div className="h-100">
        <QuickActionBar />
        <div className="spacer-md" />
        {/* <TableWrapper /> */}
        <Table tableHeader={tableHeader} tableData={transactions.list} />
      </div>
    );
  };
  return (
    <PageScreen title="Smart Money">
      <DoubleContentPage.Divider
        mainContent={<MainContent />}
        sideContent={<WalletWidget widgetProps={wallet} />}
        sideContentBasis={20}
      />
    </PageScreen>
  );
}
