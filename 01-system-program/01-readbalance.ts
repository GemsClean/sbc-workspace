
import * as Web3 from '@solana/web3.js'

async function main() { 
    const publicKey = new Web3.PublicKey('Qnho8xDu695NUNMzfJAMUdWJjYRKRB4RrvdJS2zrUPG');
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const balance = await connection.getBalance(publicKey);
    console.log('balance', balance);
}

main();