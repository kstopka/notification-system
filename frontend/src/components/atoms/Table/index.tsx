import { useTable } from "react-table";
import { ITableProps } from "./types";
import "./style.css";

const Table = ({ columns, data }: ITableProps): JSX.Element => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="TableWrapper">
      {/* <div className="WrapperButtons">
        <button  onClick={() => handleAddPart()}>
          Dodaj Część
        </button>
        <button onClick={() => handleAddMaterial()}>
          Dodaj Materiał
        </button>
      </div> */}
      <table {...getTableProps()} className="Table">
        <thead className="TableHead">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td data-label={cell.column} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div className="WrapperButtons">
        <button  onClick={() => handleAddPart()}>
          Dodaj Część
        </button>
        <button  onClick={() => handleAddMaterial()}>
          Dodaj Materiał
        </button>
      </div> */}
    </div>
  );
};

export default Table;
