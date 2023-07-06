import React, {useEffect, useState} from 'react';
import {Flex, Input} from "@chakra-ui/react";

const InputCalc = () => {
    const [result, setResult] = useState('');
    const [counts, setCounts] = useState('');

    function updateCounts(e) {
        const expressions = /\+|\-|\/|\*|=|\$|[A-z]| /
        // const expressions = /[0-9]/
        const lastNumber = e.target.value[e.target.value.length - 1]
        if (expressions.test(lastNumber)) return
        else  setResult(eval(e.target.value))

    }

    function sendDataToHistory(e) {
        if(e.native.key==='Enter'){
            onKeyDown(counts)
        }
    }

    useEffect(() => {
        document.querySelector('input').focus()
    });


    return (
            <Flex justifyContent={'center'} alignItems={'center'}
                  border={'2px'} borderRadius={'8px'} borderColor={'gray.50'}>
                <Input type={'text'} border={'transparent'}
                       onInput={(e) => {updateCounts(e)}}
                       onKeyDown={(e)=>{sendDataToHistory}}
                />
                <Text textColor={'tomato'} px={'8px'}> {result}</Text>
            </Flex>
    );
};

export default InputCalc;
