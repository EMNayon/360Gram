import React from 'react';
import EmailMarketingHeader from '../EmailMarketingHeader/EmailMarketingHeader';
import ServicesAll from '../../WebsiteDesiging/ServicesAll/ServicesAll';

const EmailMarketing = () => {
    return (
        <div>
            <EmailMarketingHeader></EmailMarketingHeader>
            <ServicesAll isShowTitle6={true}/>
        </div>
    );
};

export default EmailMarketing;