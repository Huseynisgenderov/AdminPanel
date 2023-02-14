export const userColums = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return <div className="cell">{params.row.username}</div>;
    },
  },
    {
        field:"email",
        headerName:"Email",
        width:230
    },
    {
        field:"age",
        headerName:"Age",
        width:100   
    },
    {
        field:"status",
        headerName:"Status",
        width:160,
        renderCell: (params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }   
    },
]; 

export const userRows = [
  {
    id: 1,
    username: "Ali",
    age: 35,
    status: "active",
    email: "1snowgmail.com",
  },
  {
    id: 2,
    username: "Vusal",
    age: 42,
    status: "passive",
    email: "2snowgmail.com",
  },
  {
    id: 3,
    username: "Agasif",
    age: 45,
    status: "passive",
    email: "3snowgmail.com",
  },
  {
    id: 4,
    username: "Resul",
    age: 16,
    status: "active",
    email: "4snowgmail.com",
  },
  {
    id: 5,
    username: "Targaryen",
    age: 50,
    status: "active",
    email: "5snowgmail.com",
  },
  {
    id: 6,
    username: "Melisandre",
    age: 150,
    status: "passive",
    email: "6snowgmail.com",
  },
  {
    id: 7,
    username: "Clifford",
    age: 44,
    status: "active",
    email: "7snowgmail.com",
  },
  {
    id: 8,
    username: "Frances",
    age: 36,
    status: "active",
    email: "8snowgmail.com",
  },
  {
    id: 9,
    username: "Roxie",
    age: 65,
    status: "passive",
    email: "9snowgmail.com",
  },
];
