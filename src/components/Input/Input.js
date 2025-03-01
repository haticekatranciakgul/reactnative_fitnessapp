import react from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from './Input.style'

function Input({label, onChangeText, placeholder}) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input_container} 
                placeholder={placeholder} onChangeText={onChangeText} />
            </View> 
        </View>

    );
}
export default Input;