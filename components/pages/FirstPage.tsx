import React from 'react';
import { View, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

import { items } from '../../assets/data/items';

const FirstPage: React.FC<{ navigation: any }> = ({ navigation }) => {

    const handleItemPress = (item: any) => {
        navigation.navigate('SecondPage', { item });
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {items.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => handleItemPress(item)} style={styles.item}>
                    <Image source={getImage(item.imageName)} style={styles.image} />
                </TouchableOpacity>
            ))}
        </ScrollView>
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
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    item: {
        marginVertical: 10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default FirstPage;