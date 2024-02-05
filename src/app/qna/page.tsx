'use client';
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import GlobalContext from '@/context/GlobalContext';

export default function AccordionUsage() {
  const { setOpen } = React.useContext(GlobalContext);
  const allQnA = [
    {
      heading: 'Medical History', questions: [
        'Have you experienced similar skin issues before?',
        'Are you currently taking any medications?'
      ]
    },
    {
      heading: 'Symptom Details:', questions: [
        'When did you first notice the skin problem?',
        'Can you describe the symptoms, such as itching, pain, or redness?'
      ]
    },
    {
      heading: 'Environmental Factors', questions: [
        'Have you been exposed to any new environmental factors, like allergens or harsh chemicals?',
        'Do you work in an environment that might contribute to skin issues?',
      ]
    },
    {
      heading: 'Lifestyle and Habits', questions: [
        'Have there been any recent changes in your lifestyle or daily habits?',
        'Do you have a history of sun exposure, and do you use any sun protection?'
      ]
    },
    {
      heading: 'Allergies', questions: [
        'Are you aware of any allergies you may have, whether related to food, plants, or skincare products?',
      ]
    },
    {
      heading: 'Diet and Hydration', questions: [
        'How would you describe your diet, and are you staying hydrated?',
        'Do you have any dietary preferences or restrictions?'
      ]
    },
    {
      heading: 'Stress Levels', questions: [
        'Have you been under increased stress lately?',
        'Do you notice any correlation between stress and your skin condition?'
      ]
    },
    {
      heading: 'Occupation', questions: [
        'Can you describe your occupation, and are there occupational exposures that might be relevant?',
      ]
    },
    {
      heading: 'Previous Treatments', questions: [
        'Have you tried any over-the-counter treatments or home remedies?',
        'Have you had any professional treatments for the current skin issue?'
      ]
    },
    {
      heading: 'Family History', questions: [
        'Is there a family history of skin conditions or dermatological issues?',
        'Are there any genetic factors that might be relevant?'
      ]
    },
    {
      heading: 'Recent Travel', questions: [
        'Have you traveled recently, and could this be related to your skin condition?'
      ]
    },
    {
      heading: 'Underlying Health Conditions', questions: [
        'Are you currently managing any chronic health conditions?',
        'Have you been diagnosed with any autoimmune disorders?'
      ]
    },
    {
      heading: 'Routine Skincare', questions: [
        'Describe your daily skincare routine and the products you typically use.',
        'Are there any specific triggers that exacerbate your skin condition?'
      ]
    },
    {
      heading: 'Changes in Appearance', questions: [
        'Have you noticed any changes in the appearance of your skin, such as discoloration or new moles?',
        'Are there specific areas where the issue is more prominent?'
      ]
    },
    {
      heading: 'Effect on Daily Life', questions: [
        'How is the skin condition affecting your daily life and activities?',
        'Are there specific concerns or challenges you are facing?'
      ]
    }
  ];
  return (
    <div className='w-[650px] m-auto'>
      <Typography variant='h5' className='text-center my-[20px] text-brand-txt-1'>Please fill detail for booking</Typography>
      {allQnA.map((eachQNA, index) => {
        return (
          <Accordion key={eachQNA.heading} defaultExpanded={index === 0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
              className='font-bold'
            >
              {eachQNA.heading}
            </AccordionSummary>
            <AccordionDetails>
              <ol className='list-decimal ml-[30px]'>
                {eachQNA.questions.map((eachQuestion) => {
                  return (
                    <li key={eachQuestion} className='mb-[5px]'>
                      <div>
                        <div>{eachQuestion}</div>
                        <div><TextField size="small" /></div>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </AccordionDetails>
          </Accordion>
        );
      })}
      <div className='m-[auto] mt-[20px] mb-[50px]'>
        <Button variant='outlined' className='bg-brand-bg-1 text-brand-txt-1' onClick={() => setOpen(true)}>Submit</Button>
      </div>
    </div>
  );
}