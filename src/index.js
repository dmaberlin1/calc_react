import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import {Provider} from "react-redux";
import './index.css';
import {BrowserRouter} from "react-router-dom";


const theme=extendTheme({
    colors:{
        capri:'#00c0f9',
        tomato:'#FF6347'
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
     <Provider store={store}>
         <ChakraProvider theme={theme}>
             <App/>
         </ChakraProvider>
     </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

