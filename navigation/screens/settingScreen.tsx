import React, {useState} from 'react';
import {Alert, Modal, StyleSheet,
  TextInput, Text,Image, Pressable, View,Keyboard, TouchableWithoutFeedback} from 'react-native';

function inputOnFocus(){
  console.log("Hello world");
}

const SettingScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
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
            <Text style={styles.modalText}>支出.消费</Text>

            <View style={{flexDirection: 'row',width:300}}>
              <Text style={styles.modalText}>选择账户</Text>
              <Text style={styles.modalText}>支出类型</Text>
              <Text style={styles.modalText}>消费时间</Text>
            </View>

            <View style={{flexDirection:'row',width:300}}> 
    
                  <Image
                      source={require('./assets/rmb.png')}
                      style={{width: 16, height: 16,marginLeft:16,marginTop:17}}
                    />
                    <View pointerEvents="none">
                  <TextInput
                    style={{}}
                    autoFocus={false}
                    placeholder=""
                  />
                </View>
            </View>

            <View style={{flexDirection:'row',width:280}}>
            <TextInput
              style={{}}
              placeholder="请输入备注内容"
            />
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',width:250}}>
            <View>
              <View style={{flexDirection:'row',justifyContent:'space-between',width:150}}>
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  1
                </Text >
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  2
                </Text >
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  3
                </Text>
              </View>

              <View style={{flexDirection:'row',justifyContent:'space-between',width:150}}>
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  4
                </Text >
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  5
                </Text >
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  6
                </Text>
              </View>

              <View style={{flexDirection:'row',justifyContent:'space-between',width:150}}>
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  7
                </Text >
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  8
                </Text >
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  9
                </Text>
              </View>
              

              <View style={{flexDirection:'row',justifyContent:'space-between',width:150}}>
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  .
                </Text >
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  0
                </Text >
              </View>
            </View>

            <View>
            <Image
              source={require('./assets/delete.png')}
              style={{width: 20, height: 20,marginLeft:8}}
            />

            <View style={{backgroundColor:'#3CB278',width:50,height:120,
    justifyContent: 'center', // 垂直居中
    alignItems: 'center'}}>
              <Text style={{color:'white'}}>保存</Text>
            </View>

            </View>
          </View>
          </View>
        </View>


        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
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
});

export default SettingScreen;