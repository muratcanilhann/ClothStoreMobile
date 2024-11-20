import { TextInput,StyleSheet } from "react-native"

export default function SearchInput({...props}){
    return(
    <TextInput style={style.input} {...props} />
    )
}


const style= StyleSheet.create({
    input :{
    height: 40,
     backgroundColor:"#D9D9D9",
     borderRadius:5
    }})