import React from 'react';
import { View, ScrollView,Text, StyleSheet,Image, ImageBackground,TextInput,TouchableOpacity} from 'react-native';
const HomeScreen = () => {
  return (
    <ScrollView style={{backgroundColor:'#FFFFFF'}}>
   <ImageBackground
      source={require('./assets/background.png')}
      resizeMode="stretch"
      style={styles.image}
    >
      <View style={styles.container}>
        <Text style={styles.text}>我的账本</Text>
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

      <View>
      <View style={styles.searchAndAddAssert}>

        <View style={styles.searchAssert}> 
          <Image
              source={require('./assets/search.png')}
              style={{width: 16, height: 16,marginLeft:8}}
            />
          <TextInput
            style={{}}
            placeholder="搜索资产"
          />
        </View>
        <TouchableOpacity style={styles.addAssert}>
        <Image
            source={require('./assets/add.png')}
            style={{width: 16, height: 16,marginLeft:8}}
          />
          <Text style={{color:'white',marginLeft:5,marginTop:-3}}>
            添加资产
          </Text>
        </TouchableOpacity>
      </View>
      </View>
      
      <View style={styles.assertSummery}>
        <Text style={{color:'black'}}>资金</Text>
        <View style={styles.assertNumberSummery}>
          <Text>共</Text>
          <Text>900</Text>
        </View>
      </View>

      <View style={{marginTop:12}}>
      
      <View style={styles.assertsList}>
 
      <Image
            source={require('./assets/zs.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>儲蓄卡-招商银行</Text>
        <Text style={{marginLeft:120,color:"#FA5A61"}}>100.00</Text>
       
      </View>

      <View style={styles.assertsList}>
      <Image
            source={require('./assets/zgyh.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>儲蓄卡-中国银行</Text>
        <Text style={{marginLeft:120,color:"#FA5A61"}}>100.00</Text>
       
      </View>

      <View style={styles.assertsList}>
      <Image
            source={require('./assets/wx.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>微信支付</Text>
        <Text style={{marginLeft:168,color:"#FA5A61"}}>100.00</Text>
       
      </View>


      <View style={styles.assertsList}>
      <Image
            source={require('./assets/zfb.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>支付宝</Text>
        <Text style={{marginLeft:182,color:"#FA5A61"}}>100.00</Text>
      </View>

      <View style={styles.assertsList}>
      <Image
            source={require('./assets/jj.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>天天基金</Text>
        <Text style={{marginLeft:170,color:"#FA5A61"}}>100.00</Text>
      </View>



     

      


      </View>

    </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  assertsList:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:20,
    marginTop:14
  },
  assertNumberSummery:{
    marginLeft:250,
    flexDirection: 'row',
    alignItems: 'center',
  },

  assertSummery:{
    marginTop:20,
    marginLeft:20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchAssert:{
    flexDirection: 'row',
    alignItems: 'center',
    height:40,
  
    marginLeft:20,
    lineHeight:12,
    width:190,
    borderColor:'#000000',
    backgroundColor:'#F9F9F9',
    marginTop:16,
    borderRadius:15,
    
  },
  searchAndAddAssert:{
    flexDirection: 'row',
    alignItems: 'center',

  },
  addAssert: {
    backgroundColor:'#FAA63D',
    borderRadius:15,
    marginLeft:40,
    width:94,
    marginTop:16,
    height:32,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  totalAssert:{
    marginTop:30,
    width:320,
    height:82,
    backgroundColor:'white', 
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F9EFEF',
  },
  container: {
    marginLeft:20,
    marginTop:45
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;