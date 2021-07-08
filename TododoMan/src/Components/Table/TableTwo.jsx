import React from 'react'
import filterColumn from './FilterColumn'
import './Table.css'
import classNames from 'classnames';
import { useTable, useFilters, useSortBy, usePagination, useRowSelect } from 'react-table'
import { column } from '../Util/Constants'


function TableTwo( {items} ) {

    const getData = () => {
        const dataTable = items.reduce( (acc, item) => {
            for ( let m = 0; m < item.tasks.length; m++){
                acc.push({
                    folder: item.name,
                    text: item.tasks[m].text,
                    deadline: item.tasks[m].deadline,
                })
            }
            return acc
        },[])
        return dataTable
    }
    const data = React.useMemo(() => getData(), [])
    const columns = React.useMemo(() => column, [])

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
      } = useTable({ columns, data, defaultColumn }, useFilters, useSortBy, usePagination, useRowSelect )

    const { pageIndex, pageSize } = state

    return (
        <div className="Table-two">
            <table {...getTableProps()} className="Table">
                <thead>
                    {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column, i) => (
                        <th className="Table-header" key={i} >  
                            <span
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                            className={column.isSorted 
                                            ? column.isSortedDesc
                                                ? "Sort-bottom"
                                                : "Sort-top" 
                                            : ""
                                    }
                            >
                                {column.render('Header')}      
                            </span>
                            {column.canFilter ? column.render('Filter')  : null}
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
                <button onClick={ () => previousPage() } disabled={!canPreviousPage}>Previous</button>
                <span>
                    Page {pageIndex + 1} of {pageOptions.length}
                </span>
                <div className="Table-footer__button">
                    {
                        [5, 10, 20].map((item, i) => (
                            <div 
                                key={i} 
                                onClick={() => {
                                    setPageSize(item);
                                }}
                                className={
                                    classNames(
                                        "Button-page",
                                        {
                                            'Active-page' : pageSize === item
                                        }
                                    )
                                }
                            >
                                {item}
                            </div>
                        ))
                    }
                </div>
                <button onClick={ () => nextPage() } disabled={!canNextPage}>Next</button>
            </div>
        </div>
    )
}

export default TableTwo
