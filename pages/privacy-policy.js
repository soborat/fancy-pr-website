import { Container, List, ListItem, Typography } from "@mui/material";
import Head from "next/head";

function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Enterprwise - Privacy Policy</title>
        <meta
          name="description"
          content="When you visit our website, our servers may automatically log the standard data provided by your web browser."
        ></meta>
      </Head>
      <Container>
        <Typography variant="h3">Information we collect</Typography>
        <Typography variant="h6">Log Data</Typography>
        <Typography>
          When you visit our website, our servers may automatically log the
          standard data provided by your web browser. It may include your
          computer&apos;s Internet Protocol (IP) address, your browser type and
          version, the pages you visit, the time and date of your visit, the
          time spent on each page, and other details.
        </Typography>
        <Typography variant="h6">Device data</Typography>
        <Typography>
          We may also collect data about the device you&apos;re using to access
          our website. This data may include the device type, operating system,
          unique device identifiers, device settings, and geo-location data.
          What we collect can depend on the individual settings of your device
          and software. We recommend checking the policies of your device
          manufacturer or software provider to learn what information they make
          available to us.
        </Typography>
        <Typography variant="h6">Personal information</Typography>
        <Typography component="div">
          We may ask for personal information, such as your:
        </Typography>
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Social media profiles</li>
          <li>Phone/mobile number</li>
          <li>Work address</li>
          <li>Payment information</li>
        </ul>
      </Container>
      <Container>
        <Typography variant="h3">Legal bases for processing</Typography>
        <Typography>
          We will process your personal information lawfully, fairly and in a
          transparent manner. We collect and process information about you only
          where we have legal bases for doing so.
          <br />
          <br />
          These legal bases depend on the services you use and how you use them,
          meaning we collect and use your information only where:
        </Typography>
        <List component="ul">
          <ListItem>
            it&apos;s necessary for the performance of a contract to which you
            are a party or to take steps at your request before entering into
            such a contract (for example, when we provide a service you request
            from us);
          </ListItem>
          <ListItem>
            it satisfies a legitimate interest (which is not overridden by your
            data protection interests), such as for research and development, to
            market and promote our services, and to protect our legal rights and
            interests;
          </ListItem>
          <ListItem>
            you give us consent to do so for a specific purpose (for example,
            you might consent to us sending you our newsletter); or
          </ListItem>
          <ListItem>
            we need to process your data to comply with a legal obligation.
          </ListItem>
        </List>
        <Typography>
          Where you consent to our use of information about you for a specific
          purpose, you have the right to change your mind at any time (but this
          will not affect any processing that has already taken place).
        </Typography>
        <br />
        <br />
        <Typography>
          We don&apos;t keep personal information for longer than is necessary.
          While we retain this information, we will protect it within
          commercially acceptable means to prevent loss and theft, as well as
          unauthorized access, disclosure, copying, use or modification. That
          said, we advise that no method of electronic transmission or storage
          is 100% secure and cannot guarantee absolute data security. If
          necessary, we may retain your personal information for our compliance
          with a legal obligation or in order to protect your vital interests or
          the vital interests of another natural person.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3">Collection and use of information</Typography>
        <Typography>
          We may collect, hold, use and disclose information for the following
          purposes and personal information will not be further processed in a
          manner that is incompatible with these purposes:
        </Typography>
        <List component="ul">
          <ListItem>
            to enable you to customize or personalize your experience of our
            website;
          </ListItem>
          <ListItem>
            to enable you to access and use our website, associated applications
            and associated social media platforms;
          </ListItem>
          <ListItem>to contact and communicate with you;</ListItem>
          <ListItem>
            for analytics, market research and business development, including
            to operate and improve our website, associated applications and
            associated social media platforms;
          </ListItem>
          <ListItem>
            for advertising and marketing, including to send you promotional
            information about our products and services and information about
            third parties that we consider may be of interest to you; and
          </ListItem>
          <ListItem>
            to comply with our legal obligations and resolve any disputes that
            we may have.
          </ListItem>
        </List>
      </Container>
      <Container>
        <Typography variant="h3">
          Disclosure of personal information to third parties
        </Typography>
        <Typography>We may disclose personal information to:</Typography>
        <List component="ul">
          <ListItem>
            third party service providers for the purpose of enabling them to
            provide their services, including (without limitation) IT service
            providers, data storage, hosting and server providers, ad networks,
            analytics, error loggers, debt collectors, maintenance or
            problem-solving providers, marketing or advertising providers,
            professional advisors and payment systems operators;
          </ListItem>
          <ListItem>
            our employees, contractors and/or related entities;
          </ListItem>
          <ListItem>
            credit reporting agencies, courts, tribunals and regulatory
            authorities, in the event you fail to pay for goods or services we
            have provided to you;
          </ListItem>
          <ListItem>
            courts, tribunals, regulatory authorities and law enforcement
            officers, as required by law, in connection with any actual or
            prospective legal proceedings, or in order to establish, exercise or
            defend our legal rights;
          </ListItem>
          <ListItem>
            third parties, including agents or sub-contractors, who assist us in
            providing information, products, services or direct marketing to
            you; and
          </ListItem>
          <ListItem>third parties to collect and process data.</ListItem>
        </List>
        <Typography variant="h3">
          International transfers of personal information
        </Typography>
        <Typography>
          The personal information we collect is stored and processed in United
          States and Romania, or where we or our partners, affiliates and
          third-party providers maintain facilities. By providing us with your
          personal information, you consent to the disclosure to these overseas
          third parties.
          <br />
          <br />
          We will ensure that any transfer of personal information from
          countries in the European Economic Area (EEA) to countries outside the
          EEA will be protected by appropriate safeguards, for example by using
          standard data protection clauses approved by the European Commission,
          or the use of binding corporate rules or other legally accepted means.
          <br />
          <br />
          Where we transfer personal information from a non-EEA country to
          another country, you acknowledge that third parties in other
          jurisdictions may not be subject to similar data protection laws to
          the ones in our jurisdiction. There are risks if any such third party
          engages in any act or practice that would contravene the data privacy
          laws in our jurisdiction and this might mean that you will not be able
          to seek redress under our jurisdiction&apos;s privacy laws.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3">
          Your rights and controlling your personal information
        </Typography>
        <Typography>
          Choice and consent: By providing personal information to us, you
          consent to us collecting, holding, using and disclosing your personal
          information in accordance with this privacy policy. If you are under
          16 years of age, you must have, and warrant to the extent permitted by
          law to us, that you have your parent or legal guardian’s permission to
          access and use the website and they (your parents or guardian) have
          consented to you providing us with your personal information. You do
          not have to provide personal information to us, however, if you do
          not, it may affect your use of this website or the products and/or
          services offered on or through it.
          <br />
          <br />
          Information from third parties: If we receive personal information
          about you from a third party, we will protect it as set out in this
          privacy policy. If you are a third party providing personal
          information about somebody else, you represent and warrant that you
          have such person’s consent to provide the personal information to us.
          <br />
          <br />
          Restrict: You may choose to restrict the collection or use of your
          personal information. If you have previously agreed to us using your
          personal information for direct marketing purposes, you may change
          your mind at any time by contacting us using the details below. If you
          ask us to restrict or limit how we process your personal information,
          we will let you know how the restriction affects your use of our
          website or products and services.
          <br />
          <br />
          Access and data portability: You may request details of the personal
          information that we hold about you. You may request a copy of the
          personal information we hold about you. Where possible, we will
          provide this information in CSV format or other easily readable
          machine format. You may request that we erase the personal information
          we hold about you at any time. You may also request that we transfer
          this personal information to another third party.
          <br />
          <br />
          Correction: If you believe that any information we hold about you is
          inaccurate, out of date, incomplete, irrelevant or misleading, please
          contact us using the details below. We will take reasonable steps to
          correct any information found to be inaccurate, incomplete, misleading
          or out of date.
          <br />
          <br />
          Notification of data breaches: We will comply laws applicable to us in
          respect of any data breach.
          <br />
          <br />
          Complaints: If you believe that we have breached a relevant data
          protection law and wish to make a complaint, please contact us using
          the details below and provide us with full details of the alleged
          breach. We will promptly investigate your complaint and respond to
          you, in writing, setting out the outcome of our investigation and the
          steps we will take to deal with your complaint. You also have the
          right to contact a regulatory body or data protection authority in
          relation to your complaint.
          <br />
          <br />
          Unsubscribe: To unsubscribe from our e-mail database or opt-out of
          communications (including marketing communications), please contact us
          using the details below or opt-out using the opt-out facilities
          provided in the communication.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3">Cookies</Typography>
        <Typography>
          We use “cookies” to collect information about you and your activity
          across our site. A cookie is a small piece of data that our website
          stores on your computer, and accesses each time you visit, so we can
          understand how you use our site. This helps us serve you content based
          on preferences you have specified. Please refer to our Cookie Policy
          for more information.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3">Business transfers</Typography>
        <Typography>
          If we or our assets are acquired, or in the unlikely event that we go
          out of business or enter bankruptcy, we would include data among the
          assets transferred to any parties who acquire us. You acknowledge that
          such transfers may occur, and that any parties who acquire us may
          continue to use your personal information according to this policy.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3">Limits of our policy</Typography>
        <Typography>
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and policies
          of those sites, and cannot accept responsibility or liability for
          their respective privacy practices.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3">Changes to this policy</Typography>
        <Typography>
          At our discretion, we may change our privacy policy to reflect current
          acceptable practices. We will take reasonable steps to let users know
          about changes via our website. Your continued use of this site after
          any changes to this policy will be regarded as acceptance of our
          practices around privacy and personal information.
          <br />
          <br />
          <br />
          <br />
          If we make a significant change to this privacy policy, for example
          changing a lawful basis on which we process your personal information,
          we will ask you to re-consent to the amended privacy policy.
          <br />
          <br />
          @ Data Controller
          <br />
          Data Controller
          <br />
          datacontroller@enterprwise.com
          <br />
          <br />
          This policy is effective as of November 29, 2020.
        </Typography>
      </Container>
    </>
  );
}

export default PrivacyPolicy;
