import { BrowserRouter, Route, Routes } from "react-router-dom";
import WritePage from "../pages/Write";
import DetailPage from "../pages/Detail";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="write" element={<WritePage />} />
        <Route path="detail/:id" element={<DetailPage />} />
        <Route path="*" element={<div>페이지가 없습니다.</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
