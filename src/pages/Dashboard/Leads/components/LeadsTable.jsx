import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { useMemo, useState } from "react";
import { leadsData, leadColumnDefs } from "../../../../data/LeadsData";
import LeadsActionBar from "./LeadsActionBar";
import { useNavigate } from "react-router-dom";

const LeadsTable = () => {
  const [rowData, setRowData] = useState(leadsData);
  const [colDefs, setColDefs] = useState(leadColumnDefs);
  const navigate = useNavigate();

  const defaultColDef = useMemo(() => {
    return {
      filter: true,
    };
  }, []);

  const handleRowClick = (e) => {
    const leadId = e.data.id;
    navigate(`leads/${leadId}`);
  }

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
            onRowClicked={handleRowClick}
          />
        </div>
      </div>
    </div>
  );
};

export default LeadsTable;