import * as React from "react";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";

//Data Creation
function createData(
  id: number,
  name: string,
  description: string,
  level: string,
  cve: string,
  cvss: number,
  solution: string,
  os: string,
  riskLevel: number
) {
  return {
    id,
    name,
    description,
    level,
    cve,
    cvss,
    solution,
    os,
    riskLevel,
    details: [
      {
        date: "2020-01-05",
        description: "ryslog threat",
        cvss: 9.3,
        riskLevel: 8,
      },
      {
        date: "2020-01-02",
        description: "SQL Injection",
        cvss: 7.6,
        riskLevel: 6,
      },
    ],
  };
}
//while rss rows+= createData(rss)
const rows = [
  createData(
    1,
    "Ryslog: Threat 1",
    "Description for Threat 1",
    "High",
    "CVE-2014-3634",
    7.6,
    "Update to Version 8.4.1",
    "UNIX, Linux",
    6
  ),
  createData(
    2,
    "Ryslog: Threat 2",
    "Description for Threat 2",
    "Medium",
    "CVE-2014-3635",
    6.5,
    "Update to Version 8.4.2",
    "Windows",
    5
  ),
  createData(
    3,
    "Ryslog: Threat 3",
    "Description for Threat 3",
    "Low",
    "CVE-2014-3636",
    5.5,
    "Update to Version 8.4.3",
    "Mac",
    4
  ),
  createData(
    3,
    "Ryslog: Threat 3",
    "Description for Threat 3",
    "Low",
    "CVE-2014-3636",
    5.5,
    "Update to Version 8.4.3",
    "Mac",
    4
  ),
  createData(
    3,
    "Ryslog: Threat 3",
    "Description for Threat 3",
    "Low",
    "CVE-2014-3636",
    5.5,
    "Update to Version 8.4.3",
    "Mac",
    4
  ),
  // Add more unique rows if needed
];

//Table Construction
function Row(props: { row: any; index: any; columnsVisibility: any }) {
  const { row, index, columnsVisibility } = props;
  const [open, setOpen] = React.useState(false);
  const backgroundColor = index % 2 === 0 ? "#a9a9a9" : "#e6e6e6";
  const collapseBackgroundColor = "#fafafa";
  const borderedCellStyle = { borderRight: "1px solid rgba(30, 30, 30, 30)" };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen: any = (event: {
    currentTarget: React.SetStateAction<null>;
  }) => {
    if (event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <TableRow style={{ backgroundColor }}>
        <TableCell style={borderedCellStyle}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <IconButton
            aria-label="show actions"
            size="small"
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Delete Entry</MenuItem>
            {/* Funktionen für Optionen noch erstellen (handleOptDelete, handleOptHelp,...)*/}
            <MenuItem onClick={handleMenuClose}>Help</MenuItem>
            <MenuItem onClick={handleMenuClose}>Pin</MenuItem>
          </Menu>
        </TableCell>

        {columnsVisibility.name && (
          <TableCell style={borderedCellStyle} component="th" scope="row">
            {row.name}
          </TableCell>
        )}
        {columnsVisibility.description && (
          <TableCell align="right" style={borderedCellStyle}>
            {row.description}
          </TableCell>
        )}
        {columnsVisibility.level && (
          <TableCell align="right" style={borderedCellStyle}>
            {row.level}
          </TableCell>
        )}
        {columnsVisibility.cve && (
          <TableCell align="right" style={borderedCellStyle}>
            {row.cve}
          </TableCell>
        )}
        {columnsVisibility.cvss && (
          <TableCell align="right" style={borderedCellStyle}>
            {row.cvss}
          </TableCell>
        )}
        {columnsVisibility.solution && (
          <TableCell align="right" style={borderedCellStyle}>
            {row.solution}
          </TableCell>
        )}
        {columnsVisibility.os && (
          <TableCell align="right" style={borderedCellStyle}>
            {row.os}
          </TableCell>
        )}
        {columnsVisibility.riskLevel && (
          <TableCell align="right">{row.riskLevel}</TableCell>
        )}
      </TableRow>
      <TableRow style={{ backgroundColor: collapseBackgroundColor }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date Added</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">cvss</TableCell>
                    <TableCell align="right">risk level</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRow: any) => (
                    <TableRow key={detailsRow.date}>
                      <TableCell component="th" scope="row">
                        {detailsRow.date}
                      </TableCell>
                      <TableCell>{detailsRow.description}</TableCell>
                      <TableCell align="right">{detailsRow.cvss}</TableCell>
                      <TableCell align="right">
                        {detailsRow.riskLevel}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ColTab2() {
  const [columnsVisibility, setColumnsVisibility] = React.useState({
    name: true,
    description: true,
    level: true,
    cve: true,
    cvss: true,
    solution: true,
    os: true,
    riskLevel: true,
  });

  const [anchorElColumns, setAnchorElColumns] = React.useState(null);

  const handleClickColumnsMenu = (event: {
    currentTarget: React.SetStateAction<null>;
  }) => {
    setAnchorElColumns(event.currentTarget);
  };

  const handleCloseColumnsMenu = () => {
    setAnchorElColumns(null);
  };

  const toggleColumnVisibility = (column: string) => {
    setColumnsVisibility((prev) => ({ ...prev, [column]: !prev[column] }));
  };

  return (
    //Toggle Columns
    <TableContainer component={Paper}>
      <Button
        aria-controls="columns-menu"
        aria-haspopup="true"
        onClick={handleClickColumnsMenu}
      >
        Toggle Columns
      </Button>
      <Menu
        id="columns-menu"
        anchorEl={anchorElColumns}
        keepMounted
        open={Boolean(anchorElColumns)}
        onClose={handleCloseColumnsMenu}
      >
        <MenuItem onClick={() => toggleColumnVisibility("name")}>
          {columnsVisibility.name ? "Hide" : "Show"} Name
        </MenuItem>
        <MenuItem onClick={() => toggleColumnVisibility("description")}>
          {columnsVisibility.description ? "Hide" : "Show"} Description
        </MenuItem>
        <MenuItem onClick={() => toggleColumnVisibility("level")}>
          {columnsVisibility.level ? "Hide" : "Show"} Level
        </MenuItem>
        <MenuItem onClick={() => toggleColumnVisibility("cve")}>
          {columnsVisibility.cve ? "Hide" : "Show"} CVE
        </MenuItem>
        <MenuItem onClick={() => toggleColumnVisibility("cvss")}>
          {columnsVisibility.cvss ? "Hide" : "Show"} CVSS
        </MenuItem>
        <MenuItem onClick={() => toggleColumnVisibility("solution")}>
          {columnsVisibility.solution ? "Hide" : "Show"} Solution
        </MenuItem>
        <MenuItem onClick={() => toggleColumnVisibility("os")}>
          {columnsVisibility.os ? "Hide" : "Show"} OS
        </MenuItem>
        <MenuItem onClick={() => toggleColumnVisibility("riskLevel")}>
          {columnsVisibility.riskLevel ? "Hide" : "Show"} Risk Level
        </MenuItem>
        {/* ... other columns */}
      </Menu>

      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow style={{ backgroundColor: "#b9b9b9" }}>
            <TableCell />
            {columnsVisibility.name && <TableCell>Name</TableCell>}
            {columnsVisibility.description && (
              <TableCell align="right">Description</TableCell>
            )}
            {columnsVisibility.level && (
              <TableCell align="right">Level</TableCell>
            )}
            {columnsVisibility.cve && <TableCell align="right">CVE</TableCell>}
            {columnsVisibility.cvss && (
              <TableCell align="right">CVSS</TableCell>
            )}
            {columnsVisibility.solution && (
              <TableCell align="right">Solution</TableCell>
            )}
            {columnsVisibility.os && <TableCell align="right">OS</TableCell>}
            {columnsVisibility.riskLevel && (
              <TableCell align="right">Risk Level</TableCell>
            )}
            {/* ... other columns */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row
              key={row.name}
              row={row}
              index={index}
              columnsVisibility={columnsVisibility}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
