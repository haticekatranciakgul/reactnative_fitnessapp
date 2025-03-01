import react, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, Alert } from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button'

function MemberSign() {
    const [userSurname, setUserSurname] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHometown, setUserHometown] = useState(null);

    function handleSubmit() {
        if ( !userName || !userSurname || !userAge || !userMail || !userHometown){
            Alert,alert('Fitness Salonu', 'Lütfen tüm alanları doldurunuz');
            return;
        }
            const user = {
                userName,
                userSurname,
                userAge,
                userMail,
                userHometown
            };
        console.log(user);
    }


    return (
        <SafeAreaView>
            <Input label="Üye Adı" placeholder="Üye ismini giriniz"
                onChangeText={setUserName} />
            <Input label="Üye Soyadı" placeholder="Üye soyismini giriniz"
                onChangeText={setUserSurname} />
            <Input label="Üye Yaş" placeholder="Üye yaşını giriniz"
                onChangeText={setUserAge} />
            <Input label="Üye E-posta" placeholder="Üye e-posta adresini giriniz"
                onChangeText={setUserMail} />
            <Input label="Üye Memleketi" placeholder="Üye memleketini giriniz"
                onChangeText={setUserHometown} />
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />


        </SafeAreaView>
    )
}


export default MemberSign;