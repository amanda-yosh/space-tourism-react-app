import { ContainerWrapper } from "./styles"

interface ContainerProps {
    children: React.ReactNode;
    backgroundUrl: Array<string>;
}

function Container({ children, backgroundUrl }: ContainerProps) {
    return (
        <ContainerWrapper backgroundUrl={backgroundUrl}>
            {children}
        </ContainerWrapper>
    )
}

export default Container