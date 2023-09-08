import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import styles from "./InternSearch.module.css";
import ToggleComponent from "./ToggleComponent";

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

const rows = [
  {
    id: 1,
    album: "album",
    motiv: "motiv",
    dato: "dato",
    type: "type",
    sted: "sted",
    oppslag: "oppslag",
    rettighet: "boss",
    scannet: "nei",
    bilde: "url",
    endre: "endre/slett",
  },
  {
    id: 2,
    album: "album",
    motiv: "motiv",
    dato: "dato",
    type: "type",
    sted: "sted",
    oppslag: "oppslag",
    rettighet: "boss",
    scannet: "nei",
    bilde: "url",
    endre: "endre/slett",
  },
  {
    id: 3,
    album: "album",
    motiv: "motiv",
    dato: "dato",
    type: "type",
    sted: "sted",
    oppslag: "oppslag",
    rettighet: "boss",
    scannet: "nei",
    bilde: "url",
    endre: "endre/slett",
  },
  {
    id: 4,
    album: "album",
    motiv: "motiv",
    dato: "dato",
    type: "type",
    sted: "sted",
    oppslag: "oppslag",
    rettighet: "boss",
    scannet: "nei",
    bilde: "url",
    endre: "endre/slett",
  },
  {
    id: 5,
    album: "album",
    motiv: "motiv",
    dato: "dato",
    type: "type",
    sted: "sted",
    oppslag: "oppslag",
    rettighet: "boss",
    scannet: "nei",
    bilde: "url",
    endre: "endre/slett",
  },
  {
    id: 6,
    album: "album",
    motiv: "motiv",
    dato: "dato",
    type: "type",
    sted: "sted",
    oppslag: "oppslag",
    rettighet: "boss",
    scannet: "nei",
    bilde: "url",
    endre: "endre/slett",
  },
  // ... more rows
];

const rowsPerPageOptions = [5, 10, 25];

const CustomTable = () => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(rowsPerPageOptions[0]);

  const handleChangePage = (event: any, newPage: any) => {
    setPage(newPage);
  };
  const [isGrid, setIsGrid] = useState(true);
  const handleChange = () => {
    setIsGrid(!isGrid);
  };

  const emptyRows = Math.max(0, page * rowsPerPage - rows.length);

  return (
    <Paper>
      <div className={styles.toggleHeader}>
        <div className={styles.pagination}>
          <Pagination
            count={Math.ceil(rows.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
        </div>
        <div className={styles.toggleComponent}>
          <ToggleComponent
            value={isGrid ? "Grid" : "List"}
            onChange={handleChange}
          />
        </div>
      </div>
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
                    <TableCell key={column.id}>
                      {row[column.id as keyof typeof row]}
                    </TableCell>
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
      <div className={styles.pagination2}>
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
