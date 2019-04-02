import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";
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
    let dimensions = Dimensions.get("window");
    let imageHeight = dimensions.width * 0.75;
    let imageWidth = dimensions.width;

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          {items.map((item, i) => {
            return (
              <View key={i} style={{justifyContent: "center"}}>
                <Image
                style={{ width: imageWidth, height: imageHeight }}
                source={{
                  uri: item.pic
                }}
              />
              <Text style={{textAlign: "center", fontSize: 20, fontWeight: "bold"}}>{item.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  }
});
