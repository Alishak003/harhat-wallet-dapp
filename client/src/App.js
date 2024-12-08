import { useState, useEffect } from "react";
import "./App.css";
import logo from "./moralisLogo.svg";
import { Routes, Route } from "react-router-dom";
import { Select } from "antd";
import Home from "./components/Home";
import WalletView from "./components/WalletView";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const [account, setAccount] = useState(null);
  const [network, setNetwork] = useState(null);
  const [balance, setBalance] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState([]);

  useEffect(() => {
    const storedAccount = sessionStorage.getItem("account");
    const storedBalance = sessionStorage.getItem("balance");

    if (storedAccount && storedBalance) {
      setAccount(storedAccount);
      setBalance(storedBalance);

      // Redirect to WalletView if account and balance exist in sessionStorage
      navigate("/connectWallet");
    }
  }, [navigate]);

  return (
    <div className="App">
      <header>
        <img src={logo} className="headerLogo" alt="logo" />
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              account={account}
              balance={balance}
              setAccount={setAccount}
              setBalance={setBalance}
              setNetwork={setNetwork}
              setTransactionHistory={setTransactionHistory}
            />
          }
        />
        {account && balance && (
          <Route
            path="/connectWallet"
            element={
              <WalletView
                account={account}
                balance={balance}
                setAccount={setAccount}
                setBalance={setBalance}
                transactionHistory={transactionHistory}
                setTransactionHistory={setTransactionHistory}
              />
            }
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
