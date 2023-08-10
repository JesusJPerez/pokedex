import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../shared/Header";

const ProtectedRoutes = () => {

  const trainer = useSelector((reducer) => reducer.trainer);

  if (trainer.length >= 3) {
    return (
      <>
      <Header/>
      <Outlet/>
      </>
    )
  } else {
    <Navigate to='/' />
  }
    
};

export default ProtectedRoutes;