import React, {useRef, useState} from 'react';
import {Button, Flex, Input, Select} from "@chakra-ui/react";
import getData from "../config/parser";

const Converter = () => {
    const [input, setInput] = useState(0);
    const [result, setResult] = useState(0);
    const firstInput=useRef(null)
    const secondInput=useRef(null)

    function convert() {
        if(firstInput.current.value==='Meters'){
            switch (secondInput.current.value) {
                case 'Centimeters':setResult(input*100); break
                case 'Meters':setResult(input); break
            }
        }
        if(firstInput.current.value==='Centimeters'){
            switch (secondInput.current.value) {
                case 'Centimeters':setResult(input);break
                case 'Meters':setResult(input/100);break
            }
        }
    }

    return (
        <Flex justifyContent={'center'} alignItems={'center'}
              flexDirection={'column'} gap={'10px'} w={'100%'}>
            <Input onChange={(e)=>{setInput(e.target.value)}}/>
            <Flex gap={'15px'}>
                    w={'50%'} type={'number'}/>
            <Select ref={firstInput}
                size={'md'} w={'90%'}>
                <option value="Centimeters">Centimeters</option>
                <option value="Meters">Meters</option>
            </Select>
            </Flex>
            <Flex gap={'15px'}>
            <Select size={'md'} w={'90%'} ref={second}>
                <option value={'Centimeters'}>Centimeters</option>
                <option value={'Meters'}>Meters</option>
            </Select>
            </Flex>
            <Button onClick={()=>{convert()}} >Converter</Button>
        </Flex>
    );
};

export default Converter;
