import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import UpdateProduct from '../product/UpdateProduct';

function AdminController() {
    return (
        <Box className="fCenter fCol my-2 mx-2">
            <Typography className="section-head my-2" variant="overline" fontSize="large">
                Product
            </Typography>

            <Accordion className='my-2' sx={{width:{xs:"100%",md:"60%"}}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6">Add Product</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='my-2' sx={{width:{xs:"100%",md:"60%"}}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h6">Update Product</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <UpdateProduct/>
                </AccordionDetails>
            </Accordion>
            <Accordion className='my-2' sx={{width:{xs:"100%",md:"60%"}}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant="h6">Delete Product</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Divider/>
            <Typography className="section-head my-2" variant="overline" fontSize="large">
                Categories
            </Typography>
            <Accordion className='my-2' sx={{width:{xs:"100%",md:"60%"}}}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6">Add Category</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default AdminController;