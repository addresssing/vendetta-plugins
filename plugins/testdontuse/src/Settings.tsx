import { storage } from "@vendetta/plugin";
import { useProxy } from "@vendetta/storage";

import { Forms } from "@vendetta/ui/components";
const { FormText } = Forms;

export default () => {
    return eval(`
    const { Forms } = vendetta.ui.components;
    const { FormText } = Forms;

    React.createElement(
        FormText,
        null,
        "AAAAAAAAAAA"
    );
    `)
}