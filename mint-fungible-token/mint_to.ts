import {
    Keypair,
    Connection,
    Commitment,
    clusterApiUrl,
} from "@solana/web3.js";
import bs58 from "bs58"
import "dotenv/config"
import { mintTo } from "@solana/spl-token";
import { PublicKey } from "@metaplex-foundation/js";

const start = async () => {
    const COMMITMENT: Commitment = "finalized"
    const CONNECTION = new Connection(clusterApiUrl("devnet"), COMMITMENT)
    const PAYER = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY ?? ""))
    const temp = await mintTo(CONNECTION, PAYER, new PublicKey("mRq98PF2ADhgmSra4pa7z3tuK9Cxgv5uJ3GcQuGArEW"), new PublicKey("5XSYz84YbzZGJ9RCVTqM9KokhX6ZcF5vbSMqYq554pJT"), PAYER, 1)
    console.log(temp.toString());
}

start();