import React, { useEffect } from 'react';
import './App.css';
import { Settings } from './components/Settings/Settings';
import { DrawCanvas } from './components/DrawCanvas/DrawCanvas';
import { ImageCanvas } from './components/ImageCanvas/ImageCanvas';
import { setCanvasSize } from './store/actionCreators/setCanvasSize';
import { useDispatch } from 'react-redux';


function App() {
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setCanvasSize({ width: window.innerWidth, height: window.innerHeight }))
    }, [])

    return (
        <div className="App">
            <DrawCanvas />
            <ImageCanvas />
            <Settings />
        </div>
    );
}




export default App;
