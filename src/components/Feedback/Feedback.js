import React, { Component } from 'react/';
import Statistics from '../Statistics';
import FeedBackOption from './FeedBackOptions';
import Section from '../Section';
import GlobalStyle from '../GlobalStyle';
import Container from '../Container';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClick = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;

    return total > 0 ? Math.round((good * 100) / total) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <GlobalStyle />
        <Container>
          <Section title="Please leave feedback">
            <FeedBackOption options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
          </Section>
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}
            />
          </Section>
        </Container>
      </div>
    );
  }
}

export default FeedBack;
