import ScreenHeader from "@/src/components/screen-header/ScreenHeader";
import ReceiptTemplate from "./ReceiptTemplate";
import Icon from "@/src/common/icon/Icon";

export default function TransactionDetailsPage() {
    return (
        <div className="screen">
            <ScreenHeader title="Transaction details" />
            <div className="f gap-m">
                <div className="card px-m py-m" style={{ flexGrow: 1 }}>
                    <div className="f a-c j-sb gap-m py-m" style={{ borderBottom: "1px solid var(--gray)" }}>
                        <div>01.05.2024</div>
                        <div style={{ fontSize: "var(--font-s)", fontStyle: "italic" }}>TOTAL <span style={{ display: "inline-block", fontSize: "var(--font-lg)", fontWeight: 500 }}>12,78$</span></div>
                        <div className="f a-c gap-s">
                            <Icon name="credit-card" color="var(--black)" />
                            CARD</div>
                    </div>
                    <div className="py-m">
                        <span style={{ fontSize: "var(--font-s)", fontStyle: "italic" }}>NOTE</span>
                        <div style={{ minHeight: 125, color: "var(--gray)" }}>Empty for this transaction.</div>
                    </div>
                    <div className="py-m">
                        <span style={{ fontSize: "var(--font-s)", fontStyle: "italic" }}>NOTE</span>
                        <span className="mb-m" style={{ fontSize: "var(--font-x/s)" }}>*Types with 0 amount are hidden</span>
                        <div className="f a-c gap-s pill mb-m" style={{ maxWidth: "35%", backgroundColor: "var(--primary-light)" }}>
                            <Icon name="credit-card" />
                            <span>Food</span>
                            <span>122,56</span>
                        </div>
                        <div className="f a-c gap-s pill mb-m" style={{ maxWidth: "35%", backgroundColor: "var(--primary-light)" }}>
                            <Icon name="credit-card" />
                            <span>Electronics</span>
                            <span>122,56</span>
                        </div>
                        <div className="f a-c gap-s pill mb-m" style={{ maxWidth: "35%", backgroundColor: "var(--primary-light)" }}>
                            <Icon name="credit-card" />
                            <span>Kitchen appliances</span>
                            <span>122,56</span>
                        </div>
                        <div className="f a-c gap-s pill mb-m" style={{ maxWidth: "35%", backgroundColor: "var(--primary-light)" }}>
                            <Icon name="credit-card" />
                            <span>Car</span>
                            <span>122,56</span>
                        </div>
                        <div className="f a-c gap-s pill mb-m" style={{ maxWidth: "35%", backgroundColor: "var(--primary-light)" }}>
                            <Icon name="credit-card" />
                            <span>Home</span>
                            <span>122,56</span>
                        </div>
                        <div className="f a-c gap-s pill mb-m" style={{ maxWidth: "35%", backgroundColor: "var(--primary-light)" }}>
                            <Icon name="credit-card" />
                            <span>Bike</span>
                            <span>122,56</span>
                        </div>
                        <div className="f a-c gap-s pill mb-m" style={{ maxWidth: "35%", backgroundColor: "var(--primary-light)" }}>
                            <Icon name="credit-card" />
                            <span>Bicycle</span>
                            <span>122,56</span>
                        </div>
                        <div className="f a-c gap-s pill mb-m" style={{ maxWidth: "35%", backgroundColor: "var(--primary-light)" }}>
                            <Icon name="credit-card" />
                            <span>Cleaning products</span>
                            <span>122,56</span>
                        </div>
                        <div className="f a-c gap-s pill mb-m" style={{ maxWidth: "35%", backgroundColor: "var(--primary-light)" }}>
                            <Icon name="credit-card" />
                            <span>Hobby</span>
                            <span>122,56</span>
                        </div>
                        <div className="f a-c gap-s pill mb-m" style={{ maxWidth: "35%", backgroundColor: "var(--primary-light)" }}>
                            <Icon name="credit-card" />
                            <span>Games</span>
                            <span>122,56</span>
                        </div>
                        <div className="f a-c gap-s pill mb-m" style={{ maxWidth: "35%", backgroundColor: "var(--primary-light)" }}>
                            <Icon name="credit-card" />
                            <span>Other</span>
                            <span>122,56</span>
                        </div>
                    </div>
                </div>
                <ReceiptTemplate />
            </div>
        </div >
    )
}