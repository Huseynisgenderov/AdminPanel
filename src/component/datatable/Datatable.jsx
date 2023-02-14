import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';  
import {userColums, userRows} from "../../datasource";


const Datatable = () => {

  const actionColumn = [
    {
      field:"action",
      headerName:"Action",
      width:200,
      renderCell:()=>{
        return (
          <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
          </div>
        )

      }
    }
  ]
  return (
    <div className="datatable">
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={userRows  }
          columns={userColums.concat(actionColumn)}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default Datatable;
