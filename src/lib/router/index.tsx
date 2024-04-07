import { Layout } from "components/common/Layout/Layout";
import { DashboardPage } from "pages/DashboardPage";
import { ReportsPage } from "pages/ReportsPage";
import { TransactionsPage } from "pages/TransactionsPage";
import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

export enum AppRoutes {
  DASHBOARD = "/",
  REPORTS = "/reports",
  TRANSACTIONS = "/transactions",
}

type AppRoute = {
  path: AppRoutes;
  component: ReactNode;
};

const routes: AppRoute[] = [
  {
    path: AppRoutes.DASHBOARD,
    component: (
      <Layout>
        <DashboardPage />
      </Layout>
    ),
  },
  {
    path: AppRoutes.REPORTS,
    component: (
      <Layout>
        <ReportsPage />
      </Layout>
    ),
  },
  {
    path: AppRoutes.TRANSACTIONS,
    component: (
      <Layout>
        <TransactionsPage />
      </Layout>
    ),
  },
];

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};
