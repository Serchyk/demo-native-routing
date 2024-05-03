import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ThirdPage: React.FC = () => {
    return (
        <View>
            <Text style={styles.text}>Third Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        alignSelf: 'center',
        justifyContent:"flex-start",
        alignItems: 'center',
        position:"absolute",
        top:20
    },
});

export default ThirdPage;