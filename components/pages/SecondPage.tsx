import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SecondPage: React.FC<{ route: any }> = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.name}</Text>
            <Image source={getImage(item.imageName)} style={styles.image} />
        </View>
    );
};

const getImage = (imageName: string) => {
    switch (imageName) {
        case 'image1.png':
            return require('../../assets/cats/image1.png');
        case 'image2.png':
            return require('../../assets/cats/image2.png');
        case 'image3.png':
            return require('../../assets/cats/image3.png');
        case 'image4.png':
            return require('../../assets/cats/image4.png');
        case 'image5.png':
            return require('../../assets/cats/image5.png');
        case 'image6.png':
            return require('../../assets/cats/image6.png');
        case 'image7.png':
            return require('../../assets/cats/image7.png');
        case 'image8.png':
            return require('../../assets/cats/image8.png');
        default:
            return null;
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        alignItems: 'center',
        position:"absolute",
        textTransform: "uppercase",
        top:20
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});

export default SecondPage;