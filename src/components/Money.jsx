import React from 'react';
import {Button, Flex, Input, Select} from "@chakra-ui/react";

const Money = ({setInput,firstInput,secondInput,convert}) => {
    return (
        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={'10px'} w={'100%'}>
        <Input onChange={(e)=>{setInput(e.target.value)}} w={'50%'} type={'number'}/>
         <Flex>
             <Select ref={firstInput} size={'md'} w={'90%'}>
                 <option value={'Доллар США'} >Доллар США</option>
                 <option value={'Гривна'} >Гривна</option>
             </Select>
         </Flex>
            <Flex gap={'15px'}>
                <Select ref={secondInput} size={'md'} w={'90%'}>
                    <option value={'Доллар США'}>Доллар США</option>
                    <option value={'Гривна'}>Гривна</option>
                </Select>
            </Flex>
            <Button onClick={()=>{convert()}}>Convert</Button>
        </Flex>
    );
};

export default Money;
