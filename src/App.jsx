import './App.css';
import {useState} from "react";
import {Flex} from "@chakra-ui/react";
import Calc from "./components/Calc";
import MainMenu from "./UI/MainMenu";
import {useSelector} from "react-redux";
import {historyState} from "./slice/historySlice";
import Converter from "./components/Converter";
import {Route, Routes} from "react-router-dom";

function App() {
    const [mode, setMode] = useState('Calculator');
    const history=useSelector(historyState)
    let application;

    switch (mode) {
        case 'Calculator':application=<Calc/>
            break;
        case 'Converter':application =<Converter/>
            break;
        default:
            application=<Calc/>
    }

    return (
        <Flex flexDirection={'column'} justifyContent={'space-between'} h={'90%'} maxWidth={'400px'}
        w={'100%'}>
            <Flex gap={'10px'} color={'tomato'}>{history}</Flex>
            <MainMenu setMode={setMode} />
            {/*{application}*/}

            <Routes>
                <Route path={'/'} element={<Calc/>}/>
                <Route path='converter' element={<Converter/>}></Route>
                <Route path={'calculator'} element={<Calc/>}></Route>
            </Routes>
        </Flex>
    );
}


export default App;
