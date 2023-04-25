import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import {
    FAQwrapper,
    QuestionsWrapper,
    QuestionsTitle,
    QuestionsItems,
    QuestionsList,
    ToggleBtn,
    TitleWrapper,
    SectionTitle,
} from './FAQ.styled';

export const FAQ = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);
    const [toggle, setToggle] = useState(false);

    const onClick = event => {
        event.preventDefault();
        const currentBtn = event.currentTarget;
        const questionName = currentBtn.getAttribute('name');
        setActiveQuestion(activeQuestion === questionName ? null : questionName);
        setToggle(prev => !prev);
    };

    const animation = useSpring({
        height: toggle ? 'auto' : 0,
        opacity: toggle ? 1 : 0,
        overflow: 'hidden',

        transition: 'all 1s ease-out',
    });

    const activeStyle = {
        backgroundColor: '#EDF5F5',
        border: 'none',
    };

    const inactiveStyle = {
        backgroundColor: 'inherit',
        border: '1px solid rgba(25, 41, 36, 0.12)',
    };

    return (
        <FAQwrapper>
            <SectionTitle>FAQ</SectionTitle>
            <QuestionsWrapper onClick={onClick} name="question1">
                <TitleWrapper>
                    <QuestionsTitle>What to do if bleeding starts: first aid</QuestionsTitle>
                    <ToggleBtn
                        type="button"
                        aria-label="read more"
                        style={activeQuestion === 'question1' ? activeStyle : inactiveStyle}
                    >
                        {activeQuestion === 'question1' ? <CloseIcon /> : <AddIcon />}
                    </ToggleBtn>
                </TitleWrapper>
                {activeQuestion === 'question1' && toggle && (
                    <animated.div style={animation}>
                        <QuestionsList>
                            <QuestionsItems>
                                If you or someone else experiences bleeding, it's important to take immediate action to
                                stop the bleeding and prevent further injury. Here are the steps you should follow:
                            </QuestionsItems>
                            <ul>
                                <QuestionsItems>
                                    Apply pressure: Use a clean cloth or gauze pad to apply firm, steady pressure to the
                                    wound. Hold the pressure for at least 5-10 minutes, or until the bleeding stops.
                                </QuestionsItems>
                                <QuestionsItems>
                                    Elevate the affected area: If possible, elevate the injured area above the heart to
                                    help reduce blood flow to the wound.
                                </QuestionsItems>
                                <QuestionsItems>
                                    Clean the wound: Once the bleeding has stopped, clean the wound with soap and water.
                                    Use a sterile bandage or adhesive strip to cover the wound and protect it from
                                    further injury.
                                </QuestionsItems>
                                <QuestionsItems>
                                    Seek medical attention: If the bleeding is severe or doesn't stop after several
                                    minutes of applying pressure, seek medical attention immediately. You may need
                                    stitches or other medical treatment to properly address the injury.
                                </QuestionsItems>
                                <QuestionsItems>
                                    Remember, it's important to stay calm and focused in the event of a bleeding injury.
                                    By taking quick and appropriate action, you can help to minimize the risk of further
                                    injury and promote faster healing.
                                </QuestionsItems>
                            </ul>
                        </QuestionsList>
                    </animated.div>
                )}
            </QuestionsWrapper>
            <QuestionsWrapper onClick={onClick} name="question2">
                <TitleWrapper>
                    <QuestionsTitle>How and when to register for pregnancy</QuestionsTitle>
                    <ToggleBtn
                        type="button"
                        aria-label="read more"
                        style={activeQuestion === 'question2' ? activeStyle : inactiveStyle}
                    >
                        {activeQuestion === 'question2' ? <CloseIcon /> : <AddIcon />}
                    </ToggleBtn>
                </TitleWrapper>
                {activeQuestion === 'question2' && toggle && (
                    <animated.div style={animation}>
                        <QuestionsList>
                            <QuestionsItems>
                                Contact your treating physician. After the check-up, the doctor will put you on record.
                            </QuestionsItems>
                            <QuestionsItems>
                                If you don't have a treating doctor, you can make an appointment for a medical check-up
                                with any doctor. After the check-up, you will be asked to sign a treatment agreement
                                with this doctor, after which you will be put on record for pregnancy.
                            </QuestionsItems>
                        </QuestionsList>
                    </animated.div>
                )}
            </QuestionsWrapper>
            <QuestionsWrapper onClick={onClick} name="question3">
                <TitleWrapper>
                    <QuestionsTitle>How to choose your doctor</QuestionsTitle>
                    <ToggleBtn
                        type="button"
                        aria-label="read more"
                        style={activeQuestion === 'question3' ? activeStyle : inactiveStyle}
                    >
                        {activeQuestion === 'question3' ? <CloseIcon /> : <AddIcon />}
                    </ToggleBtn>
                </TitleWrapper>
                {activeQuestion === 'question3' && toggle && (
                    <animated.div style={animation}>
                        <QuestionsList>
                            <QuestionsItems>
                                In order to choose the most suitable doctor for you, after registration, go to the
                                doctor's tab and read the ratings and reviews of our doctors. Also on this tab, you can
                                find all the information you are interested in.
                            </QuestionsItems>
                        </QuestionsList>
                    </animated.div>
                )}
            </QuestionsWrapper>
            <QuestionsWrapper onClick={onClick} name="question4">
                <TitleWrapper>
                    <QuestionsTitle>Can I get a prescription online</QuestionsTitle>
                    <ToggleBtn
                        type="button"
                        aria-label="read more"
                        style={activeQuestion === 'question4' ? activeStyle : inactiveStyle}
                    >
                        {activeQuestion === 'question4' ? <CloseIcon /> : <AddIcon />}
                    </ToggleBtn>
                </TitleWrapper>
                {activeQuestion === 'question4' && toggle && (
                    <animated.div style={animation}>
                        <QuestionsList>
                            <QuestionsItems>
                                Unfortunately, you can get a prescription only after a check-up by a doctor.
                            </QuestionsItems>
                        </QuestionsList>
                    </animated.div>
                )}
            </QuestionsWrapper>
        </FAQwrapper>
    );
};
