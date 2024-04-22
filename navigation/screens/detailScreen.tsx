import React from 'react';
import { View, ScrollView,Text, StyleSheet,Image, ImageBackground,TextInput,TouchableOpacity} from 'react-native';
const DetailScreen = () => {
  return (
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

      <View style={styles.app}>
        <Text style={styles.row}>28</Text>
        <Text style={styles.row}>28</Text>
        <Text style={styles.row}>28</Text>
        <Text style={styles.row}>28</Text>
        <Text style={styles.row}>28</Text>
        <Text style={styles.row}>28</Text>
      </View>

      </View>


      <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>31</Text>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
        <Text style={styles.text}>4</Text>
        <Text style={styles.text}>5</Text>
        <Text style={styles.text}>6</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>8</Text>
        <Text style={styles.text}>9</Text>
        <Text style={styles.text}>10</Text>
        <Text style={styles.text}>11</Text>
        <Text style={styles.text}>12</Text>
        <Text style={styles.text}>13</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>14</Text>
        <Text style={styles.text}>15</Text>
        <Text style={styles.text}>16</Text>
        <Text style={styles.text}>17</Text>
        <Text style={styles.text}>18</Text>
        <Text style={styles.text}>19</Text>
        <Text style={styles.text}>20</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>21</Text>
        <Text style={styles.text}>22</Text>
        <Text style={styles.text}>23</Text>
        <Text style={styles.text}>24</Text>
        <Text style={styles.text}>25</Text>
        <Text style={styles.text}>26</Text>
        <Text style={styles.text}>27</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>28</Text>
        <Text style={styles.text}>29</Text>
        <Text style={styles.text}>30</Text>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
        <Text style={styles.text}>4</Text>
      </View>
    </View>


      <View>
        <Text>今天</Text>
        <Text>农历三月初九</Text>
      </View>


    </View>
    </View>


  );
};
const styles = StyleSheet.create({
  header: {
    height:54,
    backgroundColor:"#3FBC7E"
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