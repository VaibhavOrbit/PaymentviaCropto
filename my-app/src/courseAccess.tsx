import {useState} from "react";

type Props = {
  web3: any;
  courseContract: any; 
  courseFee: string;
};


export const courseAccess = ({web3 , courseContract, courseFee}: Props) => {
    const [email, setEmail] = useState('');

    const payForCourse = async () => {
        if (!web3 || !courseContract) return;

        const accounts = await web3.eth.getAccounts();
        courseContract.methods.payForCourse(email).send({ from: accounts[0], value: web3.utils.toWei(courseFee.toString(), 'ether') })
            .on('transactionHash', hash  => {
                console.log('Transaction hash:', hash);
            })  
            .on('receipt', (receipt: any) => {
                console.log('Transaction successful:', receipt);
            })
            .on('error', (error: any) => {
                console.error('Error:', error);
            });
    };

    return (
        <div>
            <a href="a">Paymet via token </a>
            <br/>
            <h1>Course Registration</h1>
            <p>Course Fee: {courseFee} ETH</p>
            <div id="dam">
            <input type="text" placeholder="email" onChange={e=> setEmail(e.target.value)} />
            </div>
            <button onClick={payForCourse}>Pay for Course</button>
        </div>
    );
};