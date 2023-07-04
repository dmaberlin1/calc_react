import React, {useState} from 'react';
import {Box, Button, List, ListItem, SlideFade, useDisclosure} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

const Menu = () => {
    const {isOpen,onToggle}=useDisclosure()
    const [mode, setMode] = useState('Calculator');


    return (
        <Box>
            <HamburgerIcon w={'45px'} h={'45px'} p={'5px'} m={'5px'} borderRadius={'5px'}
            onClick={onToggle}/>
        <SlideFade in={isOpen} offsetY={'-20px'} unmountOnExit>
            <Box position={'absolute'}
            p={'10px'} m={'4px'} borderRadius={'8px'} w={'60%'}
                 zIndex={'10'}
            >
                <List display={'flex'} flexDirection={'column'} gap={'10px'} fontSize={'20px'}>
                    <Button onClick={()=>{setMode('Calculator')}}>Calculator</Button>
                    <Button onClick={()=>{setMode('Calculator')}}>Converter</Button>
                    <Button>Settings</Button>

                </List>
            </Box>
        </SlideFade>
        </Box>
    );
};

export default Menu;
