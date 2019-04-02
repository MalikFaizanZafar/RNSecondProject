import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import LandingScreen from "./landing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  welcomeText: {
    color: "red",
    marginBottom: 10
  },
  innerContainer: {
    padding: 10
  },
  btnGoogle: {
    color: "black"
  }
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome To Second Project App</Text>
        <View style={styles.innerContainer}>
          <View>
            <Button
              title="Login With Facebook"
              onPress={() => this.props.navigation.navigate("Landing")}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Button
              color="red"
              style={{ marginTop: 20 }}
              title="Login With Google"
              style={styles.btnGoogle}
              onPress={() => this.props.navigation.navigate("Landing")}
            />
          </View>
        </View>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>About!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}


const LandingTabNavigator = createBottomTabNavigator({
  Landing: LandingScreen,
  About: AboutScreen,
  Settings: SettingsScreen
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'home') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'recipe') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#d2959f',
    inactiveTintColor: 'gray',
  },
});

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Landing : LandingTabNavigator
}, {
  initialRouteName: 'Home',
  header: null,
  headerMode: 'none'
});

export default createAppContainer(AppNavigator);
