import { ScoreText } from '../styled';

const Scores = () => {
    return (
        <>
            <div>
                {' '}
                Last Score: <ScoreText>{'100%'}</ScoreText>
            </div>
            <div>
                {' '}
                Submit:<ScoreText> {'5'} times</ScoreText>
            </div>
        </>
    );
};

export default Scores;
