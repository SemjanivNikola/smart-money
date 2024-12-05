"use client";

import s from "./status-filters.module.css";

const TableStatusFilterList = () => {
  return (
    <div className={s.statusFilterWrapper}>
      <button className={`${s.filter} ${s.active}`} onClick={() => {}}>
        All
      </button>
      <button className={`${s.filter}`} onClick={() => {}}>
        Finished
      </button>
      <button className={`${s.filter}`} onClick={() => {}}>
        Pending
      </button>
      <button className={`${s.filter}`} onClick={() => {}}>
        Scheduled
      </button>
    </div>
  );
};

export default TableStatusFilterList;
