import {Site} from "./site";
import {Sidebar} from "./sidebar";

String.prototype.capitalize = function() {
    if(this.length === 0) {
        return ''
    }
    return this[0].toUpperCase() + this.substring(1)
};

export class App {
    constructor(model) {
        this.model = model
    }

    init() {
        const site = new Site('#site');
        site.render(this.model);

        const rerender = block => {
            this.model.push(block);
            site.render(this.model)
        };

        new Sidebar('#panel', rerender).init()
    }
}
