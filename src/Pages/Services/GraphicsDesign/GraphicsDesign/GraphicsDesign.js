import React from 'react';
import GraphicsDesignHeader from '../GraphicsDesignHeader/GraphicsDesignHeader';
import ServicesAll from '../../WebsiteDesiging/ServicesAll/ServicesAll';

const GraphicsDesign = () => {
    return (
        <div>
            <GraphicsDesignHeader/>
            <ServicesAll isShowTitle1={true}/>
        </div>
    );
};

export default GraphicsDesign;