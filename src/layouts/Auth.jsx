import AuthBg from "../../public/AuthBg.svg";
import { ToastContainer } from "react-toastify";

function Auth({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <ToastContainer />
      <div className="w-full bg-black justify-center items-center lg:flex hidden">
        <img src={AuthBg} alt="Gambar" className="h-full w-full" />
      </div>
      <div className="bg-white lg:w-2/3 w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}

export default Auth;
