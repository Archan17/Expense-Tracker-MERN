import React from "react";
import styled from "styled-components";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SpacedParagraph = styled.p`
  margin-bottom: 1rem;
`;

function AboutUs() {
  return (
    <CenteredContainer>
      <h2>About Us</h2>
      <SpacedParagraph>
        Welcome to ExpenseTracker, your reliable companion in managing your
        finances efficiently. We understand the importance of keeping track of
        your expenses, and that's why we've developed a user-friendly app to
        simplify your financial management tasks.
      </SpacedParagraph>
      <h3>Our Mission</h3>
      <SpacedParagraph>
        At ExpenseTrackr, our mission is to empower individuals to take control
        of their finances and make informed decisions about their spending
        habits. We believe that financial awareness leads to financial freedom,
        and our app is designed to help you achieve just that.
      </SpacedParagraph>
      <h3>What We Offer</h3>
      <ul>
        <li>
          <strong>Intuitive Interface:</strong> Our app features a sleek and
          intuitive interface that makes it easy to input, categorize, and
          analyze your expenses.
        </li>
        <li>
          <strong>Expense Categories:</strong> We offer a wide range of expense
          categories to choose from, allowing you to accurately classify your
          spending and gain insights into your financial habits.
        </li>
        <li>
          <strong>Budgeting Tools:</strong> Take control of your budget with our
          budgeting tools, which help you set financial goals and track your
          progress over time.
        </li>
        <li>
          <strong>Visual Reports:</strong> Gain valuable insights into your
          spending patterns with our visual reports, including charts and graphs
          that highlight trends and areas for improvement.
        </li>
      </ul>
      <h3>Why Choose ExpenseTrackr?</h3>
      <ul>
        <li>
          <strong>Privacy and Security:</strong> We take your privacy and
          security seriously. Your financial data is encrypted and stored
          securely, ensuring that your information remains confidential at all
          times.
        </li>
        <li>
          <strong>Accessibility:</strong> ExpenseTrackr is available on multiple
          platforms, including web and mobile, so you can manage your finances
          anytime, anywhere.
        </li>
        <li>
          <strong>Customer Support:</strong> Have a question or need assistance?
          Our dedicated customer support team is here to help you every step of
          the way.
        </li>
      </ul>
      <SpacedParagraph>
        Ready to take control of your finances? Download ExpenseTrackr now and
        start managing your expenses with ease. Join thousands of satisfied
        users who are already on their journey to financial success with
        ExpenseTrackr!
      </SpacedParagraph>
    </CenteredContainer>
  );
}

export default AboutUs;
