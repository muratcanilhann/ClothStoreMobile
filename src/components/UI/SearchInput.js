import { TextInput,StyleSheet } from "react-native"

export default function SearchInput({ value, onChangeText,...props}){
    return(
    <TextInput
    value={value}
    onChangeText={onChangeText}
    style={styles.input} {...props} />
    )
}


const styles= StyleSheet.create({
    input :{
    height: 40,
     backgroundColor:"#D9D9D9",
     borderRadius:5
    }})