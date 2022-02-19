
const initialize = () => {
    const onboardButton = document.getElementById('connect');
    const getAccountsButton = document.getElementById('getAccounts');
    const getAccounts = document.getElementById('getAccountsResult');

    const isMetaMaskInstalled = () => {

        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    
    };

    console.log(isMetaMaskInstalled());


    const onClickConnect = async () => {
        try{
            // `eth_requestAccounts` is RPC method for connecting metamask
            // The request causes a MetaMask popup to appear
            // then you can connect to the wallet
            await ethereum.request({method : 'eth_requestAccounts'});
        }
        catch(error){
            console.error(error);
        }
    };

    if (!isMetaMaskInstalled()){
        onboardButton.innerText = 'Click here to install MetaMask';
        console.log('prob');
    }
    else{
        // onboardButton.innerText = 'Connect';
        console.log('done')
        onboardButton.onclick = onClickConnect();
        onboardButton.disabled = false;

    }

   

    getAccountsButton.addEventListener('click',async () => {
        const accounts = await ethereum.request({method: 'eth_accounts'});
        getAccounts.innerText = accounts[0];
    })
}

window.addEventListener('DOMContentLoaded',initialize);

