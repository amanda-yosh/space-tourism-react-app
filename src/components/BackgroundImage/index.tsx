import { BackgroundImageWrapper } from './styles'

interface BackgroundImageProps {
    children: React.ReactNode;
    backgroundUrl: Array<string>;
}

function BackgroundImage({ children, backgroundUrl }: BackgroundImageProps) {
    return (
        <BackgroundImageWrapper backgroundUrl={backgroundUrl}>
            {children}
        </BackgroundImageWrapper>
    )
}

export default BackgroundImage