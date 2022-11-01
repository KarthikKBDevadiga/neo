import {FC, useEffect} from 'react';
import { Text, View } from 'react-native';

const Header = ()=>{
  return <View style={{
    paddingHorizontal:16,
    paddingVertical:16,
    backgroundColor:'red'
  }}>
    <Text style={{color:'white', fontWeight:'bold', fontSize:16, textAlign:'center'}}>Products</Text>
  </View>
}

export default Header;
