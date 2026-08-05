import LegalPage from '../Components/Common/LegalPage'

const sections = [
  {
    title: '1. Acceptance of Terms',
    paragraphs: ['By accessing or using this website, you agree to these Terms & Conditions. If you do not agree, please discontinue use of the website.'],
  },
  {
    title: '2. Website Information',
    paragraphs: ['The website provides general information about AHPL, its export services, product categories, and business capabilities. Product descriptions, images, specifications, availability, and other content are indicative and may be updated without notice.'],
  },
  {
    title: '3. Enquiries, Quotations, and Orders',
    paragraphs: ['A website enquiry, brochure request, or quotation request does not create a binding order. Prices, minimum order quantities, specifications, packaging, delivery schedules, payment terms, taxes, and shipping terms will be confirmed separately in a written quotation, pro forma invoice, purchase order, or contract accepted by AHPL.'],
  },
  {
    title: '4. Product Variations',
    paragraphs: ['Handcrafted and natural-material products may have reasonable variations in colour, texture, dimensions, finish, and appearance. Such variations are part of the product character and will be assessed against the specifications agreed for the applicable order.'],
  },
  {
    title: '5. Intellectual Property',
    paragraphs: ['All website content, including text, graphics, logos, photographs, layouts, and downloadable materials, is owned by or licensed to AHPL and is protected by applicable intellectual-property laws. Content may not be copied, republished, distributed, or commercially used without prior written permission.'],
  },
  {
    title: '6. Acceptable Use',
    paragraphs: ['You must not misuse the website, attempt unauthorized access, introduce malicious code, interfere with website operation, scrape content at scale, impersonate another person, or use the website for unlawful or fraudulent activity.'],
  },
  {
    title: '7. Third-Party Services and Links',
    paragraphs: ['Links to third-party websites or services are provided for convenience. AHPL does not control and is not responsible for their content, availability, security, or terms.'],
  },
  {
    title: '8. Disclaimer and Limitation of Liability',
    paragraphs: ['The website is provided on an “as available” basis. While we aim to keep information accurate and the website accessible, we do not guarantee uninterrupted operation or that all content is error-free. To the extent permitted by law, AHPL will not be liable for indirect, incidental, or consequential loss arising solely from use of, or inability to use, this website.'],
  },
  {
    title: '9. Governing Law',
    paragraphs: ['These terms are governed by the laws of India. Subject to applicable law and any written contract governing a transaction, courts located in Nagpur, Maharashtra will have jurisdiction over disputes relating to website use.'],
  },
  {
    title: '10. Changes and Contact',
    paragraphs: ['We may update these terms periodically by publishing the revised version on this page. For questions, contact Ananta Horizons Pvt Ltd at Info@ahplexports.com.'],
  },
]

const TermsAndConditions = () => (
  <LegalPage
    title="Terms & Conditions"
    description="These Terms & Conditions govern your use of the AHPL website operated by Ananta Horizons Pvt Ltd. Commercial transactions may also be governed by separate written quotations, invoices, purchase orders, or agreements."
    sections={sections}
  />
)

export default TermsAndConditions
