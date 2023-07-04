import './App.css';
import {useState} from "react";
import {Box} from "@chakra-ui/react";
import Calc from "./components/Calc";
import Menu from "./UI/Menu";

function App() {
    const [mode, setMode] = useState('Calculator');
    let application;

    // function changeAppType() {
    //     mode==='Calculator'? setMode('Converter'):setMode('Calculator')
    // }

    switch (mode) {
        case 'Calculator':application=<Calc/>
            break;
        case 'Converter':application =<Converter/>
            break;
        default:
            application=<Calc/>
    }

    return (
        <Box h={'90vh'}>
            <Menu setMode={setMode} />
            {application}
        </Box>
    );
}


export default App;
