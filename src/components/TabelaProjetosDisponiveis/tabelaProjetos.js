import React, { useContext, useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';


const columns = [
  { id: 'id', label: 'ID', minWidth: 170 },
  { id: 'name', label: 'Projeto', minWidth: 150 },
  { id: 'operation', label: "Status", minWidth: 150},
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 550,
  },
});



export default function TabelaProjetos({ dataList, disponivelAvaliacao }){

  const [rows, setRows] = useState([]);

  dataList.forEach(element => {
    if(rows.find(x => x.id === element['id'])){
      console.log("Valor já está na lista");
    }else{
      rows.push({id: element['id'], name: element['name'], status: element['status']});
    }
  });

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const avaliaProjeto = (projectID) =>{

    const newState = rows.map(obj => {
      if (obj.id === projectID) {
        return {...obj, status: 1};
      }
      return obj;
    });

    disponivelAvaliacao(projectID);
    setRows(newState);
  };


  return (
    <Paper className={classes.root}>
        <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                    return (
                    <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                    >
                        {columns.map((column) => {
                        const value = row[column.id];
                        return (
                            <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}                
                                {column.id === 'operation' ? (row.status === 0 ? <Button variant="contained" style={{backgroundColor: 'grey'}} onClick={() => avaliaProjeto(row.id)}>Avaliar Projeto</Button> : ((row.status === 1) ? <Button variant="contained" color="success" endIcon={<TaskAltIcon />}>Projeto avaliado</Button> : <Button variant="contained" color="error" endIcon={<CancelIcon />}>Projeto desclassificado</Button>) ) : ''}
                            </TableCell>
                        );
                        })}
                    </TableRow>
                    );
                })}
            </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </Paper>

  );
};
