import Web3 from "web3";   // Web3 library for interacting with Ethereum blockchain
import axios from "axios"  
import {abi} from "./abi"  //ABI -> Application Binary interface -> yeh function or even yeh intract karne ki liye

const providerUrl = "wss://eth-sepolia.g.alchemy.com/v2/-LfeQetWiY0bTjek-O-pH"
const contractAddress = "0x6089a150c34d2f16584C4Fc06DEDd7Ce958B2cc9";
const webhookUrl = "https://your-dummy-fetch-url";


const web3 = new Web3(new Web3.providers.WebsocketProvider(providerUrl));
const contract = new web3.eth.Contract(abi, contractAddress);


// @ts-ignore

contract.events.PaymentReceived({
    fromBlock: 0  //its start from zero th block of the blockchain  
})
.on('data', async function(event) {
    console.log(`Adding user ${event.returnValues.email} to the course`);
    // axios.post(webhookUrl, {
    //     email: event.returnValues.email,
    // });
})