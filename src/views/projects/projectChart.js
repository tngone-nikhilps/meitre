import React from "react";
import { Grid, Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import { useParams } from "react-router";
import ChartPage from "../dashboard/components/chartPage";

const ProjectChart = () => {
  const { id } = useParams();
  console.log(id, "chartId");
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <Grid container spacing={3} p={"50px"}>
        <Grid item xs={6}>
          <ChartPage chartId={id} height={"400px"}></ChartPage>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default ProjectChart;
