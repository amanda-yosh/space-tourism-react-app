import Text from "@/components/Text";

import { SubWrapper } from "./styles";

interface SubTitleProps {
    index?: string;
    subtitle: string;
}

function SubTitle({
    index,
    subtitle,
}: SubTitleProps) {
    return (
        <SubWrapper>
            <Text transform='uppercase'>
                <span>{index}</span> {subtitle}
            </Text>
        </SubWrapper>
    )
}

export default SubTitle
