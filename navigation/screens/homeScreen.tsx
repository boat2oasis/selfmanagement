import React, { useEffect, useState } from 'react';
import {View, ScrollView,Text, StyleSheet,Image, ImageBackground} from 'react-native';
const HomeScreen = () => {
  interface Account {
    id: number;
    accountName: string;
    accountAmount: string;
    accountIcon: string;
  }
  const [accountList, setAccountList] = useState<Account[]>([])
  let title="总资产"
  useEffect(() => {
   // debugger
    fetch('http://192.168.11.132:8080/acocunt/list')
   .then(response => response.json())
   .then(json => {
    setAccountList(json.data)
   console.error(accountList);

   })
   .catch(error => {
     console.error(error);
   });
  })
  
  return (
   <ScrollView style={{backgroundColor:'#FFFFFF'}}>
   <ImageBackground
      source={require('./assets/background.png')}
      resizeMode="stretch"
      style={styles.image}
      >
      <View style={styles.container}>
      </View>
      <View style={{alignItems: 'center'}}>
      <View style={styles.totalAssert}>
        <View>
          <Text style={{color: 'black',fontSize: 13,fontWeight: 'bold',marginLeft:20,marginTop:10}}>总资产</Text>
        </View>
        <View>
          <Text style={{color: '#3FBC7E',fontSize: 20,fontWeight: 'bold',marginLeft:20,marginTop:15}}>¥199999.99</Text>
        </View>
      </View>
      </View>
      <View style={{marginTop:12}}>

      {accountList.map((item) => (
          <View style={styles.assertsList}>
            <View style={[styles.assertsListLeft,styles.assertsListLeftCenter]}>
            <Image
                source={{ uri:item.accountIcon}}
                style={{width: 28, height: 28}}
            />
            <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>{item.accountName}</Text>
            </View>

            <View style={styles.assertsListRight}>
              <Text style={{color:"#FA5A61"}}>{item.accountAmount}</Text>
            </View>
          </View>
      ))}

      {accountList.map((item) => (
          <View style={styles.assertsList}>
            <View style={[styles.assertsListLeft,styles.assertsListLeftCenter]}>
            <Image
                source={{ uri:item.accountIcon}}
                style={{width: 28, height: 28}}
            />
            <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>{item.accountName}</Text>
            </View>

            <View style={styles.assertsListRight}>
              <Text style={{color:"#FA5A61"}}>{item.accountAmount}</Text>
            </View>
          </View>
      ))}
    </View>
    </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    //marginLeft:20,
    marginTop:80
  },
  totalAssert:{
    marginTop:60,
    width:320,
    height:82,
    backgroundColor:'white', 
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F9EFEF',
  },

  assertsList:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:20,
    marginRight:20,
    marginTop:14
  },

  assertsListLeftCenter:{
    flexDirection: 'row',
    alignItems: 'center',
  },

  assertsListLeft: {
    flex: 3, // 左侧占据剩余空间的1/2
  },
  assertsListRight: {
    flex: 1, // 右侧占据剩余空间的1/2
  },


  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;