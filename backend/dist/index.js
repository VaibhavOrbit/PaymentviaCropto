"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3")); // Web3 library for interacting with Ethereum blockchain
const abi_1 = require("./abi"); //ABI -> Application Binary interface -> yeh function or even yeh intract karne ki liye
const providerUrl = "wss://eth-sepolia.g.alchemy.com/v2/-LfeQetWiY0bTjek-O-pH";
const contractAddress = "0x6089a150c34d2f16584C4Fc06DEDd7Ce958B2cc9";
const webhookUrl = "https://your-dummy-fetch-url";
const web3 = new web3_1.default(new web3_1.default.providers.WebsocketProvider(providerUrl));
const contract = new web3.eth.Contract(abi_1.abi, contractAddress);
// @ts-ignore
contract.events.PaymentReceived({
    fromBlock: 0 //its start from zero th block of the blockchain  
})
    .on('data', function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Adding user ${event.returnValues.email} to the course`);
        // axios.post(webhookUrl, {
        //     email: event.returnValues.email,
        // });
    });
});
