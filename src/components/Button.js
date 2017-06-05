import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
const { buttonStyle } = styles;

    return (
        <TouchableOpacity>
        <Text>Click Me!!!!!</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginRight: 5,
        marginLeft: 5
    }
};

export default Button;
