import Icon from "@/src/common/icon/Icon";
import s from "./transactions-table.module.css"

const TransactionsTable = () => {
    return (
        <table className={s.table}>
            <thead>
                <tr className={s.tttr}>
                    <th className={s.ttth}></th>
                    <th className={`${s.ttth} text-left`}>Last transaction</th>
                    <th className={s.ttth}>Date</th>
                    <th className={s.ttth}>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr className="px-m">
                    <td><span className="mx-auto" style={{ width: "24px" }}><Icon name="account" color="var(--black)" /></span></td>
                    <td className="text-left">Clothes<span>Shose</span></td>
                    <td className="text-center">120€</td>
                    <td className="text-center">27.04.</td>
                </tr>
                <tr className="px-m">
                    <td><span className="mx-auto" style={{ width: "24px" }}><Icon name="account" color="var(--black)" /></span></td>
                    <td className="text-left">Clothes<span>Shose</span></td>
                    <td className="text-center">120€</td>
                    <td className="text-center">27.04.</td>
                </tr>
                <tr className="px-m">
                    <td><span className="mx-auto" style={{ width: "24px" }}><Icon name="account" color="var(--black)" /></span></td>
                    <td className="text-left">Clothes<span>Shose</span></td>
                    <td className="text-center">120€</td>
                    <td className="text-center">27.04.</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TransactionsTable;