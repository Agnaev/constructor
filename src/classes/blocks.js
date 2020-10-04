import {column, css, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value;
        this.options = options;
    }

    render() {
        throw new Error('Not implemented.')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    render() {
        const {
            tag = 'h1',
            styles = ''
        } = this.options;
        return row(
            column(
                `<${tag}>${this.value}</${tag}>`
            ),
            css(styles)
        )
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    render() {
        const {imageStyles: is={}, alt='', styles=''} = this?.options;
        return row(
            `<img src="${this.value}" alt="${alt}" style="${css(is)}"/>`,
            css(styles)
        )
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    render() {
        const html = this.value.reduce((acc, item) => acc + column(item), '');
        return row(html, css(this.options?.styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    render() {
        return row(
            column(
                `<p>${this.value}</p>`
            ),
            css(this?.options?.styles)
        )
    }
}
