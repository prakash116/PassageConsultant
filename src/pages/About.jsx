import Achievements from "../components/Hero/Achievements";
import '../styles/about.css';
import TotalClients from "../pages/TotalClients"
import AboutVideo from '../assets/AboutVideo.mp4';
import Award from "../assets/award.png";
import BenefitDetail from "../pages/BenefitDetails"
import ImmigrationServices from "../pages/ImmigrationServices"
import ManagementPage from "../pages/ManagementPage"

export default function About() {
    return (
        <>
            <section className="about-section">
                {/* Header with video background */}
                <div className="about-header">
                    <video
                        className="about-header__video"
                        src={AboutVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>

                {/* Main content */}
                <div className="about-body">
                    {/* Left: Award Image */}
                    <div className="about-image-container">
                        <img src={Award} alt="Award" className="about-award-image" />
                    </div>

                    {/* Right: About Company Content */}
                    <div className="about-content">
                        <div className="about-welcome">
                            <h1>About Company</h1>
                            <p>
                                We are young and dynamic Immigration | Student Visa & Corporate
                                Visa/s consultants in New Delhi, India. Our aim is to provide
                                specialization in immigration to foreign countries offering excellent
                                quality of life, unlocking new opportunities for our clients, advisory
                                services and assisting students/corporate/celebrity/players to make
                                the right choice with regard to pursuing a visa for different travel needs.
                                What sets us apart is our customized approach. Every individual is
                                different and requires a tailored
                                strategy. We also believe in providing high quality client-servicing. We
                                keep ourselves updated with rules and regulations and latest norms
                                shaping all our services
                            </p>
                        </div>

                        <div className="about-moto">
                            <h2>Our Moto</h2>
                            <p>
                                Our moto is to successfully deliver customized solutions for the Senior
                                Corporate Executives/ Businessman/ Start-ups entrepreneurs/
                                Individuals / Investors/ Players & Celebrities and their families by
                                offering a holistic range of services.
                            </p>
                        </div>

                        <div className="about-offer">
                            <h2>What We Offer?</h2>
                            <p>
                            We offer professional counseling for all and any class of Visa support for countries like USA, UK, Canada, Australia, New Zealand and Europe, Corporate Visa, Global talent Visa etc.
                            </p>
                        </div>
                    </div>
                </div>

                {/* What Makes Us Different Section */}
                <div className="difference-section">
                    <h2 className="difference-heading">What Makes Us Different?</h2>
                    
                    <div className="difference-grid">
                        {/* Row 1 */}
                        <div className="difference-box">
                            <p>Complete guidance with documentation support and professional management throughout entire application process</p>
                        </div>
                        
                        <div className="difference-box">
                            <p>Online IELTS/PTE coaching with expert instructors for corporate groups or Individual sessions</p>
                        </div>
                        
                        {/* Row 2 */}
                        <div className="difference-box">
                            <p>Visa procurement for accompanying Spouse, Dependent, Non-dependent children, Parents, Senior Citizens and non-English speakers</p>
                        </div>
                        
                        <div className="difference-box">
                            <p>Possibilities for the most suitable Universities for your further education taking into account the financials and the caliber of the student</p>
                        </div>
                        
                        {/* Row 3 */}
                        <div className="difference-box">
                            <p>Training for interview with Visa offices and Visa agencies – either directly or through international associates</p>
                        </div>
                        
                        <div className="difference-box">
                            <p>Our company is built on a reputation for integrity, transparency and results</p>
                        </div>
                        
                        {/* Row 4 */}
                        <div className="difference-box">
                            <p>Refusals can normally be prevented since we meticulously consider all aspects of applications. In case of refusals of any application, we help with other options available with the end goal turning of "a NO to a YES"</p>
                        </div>
                        
                        <div className="difference-box">
                            <p>Complete guidance on overseas company Incorporation, Taxation, Planning and Process through a well-established network of International associates</p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <TotalClients/>
                <BenefitDetail/>
                <ManagementPage/>
                <ImmigrationServices/>
                <Achievements />
            </div>
        </>
    );
}