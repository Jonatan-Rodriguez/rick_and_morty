import styled from 'styled-components';

export const ContainerLanding = styled.div`
    background-color: ${props => props.theme.colors.base};
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    padding: 2% 5%;

    .section1{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        .section1ImgBackground{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 85vh;
            background-image: url(${props => props.backgroundImage});
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            border-radius: 50px;
            padding-left: 5%;

            .boxTextBtn{
                display: flex;
                align-items: start;
                justify-content: space-around;
                flex-direction: column;
                max-width: 40%;
                height: 80%;
                
                h1{
                    margin: none;
                    font-size: ${props => props.theme.sizes.fontXLarge};
                    color: ${props => props.theme.colors.base};
                    
                    span{
                        color: ${props => props.theme.colors.textTertiary};
                    }
                }
                p{
                    font-size: ${props => props.theme.sizes.fontLarge};
                    color: ${props => props.theme.colors.base};
                }

                .uiverse {
                    --duration: 7s;
                    --easing: linear;
                    --c-color-1: #2f3e46;
                    --c-color-2: #00FF00;
                    --c-color-3: #2f3e46;
                    --c-color-4: #2f3e46;
                    --c-shadow: #00FF00;
                    --c-shadow-inset-top: #00FF00;
                    --c-shadow-inset-bottom: #00FF00;
                    --c-radial-inner: #2f3e46;
                    --c-radial-outer: #2f3e46;
                    --c-color: #fff;
                    -webkit-tap-highlight-color: transparent;
                    -webkit-appearance: none;
                    outline: none;
                    position: relative;
                    cursor: pointer;
                    border: none;
                    display: table;
                    border-radius: 24px;
                    padding: 0;
                    margin: 0;
                    text-align: center;
                    font-weight: 600;
                    font-size: 16px;
                    letter-spacing: 0.02em;
                    line-height: 1.5;
                    color: var(--c-color);
                    background: radial-gradient(circle, var(--c-radial-inner), var(--c-radial-outer) 80%);
                    box-shadow: 0 0 14px var(--c-shadow);
                }

                .uiverse:before {
                    content: '';
                    pointer-events: none;
                    position: absolute;
                    z-index: 3;
                    left: 0;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    border-radius: 24px;
                    box-shadow: inset 0 3px 12px var(--c-shadow-inset-top), inset 0 -3px 4px var(--c-shadow-inset-bottom);
                }

                .uiverse .wrapper {
                    -webkit-mask-image: -webkit-radial-gradient(white, black);
                    overflow: hidden;
                    border-radius: 24px;
                    min-width: 132px;
                    padding: 12px 0;
                }

                .uiverse .wrapper span {
                    display: inline-block;
                    position: relative;
                    z-index: 1;
                }

                .uiverse .wrapper .circle {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    filter: blur(var(--blur, 8px));
                    background: var(--background, transparent);
                    transform: translate(var(--x, 0), var(--y, 0)) translateZ(0);
                    animation: var(--animation, none) var(--duration) var(--easing) infinite;
                }

                .uiverse .wrapper .circle.circle-1, .uiverse .wrapper .circle.circle-9, .uiverse .wrapper .circle.circle-10 {
                    --background: var(--c-color-4);
                }

                .uiverse .wrapper .circle.circle-3, .uiverse .wrapper .circle.circle-4 {
                    --background: var(--c-color-2);
                    --blur: 12px;
                }

                .uiverse .wrapper .circle.circle-5, .uiverse .wrapper .circle.circle-6 {
                    --background: var(--c-color-3);
                    --blur: 12px;
                }

                .uiverse .wrapper .circle.circle-2, .uiverse .wrapper .circle.circle-7, .uiverse .wrapper .circle.circle-8, .uiverse .wrapper .circle.circle-11, .uiverse .wrapper .circle.circle-12 {
                    --background: var(--c-color-1);
                    --blur: 12px;
                }

                .uiverse .wrapper .circle.circle-1 {
                    --x: 0;
                    --y: -40px;
                    --animation: circle-1;
                }

                .uiverse .wrapper .circle.circle-2 {
                    --x: 92px;
                    --y: 8px;
                    --animation: circle-2;
                }

            .uiverse .wrapper .circle.circle-3 {
                --x: -12px;
                --y: -12px;
                --animation: circle-3;
            }

            .uiverse .wrapper .circle.circle-4 {
                --x: 80px;
                --y: -12px;
                --animation: circle-4;
            }

            .uiverse .wrapper .circle.circle-5 {
                --x: 12px;
                --y: -4px;
                --animation: circle-5;
            }

            @keyframes circle-1 {
                33% {
                    transform: translate(0px, 16px) translateZ(0);
                }

                66% {
                    transform: translate(12px, 64px) translateZ(0);
                }
            }

            @keyframes circle-2 {
                33% {
                    transform: translate(80px, -10px) translateZ(0);
                }

                66% {
                    transform: translate(72px, -48px) translateZ(0);
                }
            }

            @keyframes circle-3 {
                33% {
                    transform: translate(20px, 12px) translateZ(0);
                }

                66% {
                    transform: translate(12px, 4px) translateZ(0);
                }
            }

            @keyframes circle-4 {
                33% {
                    transform: translate(76px, -12px) translateZ(0);
                }

                66% {
                    transform: translate(112px, -8px) translateZ(0);
                }
            }

            @keyframes circle-5 {
                33% {
                    transform: translate(84px, 28px) translateZ(0);
                }

                66% {
                    transform: translate(40px, -32px) translateZ(0);
                }
            }

            }
            .imgLanding{
                background-image: url(${props => props.imgLanding});
                background-size: contain;
                background-position: right center;
                background-repeat: no-repeat;
                width: 50%;
                height: 100%;
                position: relative;
                left: 45px;
            }
        }
    }

/*     .textContainer{
        height: 100%;
        width: 35vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-around;

        img{

        }
        .textBox{

            .text{
                font-size: 5.0em;
                font-family: Arial, Helvetica, sans-serif;
                color: white;
                span{
                    color: #11B0C8;
                }
            }
            .textMin{
                font-size: 3.0em;
                color: white;
            }
        }
    }
    .imgContainer{
        height: 100vh;
        img{
            height: 100%;
            width: auto;
            animation: fadeIn 5s linear;

            @keyframes fadeIn {
                0%{
                opacity: 0;
                transform: scale(0.9)
                }

                50%{
                opacity: 0.5;
                transform: scale(0.95);
                }

                100%{
                opacity: 1;
                transform: scale(1);
                }
            }
        }
    } */
`