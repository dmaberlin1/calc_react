import React, {useState} from 'react';
import {
    Box,
    Button,
    Flex,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuButton, MenuItem, MenuList,
    SlideFade,
    useDisclosure
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";

const MainMenu = () => {
    // const {isOpen,onToggle}=useDisclosure()
    // const [mode, setMode] = useState('Calculator');


    return (
        <Flex justifyContent={'flex-start'}>
            <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon/>}> </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Link to={'/calculator'}>Calculator</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to={'/converter'}>Converter</Link>
                    </MenuItem>
                </MenuList>

            </Menu>


        </Flex>
    );
};

export default MainMenu;
