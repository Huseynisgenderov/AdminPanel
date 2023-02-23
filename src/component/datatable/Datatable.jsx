import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';  
import {userColums, userRows} from "../../datasource";
import {Link} from "react-router-dom";


const Datatable = () => {

  const actionColumn = [
    {
      field:"action",
      headerName:"Action",
      width:200,
      renderCell:()=>{
        return (
          <div className="cellAction">
            <Link to="/users/test" className="link">
            <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        )

      }
    }
  ]
  return (
    <div className="datatable">
      <div style={{ height: 500, width: "100%" }}>
        <div className="dataTableTitle">
          Add New User
          <Link to="/users/new">
          Add New
          </Link>
        </div>
        <DataGrid
        className="datagrid"
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
