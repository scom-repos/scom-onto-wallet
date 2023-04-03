/// <amd-module name="@scom/scom-onto-wallet" />
declare module "@scom/scom-onto-wallet" {
    import { EthereumProvider } from '@ijstech/eth-wallet';
    export class ONTOWalletProvider extends EthereumProvider {
        get displayName(): string;
        get image(): string;
        get provider(): any;
        get homepage(): string;
        installed(): boolean;
    }
}
