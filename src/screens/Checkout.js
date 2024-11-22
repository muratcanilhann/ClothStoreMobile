import { Text, TextInput, View, StyleSheet,TouchableOpacity,ScrollView,Image,FlatList } from "react-native";
import Button from "../components/UI/Button";
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from "react";
import ArrowRightIcon from "../../assets/ArrowRightIcon.svg";
import BasketContext from "../context/basketContext";
import { useContext } from "react";
import OrderProductCard from "../components/OrderProductCard/OrderProductCard";
export default function Checkout() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

  const {items} = useContext(BasketContext);

  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      <Text style={styles.header}>CHECKOUT</Text>

      <View style={styles.tab}>
        <Button title="INFORMATION" />
        <Button title="SHIPPING" />
        <Button title="PAYMENT" />
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.subTitle}>CONTACT INFO</Text>

        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Phone" />

        <Text style={styles.subTitle}>SHIPPING ADDRESS</Text>

        <View style={styles.halfContainer}>
          <TextInput style={[styles.input, styles.inputHalf]} placeholder="First Name" />
          <TextInput style={[styles.input, styles.inputHalf]} placeholder="Last Name" />

        
        </View>

        <DropDownPicker
        style={styles.picker}
        open={open}
        dropDownContainerStyle={styles.picker}
        value={value}
        items={[
          { label: 'Turkey', value: 'turkey' },
          { label: 'Germany', value: 'germany' },
          { label: 'Greece', value: 'greece' },
          { label: 'Bulgaria', value: 'bulgaria' }
        ]}
        setOpen={setOpen}
        setValue={setValue}
        placeholder="Select Country"
        textStyle={styles.pickerItem}
      />

        <TextInput style={styles.input} placeholder="State / Region" />
        <TextInput style={styles.input} placeholder="Address" />


        <View style={styles.halfContainer}>
          <TextInput style={[styles.input, styles.inputHalf]} placeholder="City" />
          <TextInput style={[styles.input, styles.inputHalf]} placeholder="Postal Code" />

        </View>

        <TouchableOpacity

        style={{backgroundColor:"#827D7D",padding:14,marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        gap:10}}>
      
        <Text style={styles.subTitle}>Shipping</Text>
        <ArrowRightIcon  />
      </TouchableOpacity>

      </View>

          <View style={styles.orderContainer}>
            <Text style={{fontFamily:"BeatriceDeck-EBItalic"}}>Your Orders</Text>


          <View>
          
          <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
          <OrderProductCard item={item}/>
      )}
    />
    

           </View>

          </View>
       



    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: "BeatriceDeck-EBItalic",
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    placeholderTextColor: "#5E5E5E",
    fontFamily: "BeatriceDeck-SemiBoldItalic",
    marginTop: 9,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  inputHalf: {
    flex: 1,
    marginRight: 10, 
  },
  halfContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginTop: 10,
  },
  subTitle: {
    fontFamily: "BeatriceDeck-SemiBoldItalic",
    marginTop: 10,
  },
  picker:{
    backgroundColor:null,
    borderWidth:1,
    borderColor:"#D9D9D9",
    marginTop:10,
    fontFamily:"BeatriceDeck-SemiBoldItalic"
  },
  pickerItem:{
      fontFamily:"BeatriceDeck-SemiBoldItalic",
      color:"#5E5E5E" 
  },
  orderContainer:{
    borderWidth:1,
    borderColor:"#D9D9D9",
    marginTop:20,
    padding:20

  }
});
