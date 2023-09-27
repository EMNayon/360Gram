import React, { useEffect } from 'react';
import OurTeamHeader from '../OurTeamHeader/OurTeamHeader';
import ExperiencedTeam from '../../About/ExperiencedTeam/ExperiencedTeam';

const Team = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return (
        <div>
            <OurTeamHeader/>
            <ExperiencedTeam isShow={false}/>
        </div>
    );
};

export default Team;