import VisaLogo from "@/src/common/icon/VisaLogo";
import style from "./virtualAccounts.module.css";

const VirtualAccounts = () => {
    return (
        <div className="p-1">
            <h2 className="pb-1">Virtual Accounts</h2>
            <div className="flex-row">
                <div className={style.card}>
                    <span>Car saving</span>
                    <span className={style.balance}>
                        15 000<small>€</small>
                    </span>
                    <span className="block pb-1">
                        <b>**** **** **** 1234</b>
                    </span>
                    <div className="flex-row justify-even align-center">
                        <div className="flex-col">
                            <span className={style.desc}>Holder name</span>
                            <span>
                                <b>John Doe</b>
                            </span>
                        </div>
                        <div className="flex-col">
                            <span className={style.desc}>Expiress</span>
                            <span>
                                <b>05/25</b>
                            </span>
                        </div>
                        <VisaLogo size={56} fill="#fff" />
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default VirtualAccounts;
