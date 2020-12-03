export default function Score(
    valid : boolean,
    score : unknown,
) : string {

    if(valid) {

        return `score is compatible with Score interface`;

    } else {

        return `score is not compatible with Score interface`;
    }
}
