import { html } from '../../lib/htm-preact.js'

export const Sidebar = ({
    title,
    subtitle,
    description,
    sidebarImage,
    menuVisible,
    showLinks,
}) => {
    return html` <style>
    /**************************importing new font styles******************************/
    @import url('https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Joan&family=Noto+Sans+JP&family=Noto+Serif+JP:wght@400;500&&family=Playfair+Display&display=swap');
            aside.sidebar {
                justify-content: flex-start;
                align-items: flex-end;
                transition: width linear 750ms, height linear 750ms,
                    left linear 750ms;
                padding: 0;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                display: flex;
                position: relative;
                width: 100%;
                overflow-x: hidden;
                max-width: 100%;
            }

            aside.sidebar.sidebar-narrow {
                padding: 0;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                display: flex;
                width: 100%;
            }

            @media (min-width: 768px) {
                aside.sidebar {
                    height: 45rem;
                    position: relative;
                    width: 100%;
                }

                aside.sidebar.sidebar-narrow {
                    height: 45rem;
                    position: relative;
                    width: 100%;
                }
            }

            @media (min-width: 992px) {
                aside.sidebar {
                    height: 100vh;
                    background-color: #f5f5f5;
                    position: fixed;
                    width: 40%;
                    left: 0;
                }

                aside.sidebar.sidebar-narrow {
                    height: 45rem;
                    position: relative;
                    width: 100%;
                }
            }

            @media (min-width: 1200px) {
                aside.sidebar {
                    height: 100vh;
                    background-color: #f5f5f5;
                    position: fixed;
                    width: 40%;
                    left: 0;
                }

                aside.sidebar.sidebar-narrow {
                    height: 100vh;
                    background-color: #f5f5f5;
                    position: fixed;
                    width: 35%;
                    left: 25%;
                }
            }

            aside.sidebar .info {
                padding: 5%;
                background: rgba(50, 50, 50, 0.5);
                color: #fafafa;
                height: 25rem; /**2023 edits**/
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: end;
                flex-direction: column;
            }

            aside.sidebar .primary {
                border-bottom: solid 1px rgba(255, 255, 255, 0.3);
                margin-bottom: 1.2rem; /**2023 edits**/
            }

            aside.sidebar .primary h1 {
                letter-spacing: 0;
                margin-bottom: 0;
                font-size: 3.4rem;
                text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                font-family: 'Noto Serif JP', serif;/***********************changing font family******************************/
                font-weight: 500; /***************changing font weight******************/
                
            }

            aside.sidebar .primary p {
                margin-bottom: 1rem;
                text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                line-height: 2rem; /***************changed line height******************/
                font-size: 1.6rem; /******************changed font size*****************/
                font-weight: 100; /***************changed font weight******************/
            }

            aside.sidebar .links: {
                display: none;
            }

            aside.sidebar .show-links: {
                display: flex;
            }

            aside.sidebar .links a.button {
                font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
                display: inline-block;
                color: #fff;
                margin-right: 20px;
                margin-bottom: 0;
                background-color: #8700A3; /******2023 edit****/
                font-weight: 400;
                text-align: center;
                touch-action: manipulation;
                cursor: pointer;
                border: 1px solid transparent;
                white-space: nowrap;
                padding: 6px 12px;
                font-size: 14px;
                line-height: 1.42857;
                border-radius: 4px;
                user-select: none;
            }

            aside.sidebar .links a.button:hover {
                color: #fff;
                background-color: #75018e; /**2023 edits**/
                border-color: #75018e;/**2023 edits**/
                text-decoration: none;
            }

            aside.sidebar .links a.button:focus {
                color: #fff;
                background-color: #75018e;  /**2023 edits**/
                border-color: #75018e;/**2023 edits**/
                text-decoration: none;
            }
        </style>
        <aside
            class="sidebar ${menuVisible ? 'sidebar-narrow' : ''}"
            style=${{ backgroundImage: `url(${sidebarImage})` }}
        >
            <div class="info">
                <div class="primary">
                    <h1>${title}</h1>
                    <p>${subtitle}</p>
                    <p>${description}</p>
                </div>
                <div class="links ${showLinks ? 'show-links' : ''}">
                    <a
                        class="button"
                        href="https://drive.google.com/drive/folders/0B0A_zASTMp9WU0NMYW9wXzVQWjg?resourcekey=0-k6M28TIgKjp_9hvDeT623Q&usp=sharing"
                        target="_blank"
                    >
                        Original posts on Drive
                    </a>
                    <a
                        class="button"
                        href="https://github.com/potinmak/birds"
                        target="_blank"
                    >
                        Source on GitHub
                    </a>
                </div>
            </div>
        </aside>`
}
