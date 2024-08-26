import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from "react";
import { accountsData, accountColumnDefs } from "../../../../data/AccountsData";

const AccountsTable = () => {
  const [rowData, setRowData] = useState(accountsData);
  const [colDefs, setColDefs] = useState(accountColumnDefs);

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
    };
  }, []);

  return (
    <div className="m-4">
      <div className="ag-theme-quartz" style={{ height: 500 }}>
        <AgGridReact
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
          paginationPageSizeSelector={[10,20]}
          rowSelection={"multiple"}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  );
};

export default AccountsTable;
