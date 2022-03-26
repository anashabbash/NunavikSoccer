import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";

function createData(ageGroup, numCoaches, coachingQualif) {
  return { ageGroup, numCoaches, coachingQualif };
}

const rows = [
  createData(
    "0-4",
    "Participation of trained parents ; 1-2 animators",
    "S2, S3, S7 "
  ),
  createData(
    "4-6",
    "1-2 coaches (with the participation of parents) *",
    "S3 / S7, Physical Literacy"
  ),
  createData(
    "6-7",
    "1 trainer (with 1 assistant trainer for 10 children) *",
    "S2, S3, S7, Physical Literacy, Children's License (by 2025) "
  ),
  createData(
    "8-9",
    "1 trainer (with 1 assistant trainer for 10 children)",
    "S2, S3, S7, Physical Literacy, Children's License (by 2025)"
  ),
  createData(
    "10-11",
    "1 trainer (with 1 assistant trainer for 10 children) *",
    "S7, Physical Literacy, Children's License (by 2025)"
  ),
  createData(
    "12-15",
    "1 coach (with 1 assistant trainer for 10 children) *",
    "License C, License B "
  ),
  createData(
    "16-17",
    "1 coach (with 1 assistant trainer for 10 children) *",
    "Lic B License A (2025)"
  ),
  createData(
    "18+",
    "1 coach ( with 1 player assistant-coach for 10 players )",
    "Lic B License A (2025)"
  ),
  createData(
    "35+ (active for life)",
    "1 player coach with 1 assistant player coach *",
    "S7, Lic C / B, Physical Literacy"
  ),
  createData(
    "50+ (active for life)",
    "1 coach with 1 player-assistant *",
    "S2, S7 + with specific training in physical literacy, geriatric physical preparation)"
  ),
];

export default function AgeGroupTable() {
  return (
    <div>
      <TableContainer component={Card}>
        <Table
          sx={{ minWidth: 450 }}
          style={{ fontSize: "1.2rem" }}
          stickyHeader={true}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Age group (biological age)</TableCell>
              <TableCell>Number of coaches needed (per community)</TableCell>
              <TableCell>Coaching Qualifications</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ageGroup}
                </TableCell>
                <TableCell>{row.numCoaches}</TableCell>
                <TableCell>{row.coachingQualif}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      * Coaches can work with more than one age group
    </div>
  );
}
