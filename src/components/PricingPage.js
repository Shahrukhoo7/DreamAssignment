import React, { useState } from 'react';
import './pricing.css';

const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    alert(`You have selected the ${plan} plan.`);
  };

  return (
    <div className="pricing-page">
      {/* Header Section */}
      <header className="pricing-header">
        <h1>Choose the Right Plan for You</h1>
        <p>Flexible pricing plans to meet individual and enterprise needs.</p>
      </header>

      {/* Pricing Plans Section */}
      <section className="pricing-plans">
        <div className="plan-card basic-plan">
          <h2>Basic Plan</h2>
          <p className="price">$10 / month</p>
          <ul className="plan-features">
            <li>5 Projects</li>
            <li>10GB Storage</li>
            <li>Email Support</li>
          </ul>
          <button className="choose-plan-btn" onClick={() => handleChoosePlan('Basic')}>Choose Plan</button>
        </div>
        <div className="plan-card standard-plan">
          <h2>Standard Plan</h2>
          <p className="price">$25 / month</p>
          <ul className="plan-features">
            <li>20 Projects</li>
            <li>50GB Storage</li>
            <li>Priority Email Support</li>
          </ul>
          <button className="choose-plan-btn" onClick={() => handleChoosePlan('Standard')}>Choose Plan</button>
        </div>
        <div className="plan-card premium-plan">
          <h2>Premium Plan</h2>
          <p className="price">$50 / month</p>
          <ul className="plan-features">
            <li>Unlimited Projects</li>
            <li>200GB Storage</li>
            <li>24/7 Support</li>
            <li>Advanced Analytics</li>
          </ul>
          <button className="choose-plan-btn" onClick={() => handleChoosePlan('Premium')}>Choose Plan</button>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="comparison-table-section">
        <h2>Compare All Plans</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Basic</th>
              <th>Standard</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Projects</td>
              <td>5</td>
              <td>20</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Storage</td>
              <td>10GB</td>
              <td>50GB</td>
              <td>200GB</td>
            </tr>
            <tr>
              <td>Support</td>
              <td>Email</td>
              <td>Priority Email</td>
              <td>24/7 Support</td>
            </tr>
            <tr>
              <td>Analytics</td>
              <td>Basic</td>
              <td>Standard</td>
              <td>Advanced</td>
            </tr>
            <tr>
              <td>Team Collaboration</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
    <h2>Frequently Asked Questions</h2>
    <div className="faq-cards">
        <div className="faq-card">
            <h3>Can I change my plan later?</h3>
            <p>
                Yes, you can upgrade or downgrade your plan at any time without any extra charges.
                Simply log into your account, navigate to the billing section, and select your desired plan.
                Your new plan will take effect immediately, and any applicable changes to your billing cycle will be reflected in your next invoice.
            </p>
        </div>
        <div className="faq-card">
            <h3>What is the cancellation policy?</h3>
            <p>
                You can cancel your plan at any time without penalties. Upon cancellation, your data will remain accessible until the end of your current billing cycle.
                This ensures you have enough time to download any important information. We value your experience and want to make this transition as smooth as possible.
            </p>
        </div>
        <div className="faq-card">
            <h3>Do you offer yearly subscriptions?</h3>
            <p>
                Yes, we offer yearly subscription plans that provide a 10% discount compared to the monthly rates.
                By choosing an annual plan, you can save significantly over the course of the year. 
                This option is perfect for users looking for long-term commitment and consistency in their subscription.
            </p>
        </div>
        <div className="faq-card">
            <h3>Is there a free trial available?</h3>
            <p>
                We provide a 14-day free trial for all new users, allowing you to explore our platform and all its features without any obligations.
                During this trial, you can access everything included in the premium plan.
                Once the trial period ends, you can choose to subscribe to any of our plans.
            </p>
        </div>
        <div className="faq-card">
            <h3>What payment methods do you accept?</h3>
            <p>
                We accept various payment methods including credit and debit cards such as Visa, MasterCard, and American Express.
                Additionally, you can also pay through PayPal for your convenience. 
                All transactions are secured using SSL encryption, ensuring that your payment details are safe and confidential.
            </p>
        </div>
        <div className="faq-card">
            <h3>What happens if I exceed my storage limit?</h3>
            <p>
                If you exceed your storage limit, you will receive notifications via email prompting you to either upgrade to a higher plan or manage your existing files.
                You can delete old files or upgrade to a plan with more storage to ensure uninterrupted access. 
                It’s essential to manage your usage to prevent any service interruptions.
            </p>
        </div>
        <div className="faq-card">
            <h3>Can I access my account from multiple devices?</h3>
            <p>
                Yes, you can access your account from multiple devices, including desktops, tablets, and smartphones.
                Our platform is designed to be responsive, so you can seamlessly switch between devices.
                This flexibility allows you to work wherever you are, making it easier to manage your projects efficiently.
            </p>
        </div>
        <div className="faq-card">
            <h3>Do you have a referral program?</h3>
            <p>
                Yes, we have a referral program where you can earn rewards for referring new users to our platform.
                When someone signs up using your referral link, both you and the new user will receive discounts on your subscriptions.
                This is a great way to save money while sharing the benefits of our service with others.
            </p>
        </div>
        <div className="faq-card">
            <h3>Is customer support available 24/7?</h3>
            <p>
                Yes, our customer support team is available 24/7 to assist you with any inquiries or issues you may encounter.
                You can reach out to us via email, live chat, or phone support.
                We aim to provide timely and effective assistance to ensure your experience is as smooth as possible.
            </p>
        </div>
        <div className="faq-card">
            <h3>Are there any hidden fees?</h3>
            <p>
                We pride ourselves on transparency, which is why we do not have any hidden fees associated with our pricing plans.
                All costs are clearly outlined when you select your plan. 
                If any changes occur, we will notify you in advance, so you always know what to expect in your billing.
            </p>
        </div>
    </div>
</section>

    </div>
  );
};

export default PricingPage;
