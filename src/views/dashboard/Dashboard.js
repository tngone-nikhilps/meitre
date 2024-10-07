import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import PageContainer from "src/components/container/PageContainer";

// components
import SalesOverview from "./components/SalesOverview";
import YearlyBreakup from "./components/YearlyBreakup";
import RecentTransactions from "./components/RecentTransactions";
import ProductPerformance from "./components/ProductPerformance";
import Blog from "./components/Blog";
import MonthlyEarnings from "./components/MonthlyEarnings";
import ChartPage from "./components/chartPage";
import { Stack } from "@mui/system";
import {
  CalendarMonth,
  Fullscreen,
  PanTool,
  Search,
  ZoomIn,
} from "@mui/icons-material";
import ChartFullScreen from "../../components/modals/chartFullScrn";

const Dashboard = () => {
  const [filterValue, setFilterValue] = useState("Jan 18 - Jan 29");
  const [filterValue2, setFilterValue2] = useState("");
  const [fullScrnOpen, setFullScrnOpen] = useState(false);
  const [selectedChartId, setSelectedChartId] = useState("");
  const [chartHeight, setChartHeight] = useState("");
  const [fullScrnCutting, setFullScrnCutting] = useState(0);
  const chartDataCards = [
    {
      chartId: "9f731d80-4ce4-477f-8bf4-ea3f29928830",
      title: "total number of users",
    },
    {
      chartId: "c2c56a82-19a2-40e4-98be-4c10735aeacd",
      title: "total number of locket ambassadors",
    },
    {
      chartId: "62d995b4-c7ca-43fe-86d3-346042e73dbd",
      title: "total images shared",
    },
    {
      chartId: "b982ac02-5626-409b-b009-1bb5ed9007c9",
      title: "Total images in trash",
    },
  ];

  return (
    <>
      <ChartFullScreen
        id={selectedChartId}
        open={fullScrnOpen}
        setOpen={setFullScrnOpen}
        height={chartHeight}
        screenCutting={fullScrnCutting}
      ></ChartFullScreen>
      <PageContainer title="Dashboard" description="this is Dashboard">
        <Box
          width={"100%"}
          height={"70px"}
          sx={{ background: "white" }}
          display={"flex"}
          alignItems={"center"}
          px={"20px"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>
              Dashboard
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Box>
              {" "}
              <Typography>Today</Typography>
            </Box>
            <Box>
              <Typography sx={{ width: "70px" }}>This Week</Typography>
            </Box>
            <Box>
              <Typography sx={{ width: "80px" }}>This month</Typography>
            </Box>
            <Box>
              <Typography sx={{ width: "70px" }}>This year</Typography>
            </Box>

            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  top: "-5px !important",
                }}
              ></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue}
                label=""
                readOnly
                onChange={(e) => setFilterValue(e.target.value)}
                sx={{
                  height: "40px",
                  borderRadius: "10px",
                  width: "200px",
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <CalendarMonth></CalendarMonth>
                  </InputAdornment>
                }
              >
                <MenuItem value={"Jan 18 - Jan 29"}>Jan 18 - Jan 29</MenuItem>
                <MenuItem value={"Total image in trash"}>
                  Total image in trash
                </MenuItem>
                <MenuItem value={"Total images shared"}>
                  Total images shared
                </MenuItem>
                <MenuItem value={"Total User count"}>Total User count</MenuItem>
                <MenuItem value={"appointment count"}>
                  appointment count
                </MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  top: "-5px !important",
                }}
              >
                Project Name
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={filterValue2}
                label="Graph Name"
                onChange={(e) => setFilterValue2(e.target.value)}
                sx={{
                  height: "40px",
                  borderRadius: "10px",
                  width: "200px",
                }}
              >
                <MenuItem value={"Opscape"}>Opscape</MenuItem>
                <MenuItem value={"GT"}>GT</MenuItem>
                <MenuItem value={"OMC"}>OMC</MenuItem>
                <MenuItem value={"Locket"}>Locket</MenuItem>
                <MenuItem value={"Ordering System"}>Ordering System</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          sx={{ width: "100%" }}
        >
          <TextField
            sx={{
              width: "60%",
              height: "50px",

              marginTop: "20px",
              marginBottom: "20px",
              backgroundColor: "white",
              borderRadius: "50px !important",
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
              },
            }}
            placeholder="What would you like to know? (e.g., ‘Patient admissions this week’)"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search></Search>
                </InputAdornment>
              ),
              borderRadius: "50px",
            }}
          ></TextField>
        </Stack>
        <Grid container spacing={3} px={"30px"}>
          {chartDataCards.map((item) => (
            <Grid item xs={3}>
              <ChartPage chartId={item.chartId} height={"100px"}></ChartPage>
            </Grid>
          ))}

          <Grid item xs={8} position={"relative"}>
            <Box
              position={"absolute"}
              sx={{
                cursor: "pointer",
              }}
              right={"10px"}
              top={"30px"}
              zIndex={999}
              onClick={() => {
                setFullScrnOpen(true);
                setSelectedChartId("ed4916d3-d8da-4eb5-9fce-5ce68442c59b");
                setChartHeight("500px");
                setFullScrnCutting(12);
              }}
            >
              <Fullscreen></Fullscreen>
            </Box>
            <ChartPage
              chartId={"ed4916d3-d8da-4eb5-9fce-5ce68442c59b"}
              height={"400px"}
            ></ChartPage>
          </Grid>
          <Grid item xs={4} position={"relative"}>
            <Box
              position={"absolute"}
              sx={{
                cursor: "pointer",
              }}
              right={"10px"}
              top={"30px"}
              zIndex={999}
              onClick={() => {
                setFullScrnOpen(true);
                setSelectedChartId("650b1083-0f71-483e-a5b5-0993bdc293ae");
                setChartHeight("500px");
                setFullScrnCutting(6);
              }}
            >
              <Fullscreen></Fullscreen>
            </Box>
            <ChartPage
              chartId={"650b1083-0f71-483e-a5b5-0993bdc293ae"}
              height={"400px"}
            ></ChartPage>
          </Grid>
          <Grid item xs={6.5} position={"relative"}>
            <Box
              position={"absolute"}
              sx={{
                cursor: "pointer",
              }}
              right={"10px"}
              top={"30px"}
              zIndex={999}
              onClick={() => {
                setFullScrnOpen(true);
                setSelectedChartId("db968bfb-8411-4102-b83f-a3bedfb982dd");
                setChartHeight("500px");
                setFullScrnCutting(12);
              }}
            >
              <Fullscreen></Fullscreen>
            </Box>
            <ChartPage
              chartId={"db968bfb-8411-4102-b83f-a3bedfb982dd"}
              height={"400px"}
            ></ChartPage>
          </Grid>
          <Grid item xs={5.5} position={"relative"}>
            <Box
              position={"absolute"}
              sx={{
                cursor: "pointer",
              }}
              right={"10px"}
              top={"30px"}
              zIndex={999}
              onClick={() => {
                setFullScrnOpen(true);
                setSelectedChartId("3e638f0a-87f8-43fa-ac70-5c6908f3f0e1");
                setChartHeight("500px");
                setFullScrnCutting(12);
              }}
            >
              <Fullscreen></Fullscreen>
            </Box>
            <ChartPage
              chartId={"3e638f0a-87f8-43fa-ac70-5c6908f3f0e1"}
              height={"400px"}
            ></ChartPage>
          </Grid>
          <Grid item xs={6} position={"relative"}>
            <Box
              position={"absolute"}
              sx={{
                cursor: "pointer",
              }}
              right={"10px"}
              top={"30px"}
              zIndex={999}
              onClick={() => {
                setFullScrnOpen(true);
                setSelectedChartId("674d6f29-e96b-4e8a-8999-407a1617bb51");
                setChartHeight("500px");
                setFullScrnCutting(12);
              }}
            >
              <Fullscreen></Fullscreen>
            </Box>
            <ChartPage
              chartId={"674d6f29-e96b-4e8a-8999-407a1617bb51"}
              height={"400px"}
            ></ChartPage>
          </Grid>
          <Grid item xs={6} position={"relative"}>
            <Box
              position={"absolute"}
              sx={{
                cursor: "pointer",
              }}
              right={"10px"}
              top={"30px"}
              zIndex={999}
              onClick={() => {
                setFullScrnOpen(true);
                setSelectedChartId("64de1141-d0af-4044-94a4-f1fca800ef19");
                setChartHeight("500px");
                setFullScrnCutting(12);
              }}
            >
              <Fullscreen></Fullscreen>
            </Box>
            <ChartPage
              chartId={"64de1141-d0af-4044-94a4-f1fca800ef19"}
              height={"400px"}
            ></ChartPage>
          </Grid>
          <Grid item xs={9} position={"relative"}>
            <Box
              position={"absolute"}
              sx={{
                cursor: "pointer",
              }}
              right={"10px"}
              top={"30px"}
              zIndex={999}
              onClick={() => {
                setFullScrnOpen(true);
                setSelectedChartId("341c56d1-34b4-4597-ba79-471f1711c692");
                setChartHeight("500px");
                setFullScrnCutting(12);
              }}
            >
              <Fullscreen></Fullscreen>
            </Box>
            <ChartPage
              chartId={"341c56d1-34b4-4597-ba79-471f1711c692"}
              height={"450px"}
            ></ChartPage>
          </Grid>

          <Grid item xs={9} position={"relative"}>
            <Box
              position={"absolute"}
              sx={{
                cursor: "pointer",
              }}
              right={"10px"}
              top={"30px"}
              zIndex={999}
              onClick={() => {
                setFullScrnOpen(true);
                setSelectedChartId("26494bf5-634f-4c37-a4e0-107550a8098c");
                setChartHeight("500px");
                setFullScrnCutting(9);
              }}
            >
              <Fullscreen></Fullscreen>
            </Box>
            <ChartPage
              chartId={"26494bf5-634f-4c37-a4e0-107550a8098c"}
              height={"500px"}
            ></ChartPage>
          </Grid>
        </Grid>
      </PageContainer>
    </>
  );
};

export default Dashboard;
