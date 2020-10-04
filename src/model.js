import image from './assets/image.jpg'
import {TextBlock, TitleBlock, ImageBlock, ColumnsBlock} from './classes/blocks'

export const model = [
    new TitleBlock('Конструктор', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to bottom, #222, #fff)',
            color: 'green',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock(image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '1000px',
            height: 'auto'
        },
        alt: 'Это картинка'
    }),
    new ColumnsBlock([
        '<a href="https://vk.com/deathjoke">vk</a>',
        '<a href="https://github.com/Agnaev">GitHub</a>'
    ], {
        styles: {
            background: 'linear-gradient(to bottom, #fff, #000)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold',
            display: 'flex',
        }
    }),
    new TextBlock('Ночь, улица, фонарь, аптека...', {
        styles: {
            background: 'linear-gradient(to bottom, #000, #fff)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    })
]