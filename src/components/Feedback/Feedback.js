import { useState } from 'react';
import Statistics from '../Statistics';
import FeedBackOption from './FeedBackOptions';
import Section from '../Section';
import GlobalStyle from '../GlobalStyle';
import Container from '../Container';

const FeedBack = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  console.log(bad);
  const handleClick = key => {
    console.log(key);
    if (key === 'good') {
      return setGood(prevState => prevState + 1);
    }
    if (key === 'neutral') {
      return setNeutral(prevState => prevState + 1);
    }
    if (key === 'bad') {
      return setBad(prevState => prevState + 1);
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = total => {
    return total > 0 ? Math.round((good * 100) / total) : 0;
  };

  const state = { good, neutral, bad };
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Section title="Please leave feedback">
          <FeedBackOption
            options={Object.keys(state)}
            onLeaveFeedback={handleClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage(
              countTotalFeedback()
            )}
          />
        </Section>
      </Container>
    </div>
  );
};

export default FeedBack;
