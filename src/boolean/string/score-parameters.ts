export default function ScoreParameters(
    score : unknown,
    valid : boolean,
) : string {

    if(valid) {

        return `score is compatible with Score interface`;

    } else {

        return `score is not compatible with Score interface`;
    }
}
