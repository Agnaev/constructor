function row(content, styles = '') {
    return `
        <div class="row" style="${styles}">${content}</div>
    `
}

function column(content) {
    return `
        <div class="col-sm">${content}</div>
    `
}

function css(styles = {}) {
    if (typeof styles === 'string') {
        return styles
    }
    return Object.entries(styles)
        .reduce((acc, [k, v]) => `${acc}${k}:${v};`, '')
}

function sideBlock(type) {
    const formGroup = content => `<div class="form-group">${content}</div>`;
    const input = (name, placeholder) => `<input class="form-control form-control-sm" name="${name}" placeholder="${placeholder ?? name}"/>`;

    const inputs = [
        formGroup(
            input('value', 'value')
        ),
        formGroup(
            input('styles', 'styles')
        )
    ].join('');

    return `
        <form name="${type}">
            <h5>${type}</h5>
            ${inputs}
            <button class="btn btn-primary btn-sm">Добавить</button>
        </form>
        <hr />
    `;
}

export {
    row,
    column,
    css,
    sideBlock
}