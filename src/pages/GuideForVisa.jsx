import React, { useState } from 'react';
import Achievements from "../components/Hero/Achievements"

const GuideForVisa = () => {

  // track whether content is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
    <div className="visa-info-container">
      <div className="visa-info-content">

        {/* Left content with collapse logic */}
        <div className="visa-info-text">
          <div className={`collapse-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
           
            <p>
               offers immense opportunities for enterprising businesses. With world-leading cities,
              mature financial and healthcare sectors, and a thriving industry, opens doors for growth.
              <strong>Passage Consultants</strong> can help you navigate the Business Visa process for.
            </p>


            <h2>Business Visa Details</h2>
            <p>
              To facilitate trade, offers visas that allow entrepreneurs, executives, and professionals
              to temporarily visit to conduct business. With the Business Visa, you can:
            </p>
            <ul>
              <li>Visit for business meetings</li>
              <li>Attend trade shows and conferences</li>
              <li>Meet prospective clients and place orders</li>
              <li>Receive training from your company</li>
            </ul>
            <p>The Business Visa allows a stay of up to 6 months.</p>

            <h2>Documents Required</h2>
            <ul>
              <li>Valid passport and travel history</li>
              <li>Background documentation</li>
              <li>Company sponsorship documents</li>
              <li>Proof of intent to return</li>
              <li>Completed application and fees</li>
              <li>Medical insurance</li>
            </ul>

            <h2>Eligibilities for Spouse Visa</h2>
            <ul>
              <li>You must be at least 18 years old to participate.</li>
              <li>You must either live in Canada or plan to return once your spouse or partner become a permanent resident.</li>
              <li>For the following three years, you must be able and willing to meet your spouse’s or partner’s basic financial necessities.</li>
              <li>You will not be allowed to sponsor your partner unless they are a member of the family class. To sponsor your spouse, you must be a citizen, permanent resident, or have a work visa.</li>
              <li>You must have a real relationship with your spouse, one that was not formed only for the purpose of obtaining permanent residency. Your relationship must be at least a year old.</li>
            </ul>

            <h4>Child visa to bring dependent children to Canada</h4>
            <h4>The dependent visa allows sponsors to bring their children to Canada:</h4>
            <ul>
              <li>Child adopted outside Canada when the sponsor was a Canadian citizen or permanent resident living in the country</li>
              <li>Child that they intend to adopt in Canada</li>
              <li>Sponsor’s brother or sister, nephew or niece, grandson or granddaughter if they are an orphan and meet the eligibility criteria</li>
            </ul>

            <h4>Eligibilities for Child Visa</h4>
            <ul>
              <li>The child must be under 22 years who does not have a spouse, or a common law or conjugal partner.</li>
              <li>The dependent child must be the biological child or the adopted child of the sponsor.</li>
              <li>The child must prove he is dependent on the sponsor/parent for his financial needs.</li>
              <li>The sponsor must submit proof of his relationship with the dependent children.</li>
              <li>The children who are being sponsored must undergo a medical examination and also submit proof that they have no criminal cases pending against them.</li>
              <li>The medical examination must be done by a physician who is approved by the Canadian government.</li>
            </ul>

            <h4>Eligibilities for Sponsor a dependent:</h4>
            <ul>
              <p>
                If an individual wants to sponsor a Dependent Visa for Canada, he must submit documents that provide
                information about his finances for the past 12 months to the Immigration, Refugees and Citizenship Canada (IRCC).
                This will help the authorities to determine if the sponsor has the means to financially support the
                members which includes his dependent children.
              </p>
            </ul>

            <h4>Documents Required</h4>
            <p>The documentation required for sponsoring a dependent under the Canada Dependent Visa includes:</p>
            <ul>
              <li>Passport & travel history</li>
              <li>Background documentation</li>
              <li>Spouse/partner documentation including marriage certificate</li>
              <li>Other proof of relationship</li>
              <li>Income proof of sponsor to show adequate finances</li>
              <li>Completed application & consulate fees</li>
            </ul>
          </div>

          {/* toggle button always visible */}
          <button
            className="read-more-btn"
            onClick={() => setIsExpanded(prev => !prev)}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>

        {/* Right-side enquiry form (unchanged) */}
        <div className="enquiry-form">
          <h2>Enquiry Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile No.</label>
              <input type="tel" id="mobile" name="mobile" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button type="submit" className="send-message-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
   <Achievements/>
    </>
  );
};

export default GuideForVisa;
