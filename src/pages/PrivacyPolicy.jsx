import LegalPage from '../Components/Common/LegalPage'

const sections = [
  {
    title: '1. Information We Collect',
    paragraphs: ['We may collect information that you voluntarily provide when you contact us, request a quotation, submit an enquiry, or download a brochure.'],
    items: ['Name, company name, email address, and phone number', 'Product interests, order requirements, and enquiry details', 'Technical information such as browser type, device information, IP address, and website usage data'],
  },
  {
    title: '2. How We Use Your Information',
    paragraphs: ['We use personal information only for legitimate business purposes, including responding to enquiries, preparing quotations, providing requested product information, coordinating orders, improving our website, and maintaining business records.'],
  },
  {
    title: '3. Cookies and Analytics',
    paragraphs: ['Our website may use essential cookies and analytics technologies to understand website performance and improve the visitor experience. You can restrict cookies through your browser settings, although some website features may not work as intended.'],
  },
  {
    title: '4. Sharing of Information',
    paragraphs: ['We do not sell or rent your personal information. We may share necessary information with trusted service providers, logistics partners, manufacturers, professional advisers, or authorities when required to fulfil your request, operate our business, or comply with law.'],
  },
  {
    title: '5. Data Security and Retention',
    paragraphs: ['We use reasonable administrative and technical safeguards to protect personal information. Information is retained only for as long as necessary for the purpose for which it was collected, to meet contractual requirements, or to comply with applicable legal obligations.'],
  },
  {
    title: '6. Your Rights',
    paragraphs: ['Subject to applicable law, you may request access to, correction of, or deletion of your personal information, or withdraw consent where processing is based on consent. We may need to verify your identity before completing a request.'],
  },
  {
    title: '7. Third-Party Links',
    paragraphs: ['Our website may contain links to third-party websites. AHPL is not responsible for the privacy practices, security, or content of those external websites.'],
  },
  {
    title: '8. Contact Us',
    paragraphs: ['For privacy questions or requests, contact Ananta Horizons Pvt Ltd at Info@ahplexports.com or write to our operational address: 1st Floor, Lajwanti Complex, 10/2 Central Avenue, Sut Market, Itwari, Nagpur, Maharashtra 440002, India.'],
  },
]

const PrivacyPolicy = () => (
  <LegalPage
    title="Privacy Policy"
    description="Ananta Horizons Pvt Ltd (AHPL, “we”, “us”, or “our”) respects your privacy. This policy explains how information is collected, used, protected, and shared when you use the AHPL website or communicate with us."
    sections={sections}
  />
)

export default PrivacyPolicy
