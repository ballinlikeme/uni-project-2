import React from "react";
import { LinearChart } from "components/pages/ReportsPage/Charts/LinearChart";
import {
  Box,
  Paper,
  Stack,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import { PieChart } from "components/pages/ReportsPage/Charts/PieChart";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import CircleIcon from "@mui/icons-material/Circle";
import { getRandomExpenseTips } from "utils/tips";

const articlesData = [
  {
    name: "Expense Management 101: Your Guide to Expense Reporting",
    link: "https://learn.g2.com/expense-management",
  },
  {
    name: "Expense Management: Definition, Types, Examples & Templates",
    link: "https://www.formpl.us/blog/expense-management",
  },
  {
    name: "The Ultimate Expense Management Guide for Businesses",
    link: "https://nanonets.com/blog/expense-management/",
  },
  {
    name: "Money Management: 4 Tips for Mastering Your Finances",
    link: "https://www.nerdwallet.com/article/finance/money-management",
  },
  {
    name: "Understanding Expense Management: A Comprehensive Guide",
    link: "https://www.procurify.com/blog/expense-management/",
  },
];

export const ReportsPage: React.FC = () => {
  return (
    <Box py={5}>
      <Paper elevation={3}>
        <Box p={2}>
          <Grid container>
            <Grid item xs={6}>
              <Stack gap={3} direction="column" flex="0 0 50%">
                <Typography variant="h6">Last Week</Typography>
                <LinearChart />
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack gap={3} direction="column" flex="0 0 50%">
                <Typography variant="h6">This month expenses</Typography>
                <PieChart />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Paper elevation={4} sx={{ mt: 3 }}>
        <Box p={2}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6">AI Assist</Typography>
              <Typography variant="subtitle1">
                Below there is a list of articles chosen by the AI to help you
                better understand the expense management:
              </Typography>
              <List>
                {articlesData.map((item) => (
                  <ListItem>
                    <ListItemIcon>
                      <LabelImportantIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Link href={item.link} target="_blank">
                        {item.name}
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
              <Typography variant="h6">
                We also offer AI based tips on how to manage your expsenses:
              </Typography>
              <List>
                {getRandomExpenseTips(10).map((item) => (
                  <ListItem>
                    <ListItemIcon>
                      <CircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};
