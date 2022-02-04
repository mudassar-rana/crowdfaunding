
import React from 'react';
import { View } from 'react-native';
import Navigation from './src/navigation/Navigation'
import Sidebar from './src/commonComponent/sideBar/SideBar';


const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navigation />
      {/* <Sidebar /> */}
    </View>
  );
}
export default App;
