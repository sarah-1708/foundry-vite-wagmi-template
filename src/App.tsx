import { useAccount, useConnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import './App.css';
import { useMyTokenMint, useMyTokenSymbol} from './wagmi.generated';


function App() {
  const { connect } = useConnect({ connector: new MetaMaskConnector() });
  const { address } = useAccount();


  const {write} = useMyTokenMint();
  const sym = useMyTokenSymbol();



  const onMint = () => {
    write({ args: [1000000000n]})
  }


  return (
    <>
      
      <h1>Sepolia Faucet</h1>
      <div className="card">
        {!address ? <button className="glow-on-hover" onClick={() => connect()}>Connect MetaMask</button> : <p>Connected as {address}</p>}
        <button type="submit" className="glow-on-hover" onClick={onMint} >Transférer les {sym.data}</button>
      </div>
    </>
  );
}

export default App;
