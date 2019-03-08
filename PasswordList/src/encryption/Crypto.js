import { AsyncStorage } from 'react-native';
import SimpleCrypto from "simple-crypto-js";

export default class Crypto {
  static async encryptData(fileUid, data, callBack) {
     let cipherText = '';
     let err = null;
    try {
      const res = await AsyncStorage.getItem(fileUid);
      if (res !== null) {
        const simpleCrypto = new SimpleCrypto(res);
        cipherText = simpleCrypto.encrypt(data);
      }
      else {
        const key = SimpleCrypto.generateRandom();
        await AsyncStorage.setItem(fileUid, key);
        const simpleCrypto = new SimpleCrypto(key);
        cipherText = simpleCrypto.encrypt(data);
      }
    } catch (e) {
      err = e;
    } finally {
      callBack(err, cipherText);
    }
  }

  static async decryptData(fileUid, data, callBack) {
    let plainText = '';
    let err = null;
    try {
      const res = await AsyncStorage.getItem(fileUid);
      if (res !== null) {
        const simpleCrypto = new SimpleCrypto(res);
        plainText = simpleCrypto.decrypt(data);
      }
    } catch (e) {
      err = e;
    } finally { 
      callBack(err, plainText);
    }
  }
}