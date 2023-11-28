import * as Web3 from '@solana/web3.js';
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('2njwYbjuViFACJA6VL2AFx9K9fPqEtuRdxdEyC1jG6kADAaB3N35uFGFRHoE7E4dBPgM5yzqpQimUQazW9qmSE7Q')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)

    const publicKeyFrom = new Web3.PublicKey('Qnho8xDu695NUNMzfJAMUdWJjYRKRB4RrvdJS2zrUPG');
    const publicKeyTo = new Web3.PublicKey('HUdEfMhmqGsXhuHjC6WwP2vsHd2Dqj5mX1vgyA9nSPB9');

    const instruction = Web3.SystemProgram.transfer({
        fromPubkey: publicKeyFrom,
        toPubkey: publicKeyTo,
        lamports: 2000000000,
    });
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const txSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [keyPair]);

    console.log('txHash', txSignature);
}

main();/workspaces/sbc-workspace/01-system-program/02-transfer-sol.ts