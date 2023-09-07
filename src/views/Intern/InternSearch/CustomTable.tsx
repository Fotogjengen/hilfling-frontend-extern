import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import styles from "./InternSearch.module.css";

const columns = [
  { id: "album", label: "Album" },
  { id: "motiv", label: "Motiv" },
  { id: "dato", label: "Dato" },
  { id: "type", label: "Type" },
  { id: "sted", label: "Sted" },
  { id: "oppslag", label: "Oppslag" },
  { id: "rettighet", label: "Rettighet" },
  { id: "scannet", label: "Scannet" },
  { id: "bilde", label: "Bilde" },
  { id: "endre", label: "Endre" },
];

const rowsPerPageOptions = [5, 10, 25];

const rows = [
  {
    album: "album",
    motiv: "motiv",
    dato: "dato",
    type: "type",
    sted: "sted",
    oppslag: "oppslag",
    rettighet: "boss",
    scannet: "nei",
    bilde: "ja",
    endre: "endre/slett",
  },
  // ... more rows
];

const CustomTable = () => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const emptyRows = Math.max(0, page * rowsPerPage - rows.length);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice((page - 1) * rowsPerPage, page * rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={columns.length} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.pagination}>
        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </div>
    </Paper>
  );
};

export default CustomTable;
