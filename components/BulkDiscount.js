import React from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import CloseIcon from "@mui/icons-material/Close";

const discountTexts = [
  "15% discount for 5 orders",
  "20% discount for 10 orders",
  "25% discount for 20 orders",
  "30% discount for 30 orders",
];

function BulkDiscount() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        my={4}
        sx={{ flexWrap: "wrap" }}
      >
        <Typography variant="div" mr={1}>
          <FontAwesomeIcon icon={faLayerGroup} style={{ marginRight: 16 }} />
          Want to promote multiple websites?
        </Typography>

        <Button
          variant="reverse"
          color="primary"
          onClick={handleOpen}
          sx={{ minWidth: "285px" }}
        >
          See our Bulk Discount rates
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="bulk-discount-modal-title"
        aria-describedby="bulk-discount-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              backgroundColor: "background.paper",
              boxShadow: 24,
              p: 4,
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ position: "absolute", zIndex: 2, top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>
            <Typography
              id="bulk-discount-modal-title"
              variant="h4"
              component="h2"
              align="center"
              paragraph
            >
              Bulk Order & Save
            </Typography>
            <Typography
              id="bulk-discount-modal-description"
              my={2}
              align="center"
            >
              Buy multiple orders at once and enjoy the flexibility to kickstart
              them anytime you want. Our special offers are designed to help you
              save more when you buy more.
            </Typography>
            {discountTexts.map((text, index) => (
              <Typography
                key={index}
                variant="h6"
                component="div"
                align="center"
                mt={0}
              >
                {text}
              </Typography>
            ))}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={4}
            >
              <Button
                variant="main"
                color="primary"
                onClick={handleClose}
                my={2}
              >
                CONTACT US TO BULK ORDER
              </Button>
            </Box>
          </Box>
        </Container>
      </Modal>
    </Container>
  );
}

export default BulkDiscount;
