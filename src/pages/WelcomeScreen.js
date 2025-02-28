import react from 'react';
import { Text, SafeAreaView, View, StyleSheet } from 'react-native';
import Button from './components/Button/Button';

function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header} >Welcome to Fitness App</Text>
            <Button text="Üye kaydı Oluşturun" onPress={null} />
        </SafeAreaView>

    );

}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flex: 1,
        justifyContent: 'center',
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
       
    }
})

export default Welcome;