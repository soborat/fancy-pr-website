import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Modal,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import cardsData from "../data/cardsData";
import tableData from "../data/outlets";
import loadable from "@loadable/component";
import stats from "../data/countUpNumbers";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

const CountUp = loadable(() => import("react-countup"), {
  ssr: false,
});

function Readers() {
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container id="news-sites">
      <Typography variant="h2" gutterBottom align="center">
        Millions of Readers
      </Typography>
      <Container maxWidth="md">
        <Typography variant="body1" gutterBottom align="center">
          Profit from the large following and trust our linked news sites have
          gathered over many years. Our growing set of news sites ranks high on
          Google, giving you quality visits.
        </Typography>
      </Container>

      <Grid container spacing={3} mb={6} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h4" align="center" sx={{ fontSize: "40px" }}>
            <CountUp end={stats[0].number} duration={2} />
          </Typography>
          <Typography variant="subtitle1" align="center">
            {stats[0].label}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" align="center" sx={{ fontSize: "30px" }}>
            <CountUp end={stats[1].number} duration={2} />
          </Typography>
          <Typography variant="subtitle1" align="center">
            {stats[1].label}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h5" align="center" sx={{ fontSize: "30px" }}>
            <CountUp end={stats[2].number} duration={2} />
          </Typography>
          <Typography variant="subtitle1" align="center">
            {stats[2].label}
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        mt={4}
      >
        {cardsData
          .slice(0, isSmallScreen ? 4 : cardsData.length)
          .map((data, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  boxShadow: "0 25px 70px rgba(0,0,0,.07)",
                  borderRadius: "10px",
                }}
              >
                <CardContent>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p={4}
                  >
                    <Image
                      src={data.logo}
                      alt="News logo"
                      width={170}
                      height={35}
                    />
                  </Box>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "bold",
                          color: "main",
                        }}
                      >
                        {data.visitors}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: 13,
                        }}
                      >
                        Visitors
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="body1"
                        align="right"
                        sx={{
                          fontWeight: "bold",
                          color: "main",
                        }}
                      >
                        {data.authority}
                      </Typography>
                      <Typography
                        variant="body1"
                        align="right"
                        sx={{
                          fontSize: 13,
                        }}
                      >
                        Authority
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
        <Button
          variant="main"
          color="primary"
          onClick={handleOpen}
          sx={{ marginTop: "1rem" }}
        >
          SEE THE FULL LIST
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
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
            <Typography id="modal-modal-title" variant="h2" align="center">
              Included News Sites
            </Typography>
            <Typography id="modal-modal-description" align="center" mt={4}>
              We are continually updating our news networks and improving them
              over time. Here are the news sites we are currently partnered
              with. Click any of the stats listed below to verify them with
              third parties.
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Popular News Network Outlet
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Domain Authority
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Moz Rank</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Global Rank
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Social Followers
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Monthly Readers
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.outlet}>
                      <TableCell>{row.outlet}</TableCell>
                      <TableCell>{row.authority}</TableCell>
                      <TableCell>{row.moz}</TableCell>
                      <TableCell>{row.global}</TableCell>
                      <TableCell>{row.social}</TableCell>
                      <TableCell>{row.readers}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Modal>
    </Container>
  );
}

export default Readers;
