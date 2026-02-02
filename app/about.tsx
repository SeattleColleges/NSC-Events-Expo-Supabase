import { View, Text, StyleSheet } from 'react-native';

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        padding: 20,  
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
});