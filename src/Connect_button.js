import './css/styles.css';
import { useEthers } from '@usedapp/core';

export function ConnectButton() {
    const { activateBrowserWallet, account } = useEthers()

    return (
      <div className="ConnectWallet card_dapp">
        {!account && <button className="btn btn--accent text--small text--medium btn-top-right" onClick={() => activateBrowserWallet()}>Connect</button>}
        {account && <button className="btn btn--accent text--small text--medium btn-top-right"> {account.slice(0, 4)}...{account.slice(account.length - 4)}</button>}
      </div>
    )
}