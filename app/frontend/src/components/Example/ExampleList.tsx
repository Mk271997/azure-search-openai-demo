import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "Tell me breifly about Mazars?",
    "What was the revenue growth% of Mazars in 2022 vs 2021?",
    "What's the Trade and Recievables in 2022 vs 2021?"
];

const GPT4V_EXAMPLES: string[] = [
    "Tell me breifly about Mazars?",
    "What was the revenue growth% of Mazars in 2022 vs 2021?",
    "What's the Trade and Recievables in 2022 vs 2021?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
