import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";

export default class LandingScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    let iconSize = 35;
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
        <View style={styles.topBarIcon}>
          <Icon name="menu" color="white" size={iconSize} />
        </View>
        <View style={styles.topBarLogo}>
          <Text style={{fontSize: 20, color: "white"}}>SubQuch Logo</Text>
        </View>
        </View>
        <View>
          <Image style={{height : 120}} source={{uri:"https://images.pexels.com/photos/1001990/pexels-photo-1001990.jpeg"}}></Image>
        </View>
        <View style={styles.cardList}>
          <FlatList
            data={[
              {
                key: "1",
                name: "Pizza",
                image:
                  "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg"
              },
              {
                key: "2",
                name: "Pizza",
                image:
                  "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg"
              },
              {
                key: "3",
                name: "Pizza",
                image:
                  "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg"
              },
              {
                key: "4",
                name: "Pizza",
                image:
                  "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg"
              },
              {
                key: "5",
                name: "Pizza",
                image:
                  "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg"
              },
              {
                key: "6",
                name: "Pizza",
                image:
                  "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg"
              },
              {
                key: "7",
                name: "Pizza",
                image:
                  "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg"
              },
              {
                key: "8",
                name: "Pizza",
                image:
                  "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg"
              },
              {
                key: "9",
                name: "Pizza",
                image:
                  "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg"
              },
              {
                key: "10",
                name: "Pizza",
                image:
                  "https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg"
              }
            ]}
            renderItem={({ item }) => (
              <View style={styles.itemCard}>
                <View>
                <Image
                  style={{ width: 85, height: 85 }}
                  source={{
                    uri:item.image
                  }}
                />
                </View>
                <View style={styles.itemText}>
                <Text>{item.name}</Text>
                <Text style={{fontSize : 12}}>This is the Description of this Item</Text>
                </View>
                <View style={styles.itemBtn}>
                <Text style={{fontSize : 20, fontWeight: "bold", color: "red", padding:3}}>Rs. 100</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 23
  },
  topBar: {
    backgroundColor: "blue",
    flexDirection: "row"
  },
  topBarIcon: {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  topBarLogo: {
    marginLeft: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  itemCard: {
    flexDirection : "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#47315a"
  },
  itemText:{
    alignItems: "flex-start",
    justifyContent: "center"
  },
  itemBtn: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

export class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}