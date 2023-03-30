import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { FlatList, Text, View, ScrollView,TouchableOpacity } from "react-native";
import crop from "../assets/crop.jpg"

import jacket1 from "../assets/jacket1.jpg";
import jacket2 from "../assets/jacket2.jpg";

import jacket4 from "../assets/jacket4.jpg";
import jacket5 from "../assets/jacket5.jpg";
import jacket6 from "../assets/jacket6.jpg";
import jacket7 from "../assets/jacket7.jpg";
import jacket8 from "../assets/jacket8.jpg";
// import jacket9 from "../assets/jacket9.jpg";


import Item from "../components/Item";
import { FontAwesome } from '@expo/vector-icons';const ListOfItems = () => {
  let stars =<FontAwesome name="star" size={12} color="orange" />;
  let unrated = <FontAwesome name="star-o" size={12} color="orange" />;
  const items = [
    {
      itemImg: crop,
      itemName: "ALEXANDER MCQUEEN",
      stars: [stars, stars, stars, stars, unrated],
      amount: `${"$ " + 120}`,
      description: "This double-breasted blazer is lined with silk and has a boxy profile with bold shoulders and straight sleeves."
    },
    {
      itemImg: jacket1,
      itemName: "VALENTINO",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 130}`,
      description: "This double-breasted blazer is lined with silk and has a boxy profile with bold shoulders and straight sleeves."
    },
    {
      itemImg: jacket2,
      itemName: "VALENTINO",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 140}`,
      description: "This double-breasted blazer is lined with silk and has a boxy profile with bold shoulders and straight sleeves."
    },
    {
      itemImg: jacket4,
      itemName: "VALENTINO",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 150}`,
      description: "This double-breasted blazer is lined with silk and has a boxy profile with bold shoulders and straight sleeves."
    },
    {
      itemImg: jacket5,
      itemName: "VALENTINO",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 160}`,
      description: "This double-breasted blazer is lined with silk and has a boxy profile with bold shoulders and straight sleeves."
    },
    {
      itemImg: jacket6,
      itemName: "VALENTINO",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 110}`,
      description: "This double-breasted blazer is lined with silk and has a boxy profile with bold shoulders and straight sleeves."
    },
    {
      itemImg:jacket7,
      itemName: "VALENTINO",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 100}`,
      description: "This double-breasted blazer is lined with silk and has a boxy profile with bold shoulders and straight sleeves."
    },
    {
      itemImg: jacket8,
      itemName: "VALENTINO",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 170}`,
      description: "This double-breasted blazer is lined with silk and has a boxy profile with bold shoulders and straight sleeves."
    },
    {
      itemImg: jacket8,
      itemName: "VALENTINO",
      stars: [stars, stars, stars, unrated, unrated],
      amount: `${"$ " + 909}`,
      description: "This double-breasted blazer is lined with silk and has a boxy profile with bold shoulders and straight sleeves.",
    },
  ];
  return (
    <ScrollView style={style.motherDiv}>
      <Text style={style.topic}>Women Cloths</Text>
      <TextInput style={style.input} placeholder={"Enter search"} />
      <TouchableOpacity style={style.rightBtn}>
        <Text style={style.rightBtnText}>Filter</Text>
      </TouchableOpacity>
      <FlatList
        data={items}
        renderItem={({ item }) => {
          return (
            <Item
              itemImg={item.itemImg}
              itemName={item.itemName}
              description={item.description}
              stars={item.stars}
              amount={item.amount}
            />
          );
        }}
        keyExtractor={(item, index) => item.amount}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({

    motherDiv: {
        backgroundColor: '#EFEFF6',
    },
  topic: {
    fontSize: 22,
    fontWeight:700,
    marginLeft: 20,
    marginTop: 10,
    color: '#000'
  },

  rightBtn: {
    position: "relative",
    bottom: 60,
    left: 300,
  },
  input: {
    marginVertical: 20,
    marginHorizontal: 20,
    height: 55,
    backgroundColor: "#fff",
    shadowColor: "#131313",
    elevation: 4,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 16,
  },

  rightBtnText: {
    color: "blue",
    fontSize: 14,
    fontWeight: 600
  },
});

export default ListOfItems;
