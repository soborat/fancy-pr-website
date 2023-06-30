import { Container, Typography } from "@mui/material";
import Head from "next/head";

function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Enterprwise - Refund Policy</title>
        <meta
          name="description"
          content="If, for any reason, we are not able to publish an article for you on a minimum of 200 news websites, you will be entitled to a full refund."
        ></meta>
      </Head>
      <Container>
        <Typography variant="h3">Our Money Back Guarantee</Typography>
        <Typography>
          If, for any reason, we are not able to publish an article for you on a
          minimum of 200 news websites, you will be entitled to a full refund.
          In this case, we may offer the option to redo the order. However, you
          will always have the opportunity to get a full refund in this
          situation if you would prefer.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3">Refunds during the writing process</Typography>
        <Typography>
          When you place an order with us, we use your payment to pre-pay our
          writers to work on your order. So if you change your mind for any
          reason during the article writing or review process, we can only offer
          a 50% refund. In this case, you will still receive your news article
          and be able to request revisions. The completed article will be yours
          to use in any way you choose.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3">
          Refunds during the publishing process
        </Typography>
        <Typography>
          Refunds requested during the publishing process will be denied. We
          cannot stop a publication that is in process, and we are not able to
          recoup the costs of publishing an article. Please review your article
          thoroughly before sending it to us or approving it for publication. We
          make every effort to ensure that your article is free of errors.
          However, you should always check:
        </Typography>
        <ul>
          <li>The article meets your requirements</li>
          <li>
            The business contact details are correct as they will be included in
            the live publications
          </li>
          <li>The spelling and grammar are right</li>
          <li>The keywords you provided are used</li>
          <li>All the links work correctly</li>
          <li>
            The images/videos you want are included and positioned in the
            article
          </li>
        </ul>
      </Container>
      <Container>
        <Typography variant="h3">
          Refunds after the completion of your order
        </Typography>
        <Typography>
          If the text of the article you provided us or approved does not match
          the live publications. In that case, you can request a free removal
          and republish. This policy does not cover a difference in the
          publication&apos;s formatting or the placement of images and videos
          because each news site controls these. If your article is not
          published on a minimum of 200 news sites you will be entitled to a
          full refund as per our Money Back Guarnatee. All other reasons for a
          refund will be considered, but not guaranteed.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3">How long do refunds take</Typography>
        <Typography>
          Refunds will be approved or denied based on this policy within 24
          hours of receiving your request. Credit Card Refunds will be available
          back on your card within 5 - 10 business days. PayPal Refunds will be
          instantly visible in your PayPal account once we have processed them.
          If you paid with your PayPal balance, the funds should be available
          immediately after we process it. If you paid using a card or bank
          account, the funds usually are available after 5 business days but can
          take longer depending on your bank. Refunds will always be sent back
          to the PayPal account, bank account, or card you used when making the
          payment. We are not able to process refunds to a different account.
        </Typography>
      </Container>
      <Container>
        <Typography variant="h3">How to request a refund</Typography>
        <Typography>
          To request a refund, you can either click here to start a chat or send
          an email to hello@enterprwise.co When contacting us about a refund,
          please include the email address you used when placing an order.
        </Typography>
      </Container>
    </>
  );
}

export default RefundPolicy;
