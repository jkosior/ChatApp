import React from 'react';
import { Input } from 'react-native-elements';

export default props => {
    const { placeholder, icon } = props;

    const iconProps = {
        type: "octicon",
        name: icon,
        color: "white"
    };

    const secure = icon === "lock";

    return (
        <Input
            inputStyle={{color: "white"}}
            placeholder={placeholder}
            placeholderTextColor="grey"
            leftIcon={iconProps}
            secureTextEntry={secure}
        />
    );
}
