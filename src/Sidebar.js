import React from 'react';
import { Sidebar as ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import './App.css'; // Assurez-vous que ce fichier contient vos styles

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh',width:'100vh' }} className="Sidebar">
      <ProSidebar style={{ width: '360px', backgroundColor:' #ecf0f1' }}>
        <h1 className='theme1'>Thèmes</h1>
        <Menu>
          <SubMenu label="Agrégats de la Comptabilité Nationale" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Agriculture et Élevage" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Climatologie" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Démographie" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Éducation" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Emploi" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Énergie" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="État Civil" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Évolution des Prix et Approvisionnement" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Finances Publiques" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Gouvernance" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Mines et Industrie" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Pauvreté et Conditions de Vie" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Pêche" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Santé" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>

          <SubMenu label="Transport et Communication" className="custom-submenu">
            <MenuItem className="custom-menuitem">Sous-élément 1</MenuItem>
            <MenuItem className="custom-menuitem">Sous-élément 2</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
