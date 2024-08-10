import { Routes, Route } from "react-router-dom";
import Billing from "../modules/Billing";
import CheckUpdates from "../modules/CheckUpdates";
import LiveView from "../modules/LiveView";
import Operation from "../modules/Operations";
import Settings from "../modules/Settings";
import OperationRouting from "../modules/operation-submodules/routing-operationmodules/route.js";
import SettingRouting from"../modules/setting-submodules/routing-settingmodules/route.js"
import ReportRouting from "../modules/report-submodules/routing-reportmodules/route.js";
const BillingDashboardRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/billing" element={<Billing />} />
        <Route path="/checkUpdates" element={<CheckUpdates />} />
        <Route path="/liveView" element={<LiveView />} />
        <Route path="/operation" element={<Operation />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <ReportRouting />
      <OperationRouting />
      <SettingRouting />
    </>
  );
};

export default BillingDashboardRouting;
