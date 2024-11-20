import { Text,View,Image,StyleSheet,TouchableOpacity } from "react-native";
import LikeIcon from "../../../assets/LikeIcon.svg";


export default function ShoppingItemCard({item,addItem,removeItem,deleteItem}){


    function handleRemoveItemToBasket(){
        removeItem(item.id);
    }

    function handleAddItemToBasket(){
    addItem(item);
    }
    function handleDeleteItemToBasket(){
        deleteItem(item.id);
        }
    return(
        <View style={{marginBottom:20}}>
        <View style={{flex:1,flexDirection:"row"}} >
         <View style={style.container}>

            <Image style={{ width:270,
    height:270,resizeMode:"contain"}} source={item.image} />


            <TouchableOpacity
              style={{
                position: "absolute",
                backgroundColor: "white",
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                bottom: 0,
                right: 0, 
              }}
            >
              <LikeIcon />
            </TouchableOpacity>

           

         </View>

         
         <View style={{paddingHorizontal:10,alignItems:"center",
            
         }}>
            
            <TouchableOpacity onPress={handleDeleteItemToBasket} >
            <Text style={{fontSize:20,color:"gray"}}>x</Text>
            </TouchableOpacity>

            
            <View style={{
                height:90,
                width:30,
                borderStyle:"solid",
                borderWidth:1,
                marginTop:50
                }}>
                
                <TouchableOpacity
                onPress={handleAddItemToBasket}
                style={{width:30,height:30,justifyContent:"center",alignItems:"center",
                    borderBottomWidth:1
                }}>
                    <Text>+</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:30,height:30,justifyContent:"center",alignItems:"center",
                    borderBottomWidth:1
                }}>
                    <Text>{item.quantity}</Text>
                </TouchableOpacity>


                <TouchableOpacity
                onPress={handleRemoveItemToBasket}
                style={{width:30,height:30,justifyContent:"center",alignItems:"center",
                   
                }}>
                    <Text>-</Text>
                </TouchableOpacity>

            </View>


         </View>
         

        </View>

            <Text style={{color:"gray",fontFamily:"BeatriceDeck-RegularItalic"}}>Cotton Tshirt</Text>
            <View style={{flex:1,flexDirection:"row",width:270,justifyContent:"space-between"}}>
               <Text style={{fontFamily:"BeatriceDeck-SemiBoldItalic"}}>Full sleeve zipper </Text>
               <Text style={{fontFamily:"BeatriceDeck-SemiBoldItalic"}}>$100</Text>

            </View>

        </View>
    )
}


const style = StyleSheet.create({
    container:{
    width:270,
    height:270,
    flexDirection:"row",
    
    }
})