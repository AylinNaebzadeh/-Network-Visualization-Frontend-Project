import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import './App.css';
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { AiOutlineTable, AiOutlineAreaChart, AiOutlineBranches, AiOutlineRetweet } from "react-icons/ai";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import GeneralAnalysis from "./components/GeneralAnalysis";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
    <Sidebar className="app" style={{ position: 'sticky', top: 0}}>
      <Menu>
        <MenuItem
          className="menu1"
        >
          <h3>CDN Project</h3>
        </MenuItem>
        <MenuItem
          style={{ fontSize: 18}}
          component={<Link to="/" className="link" />}
          icon={<GridViewRoundedIcon />}
        >
          General Information
        </MenuItem>
        <MenuItem
          style={{ fontSize: 18}}
          component={<Link to="transactions" className="link" />}
          icon={<AiOutlineTable />}
        >
          Important Nodes
        </MenuItem>
        <MenuItem
          style={{ fontSize: 18}}
          component={<Link to="/" className="link" />}
          icon={<AiOutlineAreaChart />}
        >
          Charts
        </MenuItem>
        <MenuItem 
          style={{ fontSize: 18}}
          component={<Link to="/" className="link" />} 
          icon={<AiOutlineBranches />}
        >
          Label Classification
        </MenuItem>
        <MenuItem 
          style={{ fontSize: 18}}
          component={<Link to="/" className="link" />}
          icon={<AiOutlineRetweet />}
        >
          Epidemic Models
        </MenuItem>
      </Menu>
    </Sidebar>
    <section style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<GeneralAnalysis />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
      </Routes>
    </section>
  </div>
  );
}

export default App;
