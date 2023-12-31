import { html } from '../../lib/htm-preact.js'
import { avoidReload } from '../../utils/avoidReload.js'
import prefixUriIfNeeded from '../../utils/prefixUriIfNeeded.js'

export const Category = ({ category, setActivePanel }) => html`
    <style>
        .category-block {
            height: 30rem;
            background-position: center center;
            background-size: cover;
            width: 100%;
            position: relative;
            margin-bottom: 2rem;
            display: flex;
            align-items: flex-end;
            cursor: pointer;
            transition-timing-function: ease-in-out; /*************filter added************/
            transition-duration: 2s; /************filter added************/
        }
        .category-block:hover{
            filter: hue-rotate(360deg); /******************filter added***************/
            transition-timing-function: ease-in-out; /****************filter added*******************/
            transition-duration: 2s; /****************filter added*******************/
        }
        .category-block .title {
            background: rgba(50, 50, 50, 0.5);
            width: 100%;
            font-size: 2rem;
            color: #fff;
            padding: 10px;
            font-weight: 700;
            line-height: 1.1;
            font-family: Source Sans Pro, Helvetica, Arial, sans-serif;
            text-decoration: none;
        }
        .category-block:hover .title {
            text-decoration: none;
            outline: 0;
            color: #333337;
            transition: all 0.4s;
            background: rgba(250, 250, 250, 0.5);
        }
        @media (min-width: 768px) {
            .category-block {
                width: 100%;
            }
        }
        @media (min-width: 992px) {
            .category-block {
                width: 48%;
            }
        }
    </style>

    <a
        href=${prefixUriIfNeeded(category.uri)}
        class="category-block"
        style=${{
            backgroundImage: `url(${category.image})`,
        }}
        onClick=${(event) => {
            avoidReload(event)
            setActivePanel('posts')
        }}
    >
        <h2 class="title" title=${category.title}>${category.title}</h2>
    </a>
`
