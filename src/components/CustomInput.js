import React from 'react';

import { Input } from 'antd';

const { TextArea } = Input;


const CustomInput = () => {

    return (
    <div>
        <TextArea placeholder="custom input" autosize />
    <div style={{ margin: '24px 0' }} />
    </div>

    )
}

export default CustomInput;