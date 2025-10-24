import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/VisaInfo.css';
import Achievements from "../components/Hero/Achievements";

const VisaInfo = () => {
  const { country, visaTitle } = useParams();
  const decodedCountry = country ? decodeURIComponent(country) : '';
  const decodedVisa = visaTitle ? decodeURIComponent(visaTitle) : '';

  // Track whether content is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine which visa content to show
  const isCanadaSuperVisa = decodedCountry === 'CANADA' && decodedVisa === 'Canada Super Visa';
  const isUSB1BusinessVisa = decodedCountry === 'USA' && decodedVisa === 'The US B1 Business Visa';
  const isVistVisa = decodedCountry === 'OTHERS' && decodedVisa === 'Vist Visa';
  const isTravelInsurance = decodedCountry === 'OTHERs' && decodedVisa === 'Travel Insurance';
  const isFRROServices = decodedCountry === 'OTHERS' && decodedVisa === 'FRRO Services';
  const isOCICard = decodedCountry === 'OTHERS' && decodedVisa === 'OCI Card';

  return (
    <>
      <div className="visa-info-container">
        <div className="visa-info-content">

          {/* Left content with collapse logic */}
          <div className="visa-info-text">
            <div className={`collapse-container ${isExpanded ? 'expanded' : 'collapsed'}`}>
              {isCanadaSuperVisa ? (
                // Canada Super Visa Content
                <>
                  <h2>Canada Super Visa</h2>
                  <p>
                    Canada Super Visa is a unique and valuable immigration option specifically designed to facilitate extended
                    visits for parents and grandparents of Canadian citizens or permanent residents. <strong> Passage Consultants</strong> provides
                    an in-depth understanding of the Super Visa, emphasizing its significance and the benefits it offers eligible applicants.
                  </p>

                  <p>
                    The Canada Super Visa, established in December 2011, is a unique immigration option designed to facilitate extended
                    visits for parents and grandparents of Canadian citizens or permanent residents. This page delves into the significance
                    and benefits of the Super Visa, outlining its distinctive features and the advantages it offers to eligible applicants.
                  </p>

                  <h2>Benefits of Super Visa</h2>
                  <ul>
                    <li>Extended Stay Periods: Allows for stays of up to two years at a time, surpassing the typical six-month limit of regular visitor visas.</li>
                    <li>Multiple Entries: This visa grants multiple entries over a 10-year period, offering flexibility for recurrent visits without frequent visa applications.</li>
                    <li>Option for Extension: Provides the opportunity to apply for an extension, potentially allowing a cumulative stay of up to seven years.</li>
                    <li>Year-Round Availability: Available year-round, ensuring flexibility for travel plans aligned with family events, celebrations, or personal milestones.</li>
                    <li>Beneficial for Countries Requiring TRV: Particularly advantageous for individuals from countries requiring a Temporary Resident Visa (TRV), eliminating the need for frequent TRV applications.</li>
                    <li>Hassle-Free Travel: Minimizes administrative burden associated with visa renewals, streamlining travel for parents and grandparents.</li>
                  </ul>

                  <h2>Super Visa Requirements</h2>
                  <p>A Letter of invitation from your child or grandchild residing in Canada as a permanent resident or Canadian citizen.</p>
                  <p>One of the following documents to prove that your child or grandchild meets the Low Income Cut-Off (LICO) minimum:</p>
                  <ul>
                    <li>The most recent copy of the Notice of Assessment</li>
                    <li>Most recent copy of the T4 or T1;</li>
                    <li>Original letter from employer stating title, job description, and salary;</li>
                    <li>Employment insurance pay stubs;</li>
                    <li>If self-employed, a letter from an accountant confirming their annual income;</li>
                    <li>Proof of other sources of income (pension statement, investments, etc.).</li>
                    <li>Evidence of the parent or grandparent relationship to the Canadian citizen or permanent resident you wish to visit (copy of birth certificate, baptismal certificate, or other official document naming you as parent or grandparent).</li>
                    <li>Proof of private medical insurance coverage for a minimum of one year with a Canadian insurance company (copy of the insurance certificate or policy).</li>
                  </ul>

                  <h2>Application Process for Canada Super Visa</h2>
                  <ul>
                    <li>Create an Account: Create an IRCC Portal user account with accurate information.</li>
                    <li>Complete the Online Form: Fill out the application form with precise details, including personal and family information.</li>
                    <li>Upload Necessary Documents: Please scan and upload the required documents, such as the invitation letter and proof of financial support.</li>
                    <li>Review and Confirm Information: Ensure accuracy before submitting the application.</li>
                    <li>Pay the Application Fee: Process the non-refundable fee using accepted methods, typically credit cards.</li>
                    <li>Submit the Application: Applicants must be outside Canada during submission.</li>
                  </ul>

                  <h4>Submission of application staying outside Canada:</h4>
                  <ul>
                    <li>Critical Requirement: Applicants must emphasize the necessity of being outside Canada when submitting their Super Visa applications to adhere to program regulations.</li>
                  </ul>

                  <h2>Super Visa Fees and Processing Time</h2>
                  <ul>
                    <li>Application Processing Fee: Non-refundable fee starting from $100.</li>
                    <li>Biometrics Fee (if applicable): Separate fee for biometrics collection, if required.</li>
                    <li>Insurance Costs: Consider costs associated with obtaining mandatory health insurance.</li>
                  </ul>

                  <h4>Factors Influencing Processing Time</h4>
                  <ul>
                    <li>Volume of Applications Received: Peak periods may lead to longer processing times.</li>
                    <li>Specific Visa Office: Processing time varies by the office handling the application.</li>
                    <li>Country of Application: Processing times are influenced by the applicant's country of origin.</li>
                  </ul>

                  <h4>Overview of Typical Processing Times:</h4>
                  <ul>
                    <li>Typical Processing Time: Average of 4-6 months, with potential variations based on individual circumstances and country-specific factors.</li>
                  </ul>

                  <h2>Stay Duration and Entry Conditions for Canada Super Visa</h2>
                  <ul>
                    <li>Application Date: Applications after June 22, 2023, allow stays of up to 5 years at a time.</li>
                    <li>Entry Date: The date of entry influences the allowable stay period.</li>
                  </ul>

                  <h4>Distinction Between Applications:</h4>
                  <ul>
                    <li>Before June 22, 2023: Stay conditions based on pre-existing regulations.</li>
                    <li>On or After June 22, 2023: Eligible for up to 5 years at a time, reducing administrative burdens.</li>
                  </ul>

                  <h4>Option to Stay for Up to 5 Years:</h4>
                  <ul>
                    <li>Advantage: Extended stay opportunities and reduced administrative burden.</li>
                  </ul>

                  <h4>Choosing Based on Length of Stay:</h4>
                  <ul>
                    <li>Super Visa: Ideal for extended visits, eliminating the need for frequent renewals.</li>
                    <li>Visitor Visa: Suitable for shorter stays, up to 6 months, for various purposes.</li>
                  </ul>
                </>
              ) : isUSB1BusinessVisa ? (
                // USA B1 Business Visa Content
                <>
                  <h2>The USA B1 Business Visa</h2>
                  <p>
                    The USA B1 Business Visa is designed for short term business travel to the US. This visa is typically issued
                    for a period of 6-12 months and is used for supporting business activities such as attending conferences,
                    conducting negotiations etc. The scope of this visa is wide and allows for all sorts of activities other than
                    actively running a business.  <strong> Passage Consultants</strong> can help you identify the right approach to applying
                    for your B1 visa. Our teams will assist you with your application creation and filing and ensure you have the
                    highest chance of receiving a visa quickly. The B1 visa is valid for six months.
                  </p>

                  <h2>USA B1 Visa Details</h2>
                  <p>
                    The B1 Visa is used by visitors for a wide variety of business activities. It is used by businesspersons
                    and executives visiting the US for purposes such as:
                  </p>
                  <ul>
                    <li>Conducting negotiations</li>
                    <li>For sales or investment meetings</li>
                    <li>Discuss planned investment or purchases</li>
                    <li>For business investment purposes</li>
                    <li>To attend meetings</li>
                    <li>To interview and hire staff</li>
                    <li>For research purposes</li>
                  </ul>
                  <p>
                    Ideally, you should apply for the visa a minimum of 2-3 months in advance to allow for all security clearance
                    and processing while meeting all the US business visa requirements. In some cases, there may be a personal
                    interview as well.
                  </p>

                  <h2>Eligibility Requirements</h2>
                  <p>
                    The requirements for a USA business visa are less stringent than those for other visas, but you must meet
                    them to be eligible. The following are the requirements for obtaining the B1 visa:
                  </p>
                  <ul>
                    <li>That your visit to the United States is for business purposes.</li>
                    <li>You have sufficient funds to support yourself during your stay in the United States.</li>
                    <li>You intend to leave the United States as soon as your visa expires and will not return to your home country.</li>
                  </ul>

                  <h2>Documents Required</h2>
                  <p>
                    Since there is no quota on the B1 visa, the documentation required is not as strenuous as for migrant visas.
                    Typically, your application package must contain:
                  </p>
                  <ul>
                    <li>Your passport</li>
                    <li>Proof of funds</li>
                    <li>Letters supporting your reason for visiting the US</li>
                    <li>Letter from your employer if traveling as an employee</li>
                    <li>Proof of business ownership if you are traveling as a businessperson</li>
                    <li>Insurance and other supporting documents</li>
                  </ul>

                  <h2>Application Process</h2>
                  <ul>
                    <li>Fill out the DS-160 form.</li>
                    <li>Pay the B1 visa application fees.</li>
                    <li>Make an appointment for your visa interview.</li>
                    <li>Prepare the papers for your B1 visa application.</li>
                    <li>Participate in the interview.</li>
                  </ul>

                  <h2>Benefits of USA-B1 Visa</h2>
                  <ul>
                    <li>Can visit 50 countries VISA-FREE with a USA-B1 visa</li>
                    <li>Can Participate in short-term training</li>
                    <li>Attend a conference, seminar or event</li>
                    <li>Can visit the US any number of times</li>
                    <li>Multiple-entry visa</li>
                  </ul>

                  <h2>How to apply for USA-B1 visas</h2>
                  <p>
                    At Passage Consultants we guide our clients with deep information and provide the ease with end to end solutions
                  </p>
                  <ul>
                    <li>STEP1：Fill "DS-160" application form online</li>
                    <li>STEP2：Pay the Visa Application Fee</li>
                    <li>STEP3：Schedule your interview</li>
                    <li>STEP4：Prepare for an interview with all the required documents</li>
                    <li>STEP5：Interview with Consular officer</li>
                    <li>STEP6：Check your visa attached passport</li>
                  </ul>
                </>
              ) : isFRROServices ? (
                // FRRO Services Content
                <>
                  <h2>FRRO Services</h2>
                  <p>
                    At Passage Consultants, we serve our foreign clients with FRRO Foreigner Registration In India. All foreign nationals
                    (aside from overseas Indian citizens) visiting India on a long-term visa (more than 180 days) must register with a
                    Registration Officer within 14 days of their arrival under the Indian government's mandatory FRRO Foreigner Registration
                    requirement. Individuals from Pakistan who visit India must register within 24 hours of their arrival, regardless of the
                    length of their stay. Foreign children under the age of twelve are exempt from registration procedures.
                  </p>

                  <h3>FRRO Registration Requirements</h3>
                  <p>
                    All foreign individuals (including foreigners of Indian origin) if visiting India for a long period (more than 180 days)
                    with medical visa, student visa, Research Visa, Employment Visa, Project Visa, and Missionary Visa are required to get
                    themselves registered with the Foreigners Regional Registration Officer (FRRO)/Foreigners Registration Officer (FRO) concerned
                    of having jurisdiction on the place where foreigner individuals want to stay, within the 14 days of arrival.
                  </p>

                  <p>
                    However, all Business Visa holders must register with the FRRO/FRO concerned if their total stay in India on a Business Visa
                    exceeds 180 days in a calendar year.
                  </p>

                  <p>
                    Foreigners other than those listed above shall not be required to register, even if they entered India on a long-term visa,
                    as long as their total stay in India does not exceed 180 days. If they decide to stay for a longer duration, they must register
                    with the relevant Foreigners Registration Officer within 180 days of arrival.
                  </p>

                  <p>
                    However, children under the age of 12 are exempt from the requirement of registration.
                  </p>

                  <h3>Special Requirements for Pakistani Nationals</h3>
                  <p>
                    Pakistani individuals are compulsory required to register within 24 hours of their arrival (except in the cases where they are
                    granted EPR (Exemption from Police Reporting) visas and on Medical visas. Pakistani nationals are required to register within 7
                    days of arrival in the case of a Medical Visa.
                  </p>

                  <p>
                    No registration is necessary if a foreigner departs within 14 days of his or her arrival on the first visit under that visa.
                  </p>

                  <h2>Documents Required for FRRO Visa Registration/Extension</h2>

                  <h3>For Tourist FRRO Visa Registration</h3>
                  <ol>
                    <li>Photocopy required of your original valid passport</li>
                    <li>Copy of Visa along with 4 passport-size color photographs</li>
                    <li>Three photocopies of the relevant pages of the passport page bearing the arrival stamp of Indian Immigration</li>
                    <li>A copy of Form C from a hotel or lodge, an energy bill, a landline phone bill, and a municipal bill from the owner if you're living at
                      a family member or friend's house, along with a letter and picture ID card from the landlord. If you hire a place to live, you need a
                      copy of the Lease and License deal, including the first and last pages and the page with the terms.</li>
                    <li>Passport-size color photographs of the applicant</li>
                  </ol>

                  <h3>Our FRRO Registration Services Include</h3>
                  <ul>
                    <li><strong>Tourist FRRO Visa Registration</strong></li>
                    <li><strong>Business Visa Registration/Extension</strong></li>
                    <li><strong>Employment Visa Registration/Extension</strong></li>
                    <li><strong>Student Visa Registration/Extension</strong></li>
                    <li><strong>FRRO Employment Visa Registration</strong></li>
                    <li><strong>FRRO Business Visa Registration</strong></li>
                  </ul>

                  <p><strong>Note</strong>: Registration is required for all sorts of visas if they want to stay in India for longer than 180 days.</p>
                </>
              ) : isOCICard ? (
                // OCI Card Content
                <>
                  <h2>OCI Card</h2>
                  <p>
                    At Passage Consultants, we assist clients in obtaining the Overseas Citizen of India (OCI) Card, a lifelong visa that allows individuals of Indian ancestry to live, work, and travel in India with significant privileges. The OCI Card provides a convenient way for persons of Indian origin to maintain strong ties with India without requiring frequent visa renewals.
                  </p>
                  <h3>Overview of OCI Card</h3>
                  <p>
                    The OCI Card is a multiple-entry, multi-purpose lifelong visa for individuals who are foreign citizens but have Indian ancestry (up to certain generations) or are spouses of Indian citizens or OCI cardholders. It offers benefits similar to Indian citizenship, except for voting rights, holding certain public offices, and purchasing agricultural land.
                  </p>
                  <h3>Eligibility for OCI Card</h3>
                  <ul>
                    <li>A person who was a citizen of India on or after January 26, 1950.</li>
                    <li>A person who was eligible to become a citizen of India on January 26, 1950.</li>
                    <li>A person belonging to a territory that became part of India after August 15, 1947.</li>
                    <li>A person who is a child, grandchild, or great-grandchild of such a citizen.</li>
                    <li>A person who is a minor child of a person mentioned above.</li>
                    <li>A person who is a spouse of an Indian citizen or OCI cardholder, with a marriage registered for at least two years.</li>
                  </ul>
                  <h3>Documents Required</h3>
                  <ul>
                    <li>Valid passport of the applicant.</li>
                    <li>Proof of Indian origin (e.g., previous Indian passport, birth certificate, or parent’s Indian passport).</li>
                    <li>Passport-size photographs as per specifications.</li>
                    <li>Proof of address (e.g., utility bill, driving license).</li>
                    <li>Marriage certificate (if applying as a spouse).</li>
                    <li>OCI card or Indian passport of parents (if applicable).</li>
                    <li>Application form duly filled and signed.</li>
                  </ul>
                  <h3>Application Process</h3>
                  <ol>
                    <li>Complete the online OCI application form on the official Government of India website.</li>
                    <li>Upload required documents in the specified format.</li>
                    <li>Pay the applicable OCI application fee online.</li>
                    <li>Submit the application and schedule an appointment at the nearest Indian Embassy/Consulate or FRRO.</li>
                    <li>Attend the appointment with original documents for verification.</li>
                    <li>Track the application status online and collect the OCI Card upon approval.</li>
                  </ol>
                  <h3>Benefits of OCI Card</h3>
                  <ul>
                    <li>Multiple-entry, lifelong visa for India.</li>
                    <li>Exemption from registration with FRRO for any length of stay in India.</li>
                    <li>Parity with Non-Resident Indians (NRIs) in economic, financial, and educational fields.</li>
                    <li>Ability to work and travel freely in India without visa restrictions.</li>
                    <li>Access to fast-track immigration services at Indian airports.</li>
                  </ul>
                  <p><strong>Note</strong>: OCI cardholders must carry their OCI Card and valid foreign passport when traveling to India.</p>
                </>
              ) : isVistVisa ? (
                // Vist Visa Content
                <>
                  <h2>Vist Visa</h2>
                  <p>
                    At Passage Consultants, we simplify the process of obtaining a Visit Visa from India, whether you're planning a dream holiday, a business trip, or a visit to family and friends. Our expert team guides you through the complexities of visa applications to ensure a smooth and stress-free experience.
                  </p>
                  <h3>What is a Visit Visa?</h3>
                  <p>
                    A Visit Visa is a short-stay visa that allows Indian travelers to enter another country for purposes such as tourism, business meetings, visiting family or friends, medical treatment, or transiting through a country. It is not intended for long-term work or study.
                  </p>
                  <h3>Types of Visit Visa</h3>
                  <ul>
                    <li><strong>Tourist Visa</strong>: For exploring, sightseeing, or relaxing, valid for short stays (a few weeks to months).</li>
                    <li><strong>Business Visitor Visa</strong>: For attending meetings, conferences, or client visits, but not for employment.</li>
                    <li><strong>Family and Friend Visitor Visa</strong>: For visiting loved ones, often requiring an invitation letter.</li>
                    <li><strong>Medical Treatment Visa</strong>: For receiving medical care, requiring proof of treatment.</li>
                    <li><strong>Transit Visa</strong>: For short layovers or stops during travel to another destination.</li>
                  </ul>
                  <h3>Eligibility for Visit Visa</h3>
                  <ul>
                    <li>Valid passport with at least six months of validity from the departure date.</li>
                    <li>Proof of financial stability (e.g., bank statements, pay slips).</li>
                    <li>Intent to return to India (e.g., employment proof, return ticket, family/property ties).</li>
                    <li>Clean criminal record, sometimes requiring a police clearance certificate.</li>
                    <li>Health requirements, such as medical exams for certain countries or purposes.</li>
                  </ul>
                  <h3>Documents Required</h3>
                  <ul>
                    <li>Valid passport with at least six months of validity.</li>
                    <li>Completed visa application form.</li>
                    <li>Passport-sized photographs meeting embassy/consulate specifications.</li>
                    <li>Proof of financial stability (e.g., bank statements, pay slips).</li>
                    <li>Travel itinerary (e.g., flight bookings, hotel reservations).</li>
                    <li>Invitation letter (if visiting family or friends).</li>
                    <li>Proof of medical treatment (if applying for a medical visa).</li>
                    <li>Police clearance certificate (if required).</li>
                  </ul>
                  <h3>Application Process</h3>
                  <ol>
                    <li>Determine the type of Visit Visa needed (tourist, business, etc.).</li>
                    <li>Collect all required documents as per the destination country’s guidelines.</li>
                    <li>Complete the visa application form accurately.</li>
                    <li>Pay the visa application fee, which varies by country and visa type.</li>
                    <li>Schedule and attend a visa interview, if required by the consulate.</li>
                    <li>Submit the application and wait for processing (7 days to 6 weeks, depending on the country).</li>
                  </ol>
                  <h3>Processing Times</h3>
                  <ul>
                    <li><strong>USA</strong>: 3-5 weeks.</li>
                    <li><strong>UK</strong>: Approximately 15 working days.</li>
                    <li><strong>Canada</strong>: 2-3 weeks.</li>
                    <li><strong>Dubai</strong>: 2-3 working days.</li>
                    <li><strong>Singapore</strong>: 3-4 working days.</li>
                    <li><strong>Vietnam</strong>: 3-4 working days.</li>
                  </ul>
                  <h3>Benefits of Choosing Passage Consultants</h3>
                  <ul>
                    <li>Expert guidance on selecting the right visa type.</li>
                    <li>Personalized assistance tailored to your travel needs.</li>
                    <li>High success rate with streamlined application processes.</li>
                    <li>Stress-free experience, allowing you to focus on your trip.</li>
                  </ul>
                  <p><strong>Note</strong>: Always apply well in advance to account for processing times, and check specific country requirements.</p>
                </>
              ) : isTravelInsurance ? (
                // Travel Insurance Content
                <>
                  <h2>Travel Insurance</h2>
                  <p>
                    At Passage Consultants, we believe every journey should be worry-free, whether it’s a vacation, business trip, or study abroad. Our travel insurance services provide financial protection against unexpected events like medical emergencies, trip cancellations, lost baggage, or delayed flights, ensuring you can focus on creating memories.
                  </p>
                  <h3>Why Choose Travel Insurance?</h3>
                  <p>
                    Travel insurance offers peace of mind by covering unforeseen challenges during your trip. With comprehensive plans from leading providers like Tata AIG, ICICI Lombard, Bajaj Allianz, and Max, we ensure high coverage, hassle-free claims, and 24/7 global assistance.
                  </p>
                  <h3>Types of Travel Insurance Plans</h3>
                  <ul>
                    <li><strong>Leisure Travel Insurance</strong>: For vacations and short-term trips.</li>
                    <li><strong>Business Travel Insurance</strong>: For professionals on work-related trips.</li>
                    <li><strong>Student Travel Insurance</strong>: For students studying abroad.</li>
                    <li><strong>Work Permit Insurance</strong>: For long-term or short-term work assignments.</li>
                  </ul>
                  <h3>Benefits of Travel Insurance</h3>
                  <ul>
                    <li>No health check-up required for policy issuance.</li>
                    <li>24/7 support helplines for global assistance.</li>
                    <li>Quick and hassle-free claim settlements.</li>
                    <li>Coverage for pre-existing diseases (PED).</li>
                    <li>Protection against trip cancellations, lost baggage, and medical emergencies.</li>
                  </ul>
                  <h3>How to Get Travel Insurance</h3>
                  <ol>
                    <li>Contact Passage Consultants to discuss your travel needs.</li>
                    <li>Choose a plan from our trusted providers (Tata AIG, ICICI Lombard, etc.).</li>
                    <li>Provide basic details (travel dates, destination, coverage needs).</li>
                    <li>Complete the online application and pay the premium.</li>
                    <li>Receive your policy instantly with 24/7 support access.</li>
                  </ol>
                  <h3>Why Choose Passage Consultants?</h3>
                  <ul>
                    <li>Access to top insurance providers with tailored plans.</li>
                    <li>Fast and reliable claim processing support.</li>
                    <li>Expert advice to select the best coverage for your trip.</li>
                    <li>Seamless online process for quick policy issuance.</li>
                  </ul>
                  <p><strong>Note</strong>: Ensure your travel insurance policy is active before your trip begins to maximize coverage.</p>
                </>
              ) : (
                // Default visa content (from original VisaInfo.jsx)
                <>
                  <h2>{decodedCountry} Visa</h2>
                  <p>
                    {decodedCountry} offers immense opportunities for enterprising businesses. With world-leading cities,
                    mature financial and healthcare sectors, and a thriving industry, {decodedCountry} opens doors for growth.
                    <strong>Passage Consultants</strong> can help you navigate the {decodedCountry} Business Visa process for {decodedVisa}.
                  </p>

                  <h3>{decodedVisa}</h3>

                  <p>
                    To facilitate trade, {decodedCountry} offers visas that allow entrepreneurs, executives, and professionals
                    to temporarily visit {decodedCountry} to conduct business. With the {decodedCountry} Business Visa, you can:
                  </p>
                  <ul>
                    <li>Visit {decodedCountry} for business meetings</li>
                    <li>Attend trade shows and conferences</li>
                    <li>Meet prospective clients and place orders</li>
                    <li>Receive training from your company</li>
                  </ul>
                  <p>The {decodedCountry} Business Visa allows a stay of up to 6 months.</p>

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
                    <li>For the following three years, you must be able and willing to meet your spouse's or partner's basic financial necessities.</li>
                    <li>You will not be allowed to sponsor your partner unless they are a member of the family class. To sponsor your spouse, you must be a citizen, permanent resident, or have a work visa.</li>
                    <li>You must have a real relationship with your spouse, one that was not formed only for the purpose of obtaining permanent residency. Your relationship must be at least a year old.</li>
                  </ul>

                  <h4>Child visa to bring dependent children to Canada</h4>
                  <p>The dependent visa allows sponsors to bring their children to Canada:</p>
                  <ul>
                    <li>Child adopted outside Canada when the sponsor was a Canadian citizen or permanent resident living in the country</li>
                    <li>Child that they intend to adopt in Canada</li>
                    <li>Sponsor's brother or sister, nephew or niece, grandson or granddaughter if they are an orphan and meet the eligibility criteria</li>
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

                  <h4>Eligibilities for {decodedVisa}:</h4>
                  <ul>
                    <p>
                      If an individual wants to sponsor a {decodedVisa} for Canada, he must submit documents that provide
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
                </>
              )}
            </div>

            {/* Toggle button always visible */}
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
      <Achievements />
    </>
  );
};

export default VisaInfo;