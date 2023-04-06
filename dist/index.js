define("@scom/scom-onto-wallet", ["require", "exports", "@ijstech/eth-wallet", "@ijstech/components"], function (require, exports, eth_wallet_1, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        if (path.indexOf('://') > 0)
            return path;
        return `${moduleDir}/${path}`;
    }
    class ONTOWalletProvider extends eth_wallet_1.EthereumProvider {
        get displayName() {
            return 'ONTO Wallet';
        }
        get image() {
            return fullPath('img/ONTOWallet.jpg');
        }
        get provider() {
            return window['onto'];
        }
        get homepage() {
            return 'https://onto.app/en/download/?mode=app';
        }
        installed() {
            return !!window['onto'];
        }
    }
    exports.default = ONTOWalletProvider;
});
