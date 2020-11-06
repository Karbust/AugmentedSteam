import ContextType from "../../../Modules/Context/ContextType";
import {CStoreBase} from "../Common/CStoreBase";
import FCustomGiftcardAndWallet from "./FCustomGiftcardAndWallet";

export class CFunds extends CStoreBase {

    constructor() {
        super(ContextType.FUNDS, [
            FCustomGiftcardAndWallet,
        ]);
    }
}
