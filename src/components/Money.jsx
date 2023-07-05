import React from 'react';
import {Button, Flex, Input, Select} from "@chakra-ui/react";

const Money = ({setInput,firstInput,secondInput,convert,data}) => {
    const selection=data.map((e)=>{return <option key={e} value={e}>{e}</option>})

    return (
        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'10px'} w={'100%'}>
        <Input onChange={(e)=>{setInput(e.target.value)}} w={'50%'} type={'number'}/>
            <Flex gap={'15px'}>
                <Select ref={firstInput} size={'md'} w={'90%'}>
                    {selection}
                </Select>
            </Flex>
        </Flex>
    );
};

export default Money;
