import React, {useState} from 'react';
import {Button} from "@chakra-ui/react";

const ClickCalc = () => {
    const [counts, setCounts] = useState('0');
    const [result, setResult] = useState('');

    function applyExpression(countedNumber) {
        setCounts(countedNumber)
    }

    return (
        <Button bg={'tomato'} m={'4px'} w={'60px'} h={'60px'}
        onClick={()=>{
            setResult(eval(counts))
            setCounts('0')
            onclick(counts)
        }}
        >

        </Button>
    );
};

export default ClickCalc;
