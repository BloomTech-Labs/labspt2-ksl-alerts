import React from 'react';
import { Segment, Dropdown, } from 'semantic-ui-react';
import { style, } from './style/inline/inline.js';

const AlertFeedSegment = props => {

    const selectOptions = props.user.alerts.map((alert, i) => {
        return {
            key: i,
            text: alert.title,
            value: alert.title,
        };
    });

    return (
        <Segment
            style={ style.alertFeedContainer }
        >

        <Dropdown
            search 
            selection 
            options={ selectOptions }
            placeholder='Alert Title'
        />


        </Segment>
    );
}

export default AlertFeedSegment;