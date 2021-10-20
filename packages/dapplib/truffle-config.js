require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile provide hunt nasty flush square'; 
let testAccounts = [
"0xd9eb92f4035c4c60735a29f1c2f5d6e1efda6b5cbaabd9604486381581fab6cf",
"0x4563286fa77efa7e2267d077b06dd444fa125c33c9758cc87b1ed0c18ab6f1e1",
"0x4b8ddb5b9bb87614382f2cabcbd00437d861daa209d3729c5b21c33ada46b68d",
"0xd195b846f67034cfcc00a4ea200448be8cb552723978fddb0d0fc59f5ea4b859",
"0x9988b1e0b3c9514f28662eb0ef88339673ec8d4c8e78b37b187e6f0c03321cf7",
"0x485f9c85f8289ea678ff6f2057752a4b138ec9247c984e6bc484f6b8b3010c71",
"0xa3f8f453a6867736dc316888857501656bef30ae4ffa06492982d8a4c9d24c78",
"0x725a9a6e0149d5de5e2fb3ea38ff1f24a07fd73b2081a36425fce36b88927ad8",
"0x4b07a96e69b9e59ff511ad2d404dfa5fa791a6a4755a6e56e534ce8d5e6f218e",
"0x5439b2f43ded292d2c6d479984bae14bf1e32e3207786aea2e2110cafed51868"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

