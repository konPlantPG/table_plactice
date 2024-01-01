import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CreateTable = (props) => {
    const data = props.data
    const fruitNames = Object.keys(data)

    return (
        <TableContainer component={Paper}>
            <Table sx={{ width: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>項目</TableCell>
                        {fruitNames.map((fruitName, index) => (
                            <TableCell key={index}>{fruitName}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>数&nbsp;(個)</TableCell>
                        {fruitNames.map((fruitName, index) => (
                            <TableCell key={index}>{data[fruitName]["個数"]}</TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableCell>価格&nbsp;(円)</TableCell>
                        {fruitNames.map((fruitName, index) => (
                            <TableCell key={index}>{data[fruitName]["価格"]}</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CreateTable;
