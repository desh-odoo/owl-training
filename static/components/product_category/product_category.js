import { rpc } from "../../core/rpc.js";
//import { ForumItem } from "../../components/forum_item/forumItem.js";

const { Component, onWillStart, markup, useRef } = owl;

export class ProductCategory extends Component {
    setup() {
        onWillStart(async () => {
            this.categories = await rpc("/get_categories", {});
            this.categories = JSON.parse(this.categories).categories;
        });
        this.forumRef = useRef('forum');
    }

    /**
     * This method redirects to Items details page.
     *
     * @param {DOMEvent} ev 
     */
     _onClickForum(ev) {
         
        const ID = ev.currentTarget.getAttribute('data-id');
        console.log(ID);
        const changeScreenEvent = new CustomEvent('change-screen', { bubbles: true, detail: { screenName: 'ProductItems', params: { ID: parseInt(ID) } }}, );
        this.forumRef.el.dispatchEvent(changeScreenEvent);
        //const postList = this.env.allComponents['ProductItem'];
        //this.env.state.currentScreen = postList;
        //this.env.state.params = { ID: parseInt(ID) };
    }
}

ProductCategory.template = "ProductCategory";
//ProductCategory.components = { abc };