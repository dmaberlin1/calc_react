import React from 'react';
import {Box, Button} from "@chakra-ui/react";

const History = ({data}) => {
    const results=data.map(result=>{
        return <Button key={result}>{result}</Button>
    })



    return (
        <Box>
            {results}
        </Box>
    );
};

export default History;
