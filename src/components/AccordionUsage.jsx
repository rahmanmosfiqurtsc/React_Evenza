import  React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  const id = React.useId();
  return (
    <div>
      <Accordion className='bg-[#F6F6F7]! rounded-[20px]! w-[830px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span" className='Font-semibold! text-[18px]! leading-[24.3px]!'>1. How does the complete event register process actually work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel2-content`}
          id={`${id}-panel2-header`}
        >
          <Typography component="span">2. Where is the main event venue located precisely?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel3-content`}
          id={`${id}-panel3-header`}
        >
          <Typography component="span" >3. Can attendees freely switch between sessions and tracks?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.
        </AccordionDetails>
        {/* <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions> */}
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">4. Does the event provide virtual participation options online?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">5. What is the event refund and cancellation policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Our event is designed with flexible scheduling, allowing you to move between halls, select sessions that interest you most, and customize your learning experience throughout the day.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
