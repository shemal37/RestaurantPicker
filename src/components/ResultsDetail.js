import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import axios from "axios";

const photo = async (ref) => {
  const response = await axios.get("");
  console.log(response.request.responseURL);
  return response.request.responseURL;
};
const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.conatiner}>
      <Image
        style={styles.imageStyle}
        source={{
          uri: photo(result.photos[0].photo_reference),
        }}
      />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.user_ratings_total} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 5,
    width: 250,
    height: 230,
  },
  nameStyle: {
    fontWeight: "bold",
  },
  conatiner: {
    marginLeft: 15,
  },
});

export default ResultsDetail;
