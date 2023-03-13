import { BoxColor, CircleColor, ColorItem } from '../styled';

const Colors = () => {
    const LIST_COLOR = ['#45ce7b', '#45ce7b', '#45ce7b', '#45ce2f', '#ffffff'];
    return (
        <BoxColor>
            {LIST_COLOR.map((color) => (
                <ColorItem key={color}>
                    <CircleColor color={color}></CircleColor>
                    <span>{color}</span>
                </ColorItem>
            ))}
        </BoxColor>
    );
};

export default Colors;
