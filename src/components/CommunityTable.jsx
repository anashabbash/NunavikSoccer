import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";

function createData(community, facilities, programming, coaches) {
  return { community, facilities, programming, coaches };
}

const rows = [
  createData("Akulivik", 2, "NOT", 0),
  createData("Aupaluk", 2, "NOT", 0),
  createData("Inukjuak", 3, "NOT", 0),
  createData("Ivujivik", 2, "NOT", 0),
  createData("Kangiqsuallujuaq", 2, "NOT", 0),
  createData("Kangiqsujuaq", 2, "NOT", 0),
  createData("Kangirsuq", 2, "Yes", 4),
  createData("Kuujjuaq", 4, "Yes", 4),
  createData("Kuujjuaraapik", 2, "NOT", 0),
  createData("Puvirnituq", 3, "NOT", 0),
  createData("Quaqtaq", 2, "NOT", 0),
  createData("Salluit", 3, "Yes", 4),
  createData("Tasiujaq", 2, "NOT", 0),
  createData("Umiujuaq", 2, "NOT", 0),
];

export default function CommunityTable() {
  return (
    <TableContainer component={Card}>
      <Table
        sx={{ minWidth: 450 }}
        style={{ fontSize: "1.2rem" }}
        stickyHeader={true}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>COMMUNITY</TableCell>
            <TableCell align="right">FACILITIES</TableCell>
            <TableCell align="right">PROGRAMMING</TableCell>
            <TableCell align="right">COACHES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.community}
              </TableCell>
              <TableCell align="right">{row.facilities}</TableCell>
              <TableCell align="right">{row.programming}</TableCell>
              <TableCell align="right">{row.coaches}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
