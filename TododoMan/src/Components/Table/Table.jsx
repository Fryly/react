import React from 'react'
import './Table.css'
import { DataGrid, GridToolbar } from '@material-ui/data-grid';

const columns = [
    {
      field: 'folder',
      headerName: 'Folder',
      width: 220,
    },
    {
      field: 'text',
      headerName: 'Task',
      width: 220,
    },
    {
      field: 'deadline',
      headerName: 'Deadline',
      width: 220,
    },
  ];

function Table({ items }) {

    const [pageSize, setPageSize] = React.useState(5);

    const getData = () => {
        const dataTable = []
        items.map( item => 
            item.tasks.map( curItem => 
                dataTable.push({
                    id: curItem.text,
                    folder: item.name,
                    text: curItem.text,
                    deadline: curItem.deadline,
                })
            )
        )
        return dataTable
    }

    const handlePageSizeChange = (params) => {
        setPageSize(params.pageSize);
    };

    return (
        <div className="Table-block" style={{
            textAlign: "center"
          }}>
            <DataGrid
                rows={getData()}
                columns={columns}
                pageSize={pageSize}
                components={{
                    Toolbar: GridToolbar,
                }}
                onPageSizeChange={handlePageSizeChange}
                rowsPerPageOptions={[5, 10, 20]}
                disableColumnMenu
                autoHeight
                pagination
                disableSelectionOnClick
            />
        </div>
    )
}

export default Table
