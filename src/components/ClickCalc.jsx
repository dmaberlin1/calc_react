import React, {useState} from 'react';
import {Button, Flex} from "@chakra-ui/react";
import Dragging from "./Dragging";
import CountButton from "./CountButton";
import Numbers from "./Numbers";

const ClickCalc = () => {
    const [counts, setCounts] = useState('0');
    const [result, setResult] = useState('');

    function applyExpression(countedNumber) {
        setCounts(countedNumber)
    }

    return (
       <Dragging result={result} setResult={setResult} setHistory={onClick}>
           <Flex w={'90%'} justifyContent={'space-between'}
                 alignItems={'center'} bg={'gray.50'} borderRadius={'8px'}>
           <Text display={'flex'} justifyContent={'start'} alignItems={'center'} w={'fit-content'}
           h={'40px'} px={'16px'}
           >
               {counts}
           </Text>
               <Text display={'flex'} justifyContent={'start'} alignItems={'center'} w={'fit-content'}
               h={'40px'} px={'16px'} textColor={'tomato'}
               >
                   {result}
               </Text>
               </Flex>
             <Flex w={'90%'}>
                 <Numbers data={counts} onClick={setCounts}/>
               <Flex flexDirection={'column'}>
                   <CountButton data={counts} expression={'+'} onClick={applyExpression}/>
                   <CountButton data={counts} expression={'-'} onClick={applyExpression}/>
                   <CountButton data={counts} expression={'*'} onClick={applyExpression}/>
                   <CountButton data={counts} expression={'/'} onClick={applyExpression}/>
               </Flex>
               <Button bg={'tomato'} m={'4px'} w={'60px'} h={'60px'}
               onClick={()=>{
                   setResult(eval(counts))
                   setCounts('0')
                   onClick(counts)
               }
               }
               >
                    =
               </Button>
           </Flex>
       </Dragging>
    );
};

export default ClickCalc;
