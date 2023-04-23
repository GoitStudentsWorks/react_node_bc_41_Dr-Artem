import styled from 'styled-components';

export const FAQwrapper = styled.section`
    width: 100%;
`;

export const SectionTitle = styled.h2`
    font-weight: var(--bold-font-weight);
    font-size: 32px;
    line-height: 1.25;

    margin-bottom: 40px;

    @media (min-width: 768px) {
        font-size: 44px;
        line-height: 1.09;
    }
`;

export const QuestionsWrapper = styled.div`
    padding: 16px 16px;
    margin-bottom: 16px;

    border: 1px solid rgba(17, 17, 17, 0.1);
    border-radius: 16px;

    @media (min-width: 768px) {
        padding: 16px 16px 16px 32px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const QuestionsTitle = styled.h4`
    font-weight: var(--medium-font-weight);
    font-size: 18px;
    line-height: 1.33;

    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 1.5;
    }
`;

export const ToggleBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 32px;
    height: 32px;
    border-radius: 50px;

    transition: all 1s ease-out;

    @media (min-width: 768px) {
        width: 40px;
        height: 40px;
    }
`;

export const QuestionsList = styled.ul`
    max-width: 100%;
    margin-top: 8px;

    @media (min-width: 768px) {
        margin-right: 20px;
    }
`;

export const QuestionsItems = styled.li`
    font-weight: var(--regular-font-weight);
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: -0.02em;
    color: rgba(17, 17, 17, 0.6);

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
    }
`;
