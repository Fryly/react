import React from 'react'
import filterColumn from './FilterColumn'
import './Table.css'
import { useTable, useFilters, useSortBy, usePagination, useRowSelect } from 'react-table'


function TableTwo( {items} ) {

    const getData = () => {
        const dataTable = []
        items.map( item => 
            item.tasks.map( curItem => 
                dataTable.push({
                    folder: item.name,
                    text: curItem.text,
                    deadline: curItem.deadline,
                })
                
            )
        )
        return dataTable
    }
    const data = React.useMemo(() => getData(), [items])
    const columns = React.useMemo(
        () => [
          {
            Header: 'Folder',
            accessor: 'folder', // accessor is the "key" in the data
          },
          {
            Header: 'Task',
            accessor: 'text',
          },
          {
            Header: 'Deadline',
            accessor: 'deadline',
          },
        ],
        []
      )

    const defaultColumn = React.useMemo(() => ({
            Filter: filterColumn,
        }),[]
     )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        setPageSize,
      } = useTable({ columns, data, defaultColumn }, useFilters, useSortBy, usePagination, useRowSelect)

    const { pageIndex, pageSize } = state

    return (
        <div className="Table-two">
            <table {...getTableProps()} className="Table">
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column, i) => (
                        <th className="Table-header" key={i}>  
                            <span
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                            // className="Table-title"
                            className={column.isSorted 
                                            ? column.isSortedDesc
                                                ? "Sort-bottom"
                                                : "Sort-top" 
                                            : ""
                                    }
                            >
                                {column.render('Header')}      
                            </span>
                            {column.canFilter ? column.render('Filter') : null}
                        </th>
                        ))}
                    </tr>
                    
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map(row => {
                    prepareRow(row)
                    return (
                        <tr className="Table-row" {...row.getRowProps()} >
                        {row.cells.map(cell => {
                            return (
                            <td
                                {...cell.getCellProps()}
                                className="Table-cell"
                            >
                                {cell.render('Cell')}
                            </td>
                            )
                        })}
                        </tr>
                    )
                    })}
                </tbody>
            </table>
            <div className="Table-footer">
                <button onClick={ () => previousPage()} disabled={!canPreviousPage}>Previous</button>
                <span>
                    Page {pageIndex + 1} of {pageOptions.length}
                </span>
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                    >
                    {[5,10, 20].map((pageSize, i) => (
                        <option key={i} value={pageSize}>
                        Show {pageSize}
                        </option>
                    ))}
                </select>
                <button onClick={ () => nextPage()} disabled={!canNextPage}>Next</button>
            </div>
        </div>
    )
}

export default TableTwo
