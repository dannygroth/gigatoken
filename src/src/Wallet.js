import './css/styles.css';
import { useEthers } from '@usedapp/core';

export function ConnectMeta() {
    const { activateBrowserWallet, deactivate, account } = useEthers()

    return (
      <div className="ConnectWallet card_dapp">
        <div>
          {!account && <button className="btn btn--accent1 text--small text--medium btn-top-connect" onClick={() => activateBrowserWallet()}>Connect Wallet</button>}
        </div>
        {account && <button className="btn btn--accent1 text--small text--medium btn-top-connect"> {account.slice(0, 5)}...{account.slice(account.length - 4)}</button>}
        <br/><br/>
        {account && <button className="btn btn--accent1 text--small text--medium btn-top-connect" onClick={() => deactivate()}>Disconnect</button>}
        <br/><br/><br/>
        {account && <p className="badge text--regular connected-wallet-text">Connected Successfully!</p>}
        {account && <p className="text-dapp"><p className="badge text--small connected-wallet-secondary-text">Wallet: {account} </p></p>}
      </div>
    )
}