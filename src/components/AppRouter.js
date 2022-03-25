import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';
import Profile from '../routes/Profile';
import Navigation from './Navigation';
import Footer from "./Footer";
import {useState} from "react";
import Items from "../routes/Items";
import ItemDetail from "../routes/ItemDetail";
import NoMatch from "../routes/NoMatch";

const AppRouter = () => {
    const [display, setDisplay] = useState(true);
    const [list, setList] = useState([]);

    const listState = (args) => {
        setList([args])
    }
    console.log(...list);



    const displayOff = () => {
        setDisplay(false);
    }
    const displayOn = () => {
        setDisplay(true);
    }
    return (
        <Router>
            {display ? <Navigation listState={listState} list = {list}/> : ''}

            <Routes>
                <Route path="/" element={<Home displayOn={displayOn}/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/auth" element={<Auth displayOff={displayOff}/>}/>
                <Route path="items" element={<Items listState={listState} list={list}/>}/>
                <Route path='items/:id' element={<ItemDetail/>}/>
                <Route path="*" element={<NoMatch />} />
            </Routes>
            {display ? <Footer/> : ''}

        </Router>
    );
};

export default AppRouter;
