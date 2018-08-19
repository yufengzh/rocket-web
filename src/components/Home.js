import React from 'react';
import { Tabs, Button } from 'antd';

const TabPane = Tabs.TabPane;

export class Home extends React.Component {
    render() {
        const operations = <Button type="primary">Extra Action</Button>;
        return (
            <Tabs tabBarExtraContent={operations} className="main-tabs">
                <TabPane tab="Post Photo" key="1">Content of tab 1</TabPane>
                <TabPane tab="Post Video" key="2">Content of tab 2</TabPane>
                <TabPane tab="Map" key="3">Content of tab 3</TabPane>
            </Tabs>
        );
    }
}