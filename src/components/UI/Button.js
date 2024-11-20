import { TouchableOpacity,Text,StyleSheet } from "react-native"

export default function Button({title,type,...props}){

    

    return (
        <TouchableOpacity {...props}>
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    
    text:{
        fontFamily:"BeatriceDeck-Light"
    }
    
})