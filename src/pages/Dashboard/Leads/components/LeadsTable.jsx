import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from "react";
import { leadsData, leadColumnDefs } from "../../../../data/LeadsData";
import LeadsActionBar from "./LeadsActionBar";

const LeadsTable = () => {
  const [rowData, setRowData] = useState(leadsData);
  const [colDefs, setColDefs] = useState(leadColumnDefs);

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
    };
  }, []);

  return (
    <div>
      <div>
      <LeadsActionBar />
      </div>
      <div className="m-4">
        <div className="ag-theme-quartz " style={{ height: 500}}>
          <AgGridReact
            rowData={rowData}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 20]}
            rowSelection={"multiple"}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      </div>
    </div>
  );
};

export default LeadsTable;