import { ContainerWrapper } from "./styles"

function Container({ children }: { children: React.ReactNode }) {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}

export default Container
