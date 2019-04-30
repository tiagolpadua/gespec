import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import AnimaisScreen from "../screens/AnimaisScreen";
import ManejosScreen from "../screens/ManejosScreen";
import SobreScreen from "../screens/SobreScreen";

// AnimaisStack
const AnimaisStack = createStackNavigator({
  Animais: AnimaisScreen
});

AnimaisStack.navigationOptions = {
  tabBarLabel: "Animais"
};

// ManejosStack
const ManejosStack = createStackNavigator({
  Manejos: ManejosScreen
});

ManejosStack.navigationOptions = {
  tabBarLabel: "Manejos"
};

// SobreStack
const SobreStack = createStackNavigator({
  Sobre: SobreScreen
});

SobreStack.navigationOptions = {
  tabBarLabel: "Sobre"
};

export default createMaterialTopTabNavigator({
  AnimaisStack,
  ManejosStack,
  SobreStack
});
