import Icon from "../icon/Icon";
import s from "./Table.module.css"

const Table = () => {
    return (
        <div className="card px-m py-m">

            <table className={s.mainTable}>
                <thead style={{ borderBottom: "1px solid red" }}>
                    <tr className={s.thRow}><th></th>
                        <th>#</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Store</th>
                        <th>Type</th></tr>
                </thead>
                <tbody>
                    <tr><td><Icon name="plus" color="black" size={14} /></td><td>1.</td><td>24.09.</td><td>19.45</td><td>Konzum</td><td>Groceries</td></tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;