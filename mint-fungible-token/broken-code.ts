import * as Web3 from '@solana/web3.js'
import base58 from 'bs58'

async function main() {
    const decoded = base58.decode('2njwYbjuViFACJA6VL2AFx9K9fPqEtuRdxdEyC1jG6kADAaB3N35uFGFRHoE7E4dBPgM5yzqpQimUQazW9qmSE7Q')
    const keyPair = Web3.Keypair.fromSecretKey(decoded)
    
    const publicKey = new Web3.PublicKey('Qnho8xDu695NUNMzfJAMUdWJjYRKRB4RrvdJS2zrUPG');

    const programID = new Web3.PublicKey('BTJCe4JRUEgCAwPMSSz3SMRRGLFNEhM6bhSr2K9u7XP6');

    const instruction = new Web3.TransactionInstruction({
        keys: [
            {
                pubkey: publicKey,
                isSigner: true,
                isWritable: false,
            }
        ],
        data: Buffer.alloc(20),
        programId: programID,
    });
    
    const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'))
    const transaction = new Web3.Transaction();
    transaction.add(instruction);

    const signature = await Web3.sendAndConfirmTransaction(
        connection,
        transaction,
        [keyPair]
    )
    console.log('SIGNATURE', signature)
}

main()
.then(() => process.exit(0))
.catch(err => {
    console.error(err)
});