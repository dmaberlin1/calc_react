import React from 'react';
import {Button, Flex, List, SlideFade, useDisclosure} from "@chakra-ui/react";
import {SettingsIcon} from "@chakra-ui/icons";

const MenuConverter = () => {
    const {isOpen, onToggle} = useDisclosure()
    return (
        <Flex>
            <SettingsIcon/>
            <SlideFade>
                <Flex bg={'gray.100'} p={'10px'} m={'4px'} borderRadius={'8px'} w={'160px'} position={'absolute'}>
                    <List display={'flex'} flexDirection={'column'} gap={'10px'} fontSize={'20px'}>
                        <Button onClick={() => {
                            onClick('Calculator');
                            onToggle()
                        }}>Money</Button>
                        <Button onClick={() => {
                            onClick('Calculator');
                            onToggle()
                        }}>Distance</Button>
                        <Button>Settings</Button>
                    </List>
                </Flex>
            </SlideFade>
        </Flex>
    )
};

export default MenuConverter;
