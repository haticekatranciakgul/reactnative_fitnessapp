import react from 'react';
import { Text, SafeAreaView, View, StyleSheet, Alert } from 'react-native';

function MemberResult({ route }) {
    console.log(route);
    const { user } = route.params;

    return (
        <SafeAreaView>
            <Text style={styles.message}>Kayıt Tamamlandı!</Text>
            <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}>Üye Yaş: {user.userAge}</Text>
            <Text style={styles.label}>Üye E-posta: {user.userMail}</Text>
            <Text style={styles.label}>Üye Memleketi: {user.userHometown}</Text>
            <Text style={styles.label} >Üye Adı: {user.userName}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    message: {
        fontWeight: 'bold',
        textalign: 'center',
        fontSize: 18,
        margin: 10,
    }

});

export default MemberResult;