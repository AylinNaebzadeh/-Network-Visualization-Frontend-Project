import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import './App.css';
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import { AiOutlineTable, AiOutlineAreaChart, AiOutlineBranches, AiOutlineRetweet } from "react-icons/ai";
import { Routes, Route, Link } from "react-router-dom";
import Charts from "./components/Charts";
import GeneralAnalysis from "./components/GeneralAnalysis";
import TopNodes from "./components/TopNodes";

function App() {
  const { collapseSidebar, collapsed } = useProSidebar();
  return (
    <div style={{ display: "flex", height: "100vh" }}>
    <Sidebar className="app" style={{
          position: 'fixed',
          width: collapsed ? 80 : 250,
          height: '100%',
        }}>
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
          component={<Link to="topnodes" className="link" />}
          icon={<AiOutlineTable />}
        >
          Important Nodes
        </MenuItem>
        <MenuItem
          style={{ fontSize: 18}}
          component={<Link to="charts" className="link" />}
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
        <Route path="topnodes" element={<TopNodes />} />
        <Route path="charts" element={<Charts />} />
      </Routes>
    </section>
  </div>
  );
}

export default App;
