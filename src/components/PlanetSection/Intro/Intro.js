import { Intro, Title, Text, SourceContainer, Span, Link } from './IntroStyles';
import Icon from '../../Icon/Icon';

const IntroContainer = ({ planetData, currentData, isChanging }) => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            x: 50,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { delay: 1.5, duration: 1.5 },
        },
        exit: {
            opacity: 0,
            x: 50,
            transition: { duration: 1 },
        },
    };

    return (
        <Intro
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Title>{planetData.name}</Title>
            <Text aria-live="assertive" isChanging={isChanging}>
                {currentData.content}
            </Text>
        </Intro>
    );
};

export default IntroContainer;
