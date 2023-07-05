import React, {useRef, useState} from 'react';
import {Button, Flex, Input, List, Select, SlideFade, useDisclosure} from "@chakra-ui/react";
import getData from "../config/parser";
import {SettingsIcon} from "@chakra-ui/icons";
import Money from "./Money";
import Convertible from "./Convertible";
import MenuConverter from "../UI/MenuConverter";
import {useDispatch, useSelector} from "react-redux";
import {historyState, updateHistory} from "../slice/historySlice";

const Converter = () => {
    const [mode, setMode] = useState('Distance');
    const [input, setInput] = useState(0);
    const [result, setResult] = useState(0);
    const data=['Доллар США','Гривна']
    const dataDistance=['Meters','Centimeters']
    const firstInput = useRef(null)
    const secondInput = useRef(null)
    const history=useSelector(historyState)
    const dispatch=useDispatch();

    let converter;

    switch (mode) {
        case 'Distance':
            converter = <Convertible setInput={setInput}
                                  convert={convert} firstInput={firstInput}
                                  secondInput={secondInput} data={dataDistance}/>
            break;
        case 'Money': converter=<Convertible setInput={setInput} convert={convertMoney} firstInput={firstInput}
        secondInput={secondInput} data={data}/>
            break;
        default:
            converter=<Distance/>
    }

    function convert() {
        if (firstInput.current.value === 'Meters') {
            switch (secondInput.current.value) {
                case 'Centimeters':
                    setResult(input * 100);
                    break
                case 'Meters':
                    setResult(input);
                    break
            }
        }
        if (firstInput.current.value === 'Centimeters') {
            switch (secondInput.current.value) {
                case 'Centimeters':
                    setResult(input);
                    break
                case 'Meters':
                    setResult(input / 100);
                    break
            }
        }
    }

    async function convertMoney() {

        getData(firstInput.current.value).then(x => {
            switch (secondInput.current.value) {
                case 'Доллар США':
                    setResult(input);
                    break
                case 'Гривна':
                    setResult(input * Number(x));
                    break
            }
        })

    }




    return (
        <Flex justifyContent={'center'} alignItems={'center'}
              flexDirection={'column'} gap={'10px'} w={'100%'}>
           <MenuConverter onClick={setMode}/>
            <Text>{result}</Text>
            {converter}
            <Text>{history}</Text>
            <Button onClick={()=>dispatch(updateHistory(result))}>Add to history</Button>
        </Flex>
    );
};

export default Converter;
