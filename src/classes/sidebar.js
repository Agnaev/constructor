import {sideBlock} from "../utils";
import * as blocks from "./blocks";

export class Sidebar {
    constructor(selector, rerender) {
        this.el = document.querySelector(selector);
        this.rerender = rerender;
    }

    init() {
        this.el.insertAdjacentHTML('afterbegin', this.markup);
        this.el.addEventListener('submit', e => this.add(e))
    }

    add(event) {
        event.preventDefault();
        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;

        let newBlock = new blocks[type.capitalize() + 'Block'](value, {styles});
        this.rerender(newBlock);

        event.target.value.value = '';
        event.target.styles.value = '';
    }

    get markup() {
        return [
            sideBlock('text'),
            sideBlock('title')
        ].join('')
    }
}
