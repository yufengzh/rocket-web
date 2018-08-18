import React from 'react';
import { Alert } from 'antd';
export class PageNotFound extends React.Component {
    render() {
        return (
            <Alert
                message="404. That’s an error."
                description="The requested URL /searach was not found on this server. That’s all we know."
                type="warning"
            />
        );
    }
}