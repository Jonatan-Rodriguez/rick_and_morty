import styled from 'styled-components';

export const ContainerSkeletonLoading = styled.div`

    .card {
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        row-gap: 16px;
        width: 240px;
        min-width: 200px;
        height: 350px;
        padding: 8px;
        border-radius: 30px;
        background-color: ${props => props.theme.colors.primary};
    }

    .card__skeleton {
        background-image: linear-gradient(
                90deg,
                #ccc 0px,
                rgb(229 229 229 / 90%) 40px,
                #ccc 80px
            );
        background-size: 300%;
        background-position: 100% 0;
        border-radius: inherit;
        animation: shimmer 1.5s infinite;
    }

    .card__title {
        height: 30px;
        width: 100%;
    }

    .card__description {
        height: 65%;
        width: 100%;
        border-radius: 22px;
    }

    @keyframes shimmer {
        to {
            background-position: -100% 0;
        }
    }
`