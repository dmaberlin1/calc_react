import React, {useState} from 'react';
import {Box, Button} from "@chakra-ui/react";
import InputCalc from "./InputCalc";
import History from "./History";
import ClickCalc from "./ClickCalc";

const Calc = () => {
    const [calcType, setCalcType] = useState('ClickCalc');
    const [history , setHistory] = useState([]);
    let calculator;

    function updateHistory(calcResult) {
        if(history.length>6){history.shift()}
        setHistory(history.concat(eval(calcResult)))
    }
    function calcTypeChange() {
       calcType==='ClickCalc'? setCalcType('InputCalc'):setCalcType('ClickCalc')
    }
    switch (calcType) {
        case 'ClickCalc':
            calculator = <ClickCalc onClick={updateHistory}/>;
            break;
        case 'InputCalc':
            calculator = <InputCalc/>;
            break;
        default:
            calculator=<ClickCalc onClick={updateHistory}/>
    }


    return (
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} m={'10px'}>
            <Button onClick={calcTypeChange}>
                Change CalcType
            </Button>
            <Box m={'10px'}>
                <History data={history}/>
                {calculator}
            </Box>
        </Box>
    );
};

export default Calc;
