import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import QuickActionBar from "../src/components/quick-action-bar/QuickActionBar";
import DoubleContentPage from "@/src/layouts/DoubleContentPage";
import AccountWidget from "@/src/components/page-components/accounts-widget/AccountsWidget";

export default function Home() {
  return (
    <main className="main w-100 f col a-s gap-lg">
      <ScreenHeader title="Smart Money" />
      <DoubleContentPage mainContent={<QuickActionBar />} sideContent={<AccountWidget />} />
    </main>
  );
}
