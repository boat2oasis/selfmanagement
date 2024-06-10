import React, { useEffect, useState,useRef } from 'react';
import { View, ScrollView,Text,Alert, Button, StyleSheet,Image} from 'react-native';
import SettingScreen from './settingScreen';
  const DetailScreen: React.FC = () => {
  const childRef = useRef(null);
  const [daysList, setDaysList] = useState([[]])
  const [initModalVisible, setInitModalVisible] = useState(true)
  const [monthInfo, setMonthInfo] = useState()
  const putSpendVal = () => {
    if (childRef.current) {
      //调用子组件方法，不影响系统正常运行
      childRef.current.doSetModalVisible();
    }
    setInitModalVisible(true)
  }
  useEffect(() => {
    // debugger
     fetch('http://192.168.11.132:8080/acocunt/days')
      .then(response => response.json())
      .then(json => {
        setDaysList(json.data.resultList)
        setMonthInfo(json.data.month)
    })
    .catch(error => {
    });
   }, [])
  return (
    <ScrollView>
    <View>
    <View style={styles.header}>
    </View>
    <View style={{paddingLeft:20}}>
      <View>
        <Text style={{paddingTop:26,
          fontSize:20,
          fontStyle: 'italic',
          color:'black'
        }}>{monthInfo}</Text>
      </View>
      <View>
      {daysList.map((itemList) => (
        <View style={{flexDirection: 'row'}}>
          {itemList.map((item) => (
            <Text style={{flex: 1,paddingTop:20,width:15}}>{item}</Text>
          ))}
        </View>
      ))}
      </View>

    <View style={{flexDirection: 'row',paddingTop:30}}>
        <Text style={{
          color:'#000000',
          fontSize:16,
        }}>今天</Text>

        <Text style={{paddingLeft:20,paddingTop:2}}>农历三月初九</Text>
        
        <View style={{paddingLeft:110,paddingTop:0}}>
        <Button
          title="新增记录"
          onPress={() => putSpendVal()}
        /></View>

      </View>

      <SettingScreen ref={childRef}/>


      <View style={styles.assertsList}>
 
      <Image
            source={require('./assets/water.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>喝水</Text>
        <Text style={{marginLeft:190,color:"#FA5A61"}}>-700.00</Text>
       
      </View>

      <View style={styles.assertsList}>
      <Image
            source={require('./assets/food.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>吃饭</Text>
        <Text style={{marginLeft:190,color:"#FA5A61"}}>-900.00</Text>
      </View>


      <View style={styles.assertsList}>
      <Image
            source={require('./assets/traffic.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>交通</Text>
        <Text style={{marginLeft:190,color:"#FA5A61"}}>-100.00</Text>
      </View>

      <View style={styles.assertsList}>
      <Image
            source={require('./assets/electricity.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>水电</Text>
        <Text style={{marginLeft:190,color:"#FA5A61"}}>-100.00</Text>
      </View>

      <View style={styles.assertsList}>
      <Image
            source={require('./assets/house.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>房租</Text>
        <Text style={{marginLeft:190,color:"#FA5A61"}}>-100.00</Text>
      </View>

      <View style={styles.assertsList}>
      <Image
            source={require('./assets/clothes.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>衣物</Text>
        <Text style={{marginLeft:190,color:"#FA5A61"}}>-100.00</Text>
      </View>
      
      <View style={styles.assertsList}>
      <Image
            source={require('./assets/zs.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>其他</Text>
        <Text style={{marginLeft:190,color:"#FA5A61"}}>-100.00</Text>
      </View>

    </View>
    </View>
    </ScrollView>

  );
};
const styles = StyleSheet.create({
  header: {
    height:54,
    backgroundColor:"#3FBC7E"
  },

  assertsList:{
    flexDirection: 'row',
    alignItems: 'center',

    marginTop:14
  },

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  text: {
    width: 15,
    textAlign: 'center',
  },
  app: {
    flex: 7, // the number of columns you want to devide the screen into
    marginHorizontal: "auto",
    width: 20,
    backgroundColor: "red"
  },
  row: {
    flexDirection: "row"
  }
});

export default DetailScreen;