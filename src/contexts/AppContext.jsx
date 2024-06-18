/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loader, setLoader] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const [isScrolled, setIsScrolled] = useState(false);

  // to handle scroll to sections
  function handleScrollTo(param) {
    const element = document.getElementById(param);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      navigate(`/#${param}`);
    }
  }

  //to handle podcast popup
  const [podcast, setPodcast] = useState(null);

  function handleToggleModal(item) {
    item ? setPodcast(item) : setPodcast(null);
  }
  return (
    <AppContext.Provider
      value={{
        currentPage,
        loader,
        navigate,
        scrollToTop,
        setIsScrolled,
        isScrolled,
        handleScrollTo,
        podcast,
        handleToggleModal,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
