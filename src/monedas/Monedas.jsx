import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dolar from './Dolar';
import Euro from './Euro';
import Libra from './Libra';
import Real from './Real';
import PesoUruguayo from './PesoUruguayo';
import DolarBlue from './DolarBlue';
import ContadoConLiqui from './DolarContadoLiqui';

const Monedas = () => {
    return (
        <Routes>
            <Route path='/Dolar' element={<Dolar />} />
            <Route path='/Euro' element={<Euro />} />
            <Route path='/Libra' element={<Libra />} />
            <Route path='/Real' element={<Real />} />
            <Route path='/PesoUruguayo' element={<PesoUruguayo />} />
            <Route path='/DolarBlue' element={<DolarBlue />} />
            <Route path='/ContadoConLiqui' element={<ContadoConLiqui />} />
        </Routes>
        
    );
};

export default Monedas;
