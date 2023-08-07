import React from 'react'
import { Button, Space } from 'antd';
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';

const AntDemo = () => {
    return (<div>
        <Space wrap>
            <SmileTwoTone />
            <HeartTwoTone twoToneColor="#eb2f96" />
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </Space>
    </div>);
}

export default AntDemo;