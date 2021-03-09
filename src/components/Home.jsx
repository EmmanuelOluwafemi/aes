import React, { useState } from 'react';
import Styled from 'styled-components';
import AES from 'crypto-js/aes';
import CryptoJS from 'crypto-js';

import bg from './bg.jpg';

const Home = () => {
    const [encryptionValue, setEncryptionValue] = useState('');
    const [encryptionPassword, setEncryptionPassword] = useState('');
    const [decryptionValue, setDecryptionValue] = useState('');
    const [decryptionPassword, setDecryptionPassword] = useState('');
    const [encryptOutput, setEncryptOutput] = useState('');
    const [decryptOutput, setDecryptOutput] = useState('');

    const handleDecrypt = (e) => {
        e.preventDefault();
        if (encryptionValue !== '' && encryptionPassword !== '') {
            var encrypted = AES.encrypt(encryptionValue, encryptionPassword);
            setEncryptOutput(encrypted.toString());
        }
        else {
            alert('Please Fill All Encryption Fields!!!!')
        }
    }

    const handleEcrypt = (e) => {
        e.preventDefault();
        if (decryptionValue !== '' && decryptionPassword !== '') {    
            var decrypted = AES.decrypt(decryptionValue, decryptionPassword);
            var decryptedMessage = decrypted.toString(CryptoJS.enc.Utf8);
            setDecryptOutput(decryptedMessage.toString());
        }

        else {
            alert('Please Fill all Decryption field!!!!');
        }

    }
    
    const handleDeMessageChage = (e) => {
        let value = e.target.value;
        setEncryptionValue(value);
    }

    const handleDePasswordChage = (e) => {
        let value = e.target.value;
        setEncryptionPassword(value);
    }

    const handleEnMessageChage = (e) => {
        let value = e.target.value;
        setDecryptionValue(value);
    }

    const handleEnPasswordChage = (e) => {
        let value = e.target.value;
        setDecryptionPassword(value);
    }

    return (
        <HomeStyle className="pb-5">
            <div className="container">
                <h1>AES ENCRYPTION BY <span>GROUP 2</span></h1>
                <p>The Advanced Encryption Standard (AES) is a symmetric block cipher 
                    chosen by the U.S. government to protect classified information. 
                    AES is implemented in software and hardware throughout the world to 
                    encrypt sensitive data. It is essential for government computer security, 
                    cybersecurity and electronic data protection.
                </p>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h3>Encrypt</h3>

                        <form>
                            <div className="inputGroup">
                                <label htmlFor="">Message</label>
                                <textarea onChange={handleDeMessageChage}></textarea>
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="">Password</label>
                                <input onChange={handleDePasswordChage} type="password"/>
                            </div>
                            <button onClick={handleDecrypt}>Encrypt</button>
                        </form>

                        <div className="output mt-5">
                            <span>Output</span>
                            {encryptOutput}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3 className="mt-5 mt-md-0">Decrypt</h3>

                        <form>
                            <div className="inputGroup">
                                <label htmlFor="">Encrypted Message</label>
                                <textarea onChange={handleEnMessageChage}></textarea>
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="">Password</label>
                                <input onChange={handleEnPasswordChage} type="password"/>
                            </div>
                            <button onClick={handleEcrypt} className="white">Decrypt</button>
                        </form>

                        <div className="output mt-5">
                            <span>Output</span>
                            {decryptOutput}
                        </div>
                    </div>
                </div>
            </div>
        </HomeStyle>
    )
}

export default Home;

const HomeStyle = Styled.div`
    max-width: 100vw;
    width: 100%;
    min-height: 100vh;
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
        height: auto;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        text-align: center;
        padding-top: 56px;

        span {
            color: #E1A304;
        }
    }

    h3 {
        font-size: 1.5rem;
        font-weight: bold;
        color: #E1A304;
        text-transform: uppercase;
    }

    p {
        font-size: .8rem;
        color: #fff;
        font-weight: 500;
        text-align: center;
        margin-top: 1rem;
    }

    .inputGroup {
        width: 100%;
        min-height: 100px;
        margin-bottom: 1.2rem;

        label {
            display: block;
            font-size: 1rem;
            font-weight: 500;
            color: #fff;
            margin-bottom: 1rem;
        }

        input, textarea {
            width: 100%;
            max-width: 400px;
            height: 4rem;
            background: none;
            border: 2px solid #EDEDED;
            border-radius: 24px;
            border-top-left-radius: 0;
            outline: none;
            padding: 24px;
            color: #fff;
        }

        textarea {
            height: 5rem;
        }    
    }

    button {
        border-radius: 24px;
        border-top-left-radius: 0;
        padding: 12px 32px;
        background: #E1A304;
        color: #fff;
        font-weight: 700;
        font-size: 1.1rem;
        border: none;
        outline: none;
        transition: all .3s ease-in;

        &.white {
            background: #CECECE;
            color: #E1A304;
        }

        &:hover {
            background: #fff;
            color: #E1A304;
        }
    }

    .output {
        position: relative;
        width: 100%;
        min-height: 6rem;
        border-radius: 24px;
        border-top-left-radius: 0;
        border: 2px solid #fff;
        padding: 1rem;
        padding-top: 38px;
        padding-bottom: 0;
        font-size: 1rem;
        font-weight: 700;
        word-wrap: break-word;
        color: #fff;

        span {
            position: absolute;
            top: 0;
            left: 0;
            padding: 8px 24px;
            background: #E1A304;
            color: #fff;
            font-size: .8rem;
            font-weight: bold;
            text-transform: uppercase;
        }
    }
`;
