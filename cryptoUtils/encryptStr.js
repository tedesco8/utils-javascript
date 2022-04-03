import {JSEncrypt } from 'jsencrypt';

export const encryptStr = (publicKey, str) => {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(str);
}