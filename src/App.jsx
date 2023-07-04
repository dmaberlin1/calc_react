import './App.css';
import Numbers from "./components/Numbers";
import {useState} from "react";
import {Box, Button} from "@chakra-ui/react";
import CountButton from "./components/CountButton";
import InputCalc from "./components/InputCalc";
import Calc from "./components/Calc";
import {HamburgerIcon} from "@chakra-ui/icons";

function App() {
    return (
        <Box h={'90vh'}>
            <HamburgerIcon w={'45px'} h={'45px'} p={'5px'} m={'5px'} borderRadius={'5px'}/>
            <Calc/>
        </Box>
    );
}


export default App;
