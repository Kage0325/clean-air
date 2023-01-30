import { Accordion as MuiAccordian, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChevronDown } from 'react-feather';

const Accordion = styled(MuiAccordian)({
    '&:before': {
        display: 'none'
    }
});

interface CollapseProps {
    summary: string,
    details: any;
};

export const Collapse = (props: CollapseProps) => {
    const {
        summary,
        details
    } = props;

    return (
        <div>
            <Accordion
                elevation={0}
                disableGutters
                sx={{
                    backgroundColor: '#F5F5F5'
                }}
            >
                <AccordionSummary
                    expandIcon={
                        <ChevronDown />
                    }
                >
                    <Typography variant="subtitle1">
                        {summary}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                    >
                        {details}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};