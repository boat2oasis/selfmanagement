import React, {forwardRef,useState,useImperativeHandle,useRef} from 'react';
import {Alert, Modal, StyleSheet,
  TextInput, Text,Image, Pressable, View} from 'react-native';
  import AccountList from './accountList';
  import Necessary from './necessary';
  const SettingScreen = forwardRef((props, ref) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [totalVaule, setTotalVaule] = useState("");
  const [accountValue, setAccountValue] = useState("选择账户");
  const [necessaryValue, setNecessaryValue] = useState("支出类型");
  interface SpendMoney {
    id: number;
    accountId: string;
    necessaryId: string;
    spendAmount: string;
    description: string;
  }
  const spendMoney: SpendMoney = {
    id: 1,
    accountId: "",
    necessaryId: "",
    spendAmount: "",
    description: ""
  };

  const sendPostRequest = async () => {
    try {
      const response = await fetch('http://192.168.11.132:8080/spendMoney/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountId: 1,
          necessaryId: 1,
          spendAmount: 1,
          description: "fdsf",
        }),
      });
      const jsonResponse = await response.json();
      Alert.alert('请求返回是'+jsonResponse);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const saveSpendMoney = () => {
    sendPostRequest()
    setModalVisible(!modalVisible)
  }
  //设置子组件
  const childRef = useRef(AccountList);
  const necessaryRef = useRef(Necessary);
  //调用子组件显示方法
  const callAccountListDoSetModalVisible = () => {
    if (childRef.current) {
      //调用子组件方法，不影响系统正常运行
      childRef.current.doSetModalVisible();
    }
  }

  const callNecessaryDoSetModalVisible = () => {
    if (necessaryRef.current) {
      //调用子组件方法，不影响系统正常运行
      necessaryRef.current.doSetModalVisible();
    }
  }
  
  const handleReceiveDataToParent = (account) => {
    setAccountValue(account.accountName)
   // Alert.alert('id是'+account.id);
    //Alert.alert('name是'+account.accountName);
  };

  const handleReceiveNecessaryDataToParent = (account) => {
    setNecessaryValue(account.name)
  };

  const putSpendVal = (i:string) => {
    setTotalVaule(totalVaule+i)
  }
  useImperativeHandle(ref, () => ({
    doSetModalVisible() {
      setModalVisible(!modalVisible);
    },
  }));
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
            
              <Pressable onPress={() => callAccountListDoSetModalVisible()}>
                <Text style={styles.modalText}>{accountValue}</Text>
              </Pressable>


              <Pressable onPress={() => callNecessaryDoSetModalVisible()}>
              <Text style={styles.modalText}>{necessaryValue}</Text>
              </Pressable>

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
                    value={totalVaule}
                    autoFocus={false}
                    placeholder=""
                  />
                </View>
            </View>
            <AccountList receiveDataToParent={handleReceiveDataToParent}  ref={childRef}/>
            <Necessary receiveDataToParent={handleReceiveNecessaryDataToParent}  ref={necessaryRef}/>


            <View style={{flexDirection:'row',width:280}}>
            <TextInput
              style={{}}
              placeholder="请输入备注内容"
            />
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',width:250}}>
            <View>
              <View style={{flexDirection:'row',justifyContent:'space-between',width:150}}>
              <Pressable onPress={() => putSpendVal("1")}>
                  <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                    1
                  </Text >
                </Pressable>

                <Pressable onPress={() => putSpendVal("2")}>
                  <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                    2
                  </Text >
                </Pressable>

                <Pressable onPress={() => putSpendVal("3")}>
                  <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                    3
                  </Text>
                </Pressable>
              </View>

              <View style={{flexDirection:'row',justifyContent:'space-between',width:150}}>
              <Pressable onPress={() => putSpendVal("4")}>
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  4
                </Text >
              </Pressable>

              <Pressable onPress={() => putSpendVal("5")}>
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  5
                </Text >
              </Pressable>

              <Pressable onPress={() => putSpendVal("6")}>
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  6
                </Text>
              </Pressable>

              </View>

              <View style={{flexDirection:'row',justifyContent:'space-between',width:150}}>

              <Pressable onPress={() => putSpendVal("7")}>
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  7
                </Text>
              </Pressable>

              <Pressable onPress={() => putSpendVal("8")}>
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  8
                </Text >
              </Pressable>

              <Pressable onPress={() => putSpendVal("9")}>
                <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                  9
                </Text>
              </Pressable>

              </View>

              <View style={{flexDirection:'row',justifyContent:'space-between',width:150}}>
                <Pressable onPress={() => putSpendVal(".")}>
                  <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                    .
                  </Text >
                </Pressable>

                <Pressable onPress={() => putSpendVal("0")}>
                  <Text style={{fontSize:16,color:'black',width:20,height:40}}>
                    0
                  </Text >
                </Pressable>

              </View>
            </View>

            <View>
            <Image
              source={require('./assets/delete.png')}
              style={{width: 20, height: 20,marginLeft:8}}
            />

            <Pressable
              onPress={() => saveSpendMoney()}>
                <View style={{backgroundColor:'#3CB278',width:50,height:120,
                justifyContent: 'center', // 垂直居中
                alignItems: 'center'}}>
              <Text style={{color:'white'}}>保存</Text>
            </View>
            </Pressable>
            </View>
          </View>
          </View>
        </View>
      </Modal>
    </View>
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
});

export default SettingScreen;