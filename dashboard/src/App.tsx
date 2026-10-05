import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import { AppShell } from "./components/layout/AppShell";
import OverviewPage from "./pages/OverviewPage";
import SkuDetailPage from "./pages/SkuDetailPage";
import ComparePage from "./pages/ComparePage";
import DailyRadarPage from "./pages/DailyRadarPage";
import OpportunityRadarPage from "./pages/OpportunityRadarPage";
import HanlinPage from "./pages/HanlinPage";
import SupplyChainPage from "./pages/SupplyChainPage";
import DecisionLogPage from "./pages/DecisionLogPage";
import DataManagePage from "./pages/DataManagePage";

export default function App() {
  return (
    <DataProvider>
      <HashRouter>
        <AppShell>
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/sku/:id" element={<SkuDetailPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/daily" element={<DailyRadarPage />} />
            <Route path="/radar" element={<OpportunityRadarPage />} />
            <Route path="/hanlin" element={<HanlinPage />} />
            <Route path="/supply" element={<SupplyChainPage />} />
            <Route path="/log" element={<DecisionLogPage />} />
            <Route path="/data" element={<DataManagePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppShell>
      </HashRouter>
    </DataProvider>
  );
}
