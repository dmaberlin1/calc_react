import React from 'react';
import {Button} from "@chakra-ui/react";

const CountButton = ({data,applyExpression,expression}) => {
    const expressions = /\+|\-|\/|\*|/
    const lastNumber=data[data.length-1]
    function checkExpressionType() {
        if(expressions.test(lastNumber)) return applyExpression(data+expression)
    }
    return (
        <Button className={'droppable'} bg={'capri'} m={'4px'} w={'60px'} h={'60px'}
            onClick={()=>{checkExpressionType()}}>
            {expression}
        </Button>
    );
};

export default CountButton;
