import { Title, BoxChild } from '../styled';

const InfoItem = ({ data }) => {
    return (
        <div className="mb-4">
            <Title>{data.title}</Title>
            <BoxChild>{data.body}</BoxChild>
        </div>
    );
};

export default InfoItem;
