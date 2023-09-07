import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";

//ButtonEvents

//Logic
function createData(
  id: number,
  name: string,
  description: string,
  level: string,
  cvs: string,
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
    cvs,
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

//Row Component
function Row(props: { row: ReturnType<typeof createData>; index: number }) {
  const { row, index } = props;
  const [open, setOpen] = React.useState(false);
  const backgroundColor = index % 2 === 0 ? "#a9a9a9" : "#e6e6e6"; // Alternating colors
  const collapseBackgroundColor = "#fafafa";
  const borderedCellStyle = {
    borderRight: "1px solid rgba(10, 10, 10, 10)", // This color is a light gray, you can adjust as needed
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); //State for Menu Anchor
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
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
            <MenuItem onClick={handleMenuClose}>Help</MenuItem>
            <MenuItem onClick={handleMenuClose}>Pin</MenuItem>
            {/* Add more actions as needed */}
          </Menu>
        </TableCell>
        <TableCell component="th" scope="row" style={borderedCellStyle}>
          {row.name}
        </TableCell>
        <TableCell align="right" style={borderedCellStyle}>
          {row.description}
        </TableCell>
        <TableCell align="right" style={borderedCellStyle}>
          {row.level}
        </TableCell>
        <TableCell align="right" style={borderedCellStyle}>
          {row.cvs}
        </TableCell>
        <TableCell align="right" style={borderedCellStyle}>
          {row.cvss}
        </TableCell>
        <TableCell align="right" style={borderedCellStyle}>
          {row.solution}
        </TableCell>
        <TableCell align="right" style={borderedCellStyle}>
          {row.os}
        </TableCell>
        <TableCell align="right">{row.riskLevel}</TableCell>
      </TableRow>
      <TableRow style={{ backgroundColor: collapseBackgroundColor }}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow sx={ZebraStyle}>
                    <TableCell>Date Added</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell align="right">cvss</TableCell>
                    <TableCell align="right">risk level</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRow) => (
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

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>
              <h5>Name</h5>
            </TableCell>
            <TableCell align="right">
              <h5>Description</h5>
            </TableCell>
            <TableCell align="right">
              <h5>Level</h5>
            </TableCell>
            <TableCell align="right">
              <h5>CVS</h5>
            </TableCell>
            <TableCell align="right">
              <h5>CVSS</h5>
            </TableCell>
            <TableCell align="right">
              <h5>Solution</h5>
            </TableCell>
            <TableCell align="right">
              <h5>OS</h5>
            </TableCell>
            <TableCell align="right">
              <h5>Risk Level</h5>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={row.name} row={row} index={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
//Style
const ZebraStyle = {
  "&:nth-of-type(4n+1)": {
    backgroundColor: "#f2f2f2", // Light color for main rows
  },
  "&:nth-of-type(4n+2)": {
    backgroundColor: "#fafafa", // Even lighter color for collapsible rows
  },
  "&:nth-of-type(4n+3)": {
    backgroundColor: "#e6e6e6", // Darker color for main rows
  },
};
