import React from 'react';
import {Box, Button} from "@chakra-ui/react";

const Numbers = ({data, setCounts}) => {

    function addNums(e) {
        if (data !== '0') setCounts(data + e.target.innerHTML)
        else setCounts(e.target.innerHTML)
    }


    const nums = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ',',].map(
        number => {
            return <Button onClick={(e) => {
                    addNums(e)
                }}>
                {number}
            </Button>
        }
    );
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} h={'100vh'}>{nums}</Box>
    )
};

export default Numbers;
