import React, { useEffect } from "react"; // Import useEffect
import mwallet from "../mwallet.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import { init } from "../utils/connectWallet";

function Home({
  account,
  balance,
  setAccount,
  setBalance,
  setNetwork,
  setTransactionHistory,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (account && balance) {
      sessionStorage.setItem("account", account);
      sessionStorage.setItem("balance", balance);

      // Redirect to the /connectWallet page once account is set
      navigate("/connectWallet");
    }
  }, [account, balance]);

  useEffect(()=>{

  },[])
  async function connect() {
    const walletInfo = await init();
    if (walletInfo) {
      setAccount(walletInfo.account);
      setNetwork(walletInfo.networkId);
      setBalance(walletInfo.balanceInEther);
      setTransactionHistory(walletInfo.transactions);
    } else {
      console.log("Wallet initialization failed.");
    }
  }

  return (
    <>
      <div className="content">
        <img src={mwallet} alt="logo" className="frontPageLogo" />
        <h1>Hey There ✨</h1>
        <h4>Welcome to your Crypto Wallet</h4>
        <Button
          onClick={() => connect()}
          className="frontPageButton"
          type="primary"
        >
          Connect Metamask Wallet
        </Button>
      </div>
    </>
  );
}

export default Home;
