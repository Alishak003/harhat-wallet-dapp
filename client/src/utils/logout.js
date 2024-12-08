export function logout(setAccount, setBalance, navigate) {
  sessionStorage.clear();
  setBalance(null);
  setAccount(null);
  navigate("/");
}
