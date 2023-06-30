import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import faq from '../data/faq';
import parse from 'html-react-parser';

const { service, writing, publishing } = faq;

function FAQ() {
  return (
    <Container>
      <Typography variant='h2' align='center' gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography variant='body1' align='center' gutterBottom>
        Find answers to the most asked questions below. <br />
        Contact us if you can&apos;t find the answer below.
      </Typography>
      <Grid container spacing={3} display='flex' justifyContent='space-around'>
        <Grid item xs={12} md={5}>
          <Typography variant='h4' gutterBottom fontWeight='bold' mt={4} paragraph>
            Service
          </Typography>
          {service.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='div' fontWeight='bold' color='dark'>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='div'>{parse(faq.answer)}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant='h4' gutterBottom fontWeight='bold' mt={4} paragraph>
            Writing
          </Typography>
          {writing.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='div' fontWeight='bold' color='dark'>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='div'>{parse(faq.answer)}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          <Typography variant='h4' gutterBottom fontWeight='bold' mt={4} paragraph>
            Publishing
          </Typography>
          {publishing.map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant='div' fontWeight='bold' color='dark'>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant='div'>{parse(faq.answer)}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default FAQ;
