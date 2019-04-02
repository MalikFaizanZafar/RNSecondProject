import React from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
const items = [
  {
    name: "Item 1",
    pic: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },
  {
    name: "Item 2",
    pic: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },
  {
    name: "Item 3",
    pic: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },
  {
    name: "Item 4",
    pic: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  },
  {
    name: "Item 5",
    pic: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg"
  }
];
export default class AboutScreen extends React.Component {
  render() {
    let screenWidth = Dimensions.get('window').width
    let screenHeight = Dimensions.get('window').height
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <Card title="Items">
          {items.map((item, i) => {
            return (
              <View key={i} style={{flex : 1, alignItems: "center"}}>
                <Image
                  style={{ width: screenWidth, height: screenHeight * 0.5 }}
                  source={{ uri: item.pic }}
                />
                <Text style={{textAlign : "center", fontWeight: "bold"}}>{item.name}</Text>
              </View>
            );
          })}
        </Card>
      </ScrollView>
    );
  }
}
