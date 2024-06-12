import React, {useState,forwardRef,useImperativeHandle,useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text,Image, Pressable, View} from 'react-native';
    interface Account {
      id: number;
      name: string;
      icon: string;
    }
    const AccountList = forwardRef((props,ref) => {
    const [accountList, setAccountList] = useState<Account[]>([])
    const [modalVisible, setModalVisible] = useState(false);
    const [totalVaule, setTotalVaule] = useState("");
    const sendDataToParent = (account:Account) => {
      //通过props调用父组件方法
      props.receiveDataToParent(account); // 调用父组件的方法
      setModalVisible(false)
    }
    const putSpendVal = (i:string) => {
      setModalVisible(false)
    }
    useEffect(() => {
      // debugger
       fetch('http://192.168.11.132:8080/necessary/list')
      .then(response => response.json())
      .then(json => {
       setAccountList(json.data)
      })
      .catch(error => {
        console.error(error);
      });
     },[])
    //暴漏给父组件调用
    useImperativeHandle(ref, () => ({
      doSetModalVisible() {
        setModalVisible(!modalVisible);
      },
    }));
  return (
    //<View style={styles.centeredView}>
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

      {accountList.map((item,index) => (
         <Pressable style={styles.assertsList} onPress={() => sendDataToParent(item)}>
          <View style={styles.assertsList}>
            <View style={[styles.assertsListLeft,styles.assertsListLeftCenter]}>
            <Image
                source={{ uri:item.icon}}
                style={{width: 28, height: 28}}
            />
            <Text style={{fontSize:14,color:'#404960',marginLeft:20}}>{item.name}</Text>
            </View>
          </View>
          </Pressable>
      ))}
      </View>
          </View>
        </View>
      </Modal>
    //</View>
  );
});
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'flex-end',
    marginBottom: -20,
  },
  modalView: {
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

});

export default AccountList;