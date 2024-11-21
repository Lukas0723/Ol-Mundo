import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "paginas/Post";
import SobreMim from "./paginas/SobreNos";
import Inicio from "./paginas/inicio";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/paginaPadrao";
import NaoEncontrada from "paginas/NaoEncontrada";
import ScrollToTop from "componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio/>} />
          <Route path="sobremim" element={<SobreMim/>} />
        </Route>
    
        <Route path="posts/:id/*" element= { <Post/> }/>
        <Route path="*" element={<NaoEncontrada />}/>
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;