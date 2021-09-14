require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan rice mad miss hunt inhale flock very'; 
let testAccounts = [
"0xaf5a70337b812f7ceae823a9128a934a4468726df173aea854ba9848241bc523",
"0x77b9688439fc04990464f4bc051339ac7d4fcb4322ba72a0d51b15c3b3c6500c",
"0xf403925331d94edda822caea3351ff3110669e21d9c5d8c7342b65f3eca87c80",
"0x94e47418cef61728c7bb0960bb2593fe69b349d1d56bd531ce067ca37a4d339a",
"0x2c70d8e63afcd709390d88864738285519c816a184689f8141bace21dfd62616",
"0xb09b312a3e1b627c1ae2a76f6656fd23a4a190987a3e955ef4f80750e9427e1f",
"0x5f14428ca704bcd1faa28f8581b826c1cd6902f1920a105e00abc5476713cbf9",
"0x759e050450288e6134a81a99e0969887bc1e22e3231a408d3634ad12bf73f27c",
"0xcdfb1ca3a8e2d2bca9c51d23242b78a706721eba78df672e9688279d3958d44b",
"0x70b65c7ddb9626e10da9c36e9765128d7a6fe375dc3cee7937e9ae259eaafa2e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

