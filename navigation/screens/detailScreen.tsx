import React from 'react';
import { View, ScrollView,Text, StyleSheet,Image, ImageBackground,TextInput,TouchableOpacity} from 'react-native';
const DetailScreen = () => {
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
        }}>2024年4月</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1,paddingTop:40}}>日</Text>
        <Text style={{flex: 1,paddingTop:40}}>一</Text>
        <Text style={{flex: 1,paddingTop:40}}>二</Text>
        <Text style={{flex: 1,paddingTop:40}}>三</Text>
        <Text style={{flex: 1,paddingTop:40}}>四</Text>
        <Text style={{flex: 1,paddingTop:40}}>五</Text>
        <Text style={{flex: 1,paddingTop:40}}>六</Text>
      </View>

      <View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1,paddingTop:20,width:15}}>31</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>1</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>2</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>3</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>4</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>5</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>6</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={{flex: 1,paddingTop:20,width:15}}>7</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>8</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>9</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>10</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>11</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>12</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>13</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1,paddingTop:20,width:15}}>14</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>15</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>16</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>17</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>18</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>19</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>20</Text>
      </View>


      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1,paddingTop:20,width:15}}>21</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>22</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>23</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>24</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>25</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>26</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>27</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={{flex: 1,paddingTop:20,width:15}}>28</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>29</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>30</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>1</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>2</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>3</Text>
        <Text style={{flex: 1,paddingTop:20,width:15}}>4</Text>
      </View>
      </View>

    <View style={{flexDirection: 'row',paddingTop:30}}>
        <Text style={{
          color:'#000000',
          fontSize:16,
        }}>今天</Text>

        <Text style={{paddingLeft:20,paddingTop:2}}>农历三月初九</Text>

      </View>


      <View style={styles.assertsList}>
 
      <Image
            source={require('./assets/water.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>喝水</Text>
        <Text style={{marginLeft:190,color:"#FA5A61"}}>-100.00</Text>
       
      </View>

      <View style={styles.assertsList}>
      <Image
            source={require('./assets/food.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>吃饭</Text>
        <Text style={{marginLeft:190,color:"#FA5A61"}}>-100.00</Text>
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