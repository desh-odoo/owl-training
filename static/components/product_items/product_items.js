import { rpc } from "../../core/rpc.js";

const { Component, onWillStart } = owl;

export class ProductItems extends Component {
    setup() {
        console.log("Welcome in Product Items");
        onWillStart(async () => {
            this.datas = await rpc('/get_items', { 'forum_id': this.props.ID });
            let a = (this.props.ID);
            this.datas = JSON.parse(this.datas);
            this.datas = this.datas[a];
        });
    }
}

ProductItems.template = "ProductItems";
ProductItems._name = "Product Items";
// PostList.props = {
//     params: {type: Object},
// };