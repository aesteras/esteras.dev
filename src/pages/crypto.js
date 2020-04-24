import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const UTF8 = {
  encode: d => new TextEncoder().encode(d),
  decode: e => new TextDecoder("utf-8").decode(e)
};

const encrypt = () => {
  let workerEncrypt = new Worker("/worker-encrypt.js");
  let dataObject = {
    decryptedMessage: UTF8.encode(document.getElementById("decrypted").value),
    passwordAsBytes: UTF8.encode(prompt("Enter your password:"))
  };
  workerEncrypt.postMessage(dataObject, [dataObject.decryptedMessage.buffer]);
  workerEncrypt.onmessage = event => {
    document.getElementById("encrypted").value = UTF8.decode(event.data.encryptedMessage);
    document.getElementById("decrypted").value = "";
  };
};

const decrypt = () => {
  let workerDecrypt = new Worker("/worker-decrypt.js");
  let dataObject = {
    encryptedMessage: UTF8.encode(document.getElementById("encrypted").value),
    passwordAsBytes: UTF8.encode(prompt("Enter your password:"))
  };
  workerDecrypt.postMessage(dataObject, [dataObject.encryptedMessage.buffer]);
  workerDecrypt.onmessage = event => {
    document.getElementById("decrypted").value = UTF8.decode(event.data.decryptedMessage);
    document.getElementById("encrypted").value = "";
  };
};

const TextField = styled.textarea`
  width: 100%;
  height: 10rem;
  resize: none;
  border: 1px solid #111111;
  border-radius: 5px;
  padding: 5px;
  margin: 1rem 0;
  font-family: 'Courier New', Courier, monospace;
`

export default () => (
  <Layout>
    <h1 style={{ textAlign: `center` }}>Web Cryptography API Demo</h1>
    <p>Here you can try my implementation of client-side in-browser encryption using only the Web Cryptography API along
      with web workers for efficiency.</p>
    <h3>Usage</h3>
    <p>Type your text in the text area below and click the buttons to encrypt and decrypt.</p>
    <TextField id="decrypted" placeholder="plain text"/>
    <div style={{
      maxWidth: `20rem`,
      margin: `auto`,
      display: `flex`,
      flexFlow: `row nowrap`,
      justifyContent: `space-around`
    }}>
      <a style={{ cursor: `pointer` }} id="buttonEncrypt" onClick={encrypt}>Encrypt</a>
      <a style={{ cursor: `pointer` }} id="buttonDecrypt" onClick={decrypt}>Decrypt</a>
    </div>
    <TextField id="encrypted" placeholder="encrypted text"/>
  </Layout>
)
