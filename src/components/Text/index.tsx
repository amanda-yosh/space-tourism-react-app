const unitMeasurement = 'rem'

const SizeMatch = {
    small: '0.875',
    regular: '1',
    big: '1.125',
    'big-plus': '1.75',
    huge: '2',
    title: '3.5',
    display: '6.25',
    'display-plus': '9',
}

interface TextProps {
    children: React.ReactNode;
    tag?: string;
    size?: 'small' | 'regular' | 'big' | 'big-plus' | 'huge' | 'title' | 'display' | 'display-plus';
    transform?: string;
}

function Text({
    children,
    tag = 'p',
    size = 'regular',
    transform = 'none',
}: TextProps) {
    const CustomTag = tag as React.ElementType

    return (
        <CustomTag style={{
            fontSize: SizeMatch[size] + unitMeasurement,
            textTransform: transform,
        }}>
            {children}
        </CustomTag>
    )
}

export default Text