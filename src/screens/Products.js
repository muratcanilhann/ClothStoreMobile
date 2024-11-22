import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import SearchInput from "../components/UI/SearchInput";
import CategoryBox from "../components/CategoryBox/CategoryBox";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Products({ route }) {
  const [category, setCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { gender = "All" } = route.params; // Varsayılan olarak "All" atanır

  // Kategoriler
  const categories = [
    { id: "0", text: "All" },
    { id: "1", text: "Tshirt" },
    { id: "2", text: "Pants" },
    { id: "3", text: "Shoes" },
    { id: "4", text: "Shirt" },
    { id: "5", text: "Accessories" },
  ];

  // Ürünler
  const products = [
    {
      id: "1",
      name: "White Pants",
      gender: "MAN",
      category: "Pants",
      price: 100,
      image: require("./../../assets/Kiyafet1.png"),
      description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.",
    },
    {
      id: "2",
      name: "Blue Shirt",
      gender: "MAN",
      category: "Shirt",
      price: 200,
      image: require("./../../assets/Kiyafet2.png"),
      description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.",
    },
    {
      id: "3",
      name: "Black Tshirt",
      gender: "MAN",
      category: "Tshirt",
      price: 300,
      image: require("./../../assets/Kiyafet3.png"),
      description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.",
    },
    {
      id: "4",
      name: "Yellow Shoe",
      gender: "MAN",
      category: "Shoes",
      price: 400,
      image: require("./../../assets/Kiyafet1.png"),
      description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.",
    },
    {
      id: "5",
      name: "Pink Dress",
      gender: "WOMAN",
      category: "Dress",
      price: 500,
      image: require("./../../assets/Kiyafet2.png"),
      description: "Elegant pink dress, perfect for evening events.",
    },
    {
      id: "6",
      name: "Red Heels",
      gender: "WOMAN",
      category: "Shoes",
      price: 600,
      image: require("./../../assets/Kiyafet3.png"),
      description: "Stylish red high heels for any occasion.",
    },
  ];

  const filteredList = products.filter((product) => {
    const matchesGender = gender === "All" ? true : product.gender === gender.toUpperCase(); // Eğer "All" ise tüm gender'lar
    const matchesCategory = category ? product.category === category : true; // Kategori kontrolü
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()); // Arama kontrolü
    return matchesGender && matchesCategory && matchesSearch;
  });

  const renderCategoryBox = ({ item }) => (
    <CategoryBox
      text={item.text}
      onPress={() => setCategory(item.text === "All" ? null : item.text)} // "All" seçilirse kategori temizlenir
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerLocation}>Home/Products</Text>
      <Text style={styles.header}>PRODUCTS</Text>

      <View style={{ marginTop: 10 }}>
        <SearchInput
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      <View style={{ marginTop: 40 }}>
        <FlatList
          data={categories}
          renderItem={renderCategoryBox}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatList}
        />
      </View>

      <FlatList
        data={filteredList}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ProductCard item={item} />}
        numColumns={2}
        ListEmptyComponent={
          <Text style={styles.noProductsText}>No products found</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 30,
  },
  headerLocation: {
    textAlign: "center",
    fontFamily: "BeatriceDeck-RegularItalic",
  },
  header: {
    fontFamily: "BeatriceDeck-EBItalic",
    fontSize: 25,
    textAlign: "center",
  },
  flatList: {
    paddingHorizontal: 10,
    gap: 10,
  },
  noProductsText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
});
