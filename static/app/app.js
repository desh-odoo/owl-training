import { rpc } from "../core/rpc.js";
import { Header } from "../components/header/header.js";
import { ProductCategory } from "../components/product_category/product_category.js";
import { ProductItems } from "../components/product_items/product_items.js";
const { Component, mount, whenReady, useState } = owl;

export class Content extends Component {

}

Content.template = "Content";
Content.components = { ProductCategory, ProductItems};

class Ecomm extends Component {

    setup() {
        this.allComponents = { 'ProductCategory': ProductCategory, 'ProductItems': ProductItems };
        const currentComp = this.allComponents['ProductCategory'];
        this.state = useState({ currentScreen: currentComp, params: {}});
    }

    /**
     * Changes current screen to given screen name.
     *
     * @param {DOMEvent} ev 
     */
    _onChangeScreen(ev) {
        const screenName = ev.detail.screenName;
        const params = ev.detail.params;
        const currentComp = this.allComponents[screenName];
        this.state.currentScreen = currentComp;
        this.state.params = params;
    }
    
}



Ecomm.template = "Ecomm";
Ecomm.components = { Header, Content};

async function setup() {
    const templates = await rpc("/load-qweb", {});
    // const templateFetch = await fetch("static/app/app.xml");
    // const templates = await templateFetch.text();
    const env = {};
    mount(Ecomm, document.body, { templates, env });
}

whenReady(setup);