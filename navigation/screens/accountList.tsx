import React, {useState} from 'react';
import {Alert, Modal, StyleSheet,
  TextInput, Text,Image, Pressable, View,Keyboard, TouchableWithoutFeedback} from 'react-native';
  const SettingScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [totalVaule, setTotalVaule] = useState("");
  const putSpendVal = (i:string) => {
    setModalVisible(true)
    //Alert.alert('Modal has been closed.');
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>选择资产</Text>
            <View>

      <View style={styles.assertsList}>
      <Image
            source={require('./assets/zs.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>儲蓄卡-招商银行</Text>
        <Text style={{marginLeft:120,color:"#FA5A61"}}>100.00</Text>
       
      </View>



      <Pressable onPress={() => putSpendVal("1")}>
        <View style={styles.assertsList}>
        <Image
              source={require('./assets/wx.png')}
              style={{width: 28, height: 28}}
            />
            
                <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>微信支付</Text>
          <Text style={{marginLeft:168,color:"#FA5A61"}}>100.00</Text>
          
        </View>
        </Pressable>
     




      <View style={styles.assertsList}>
      <Image
            source={require('./assets/zfb.png')}
            style={{width: 28, height: 28}}
          />
        <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>支付宝</Text>
        <Text style={{marginLeft:182,color:"#FA5A61"}}>100.00</Text>
      </View>

      </View>
 
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-end',
    marginBottom: -20,
  },
  modalView: {
    margin: 20,
 
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    fontSize:16,
    width:100,
    color:'#404960',
    textAlign: 'center',
  },


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

export default SettingScreen;