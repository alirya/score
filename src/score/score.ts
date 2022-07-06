import Infer from './infer.js';
import Score from '../score.js';

/**
 * get {@link Score.score} score
 *
 * @param score
 * object to be extracted
 */
export default function Score<ScoreTemplate extends Score>(score : ScoreTemplate) : Infer<ScoreTemplate> {

    return <Infer<ScoreTemplate>> score.score;
}
