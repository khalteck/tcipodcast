import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OfflineRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkOnlineStatus = () => {
      if (!navigator.onLine) {
        navigate("/offline");
      }
    };

    // Check the online status initially
    checkOnlineStatus();

    // Add event listeners for online and offline status
    window.addEventListener("online", checkOnlineStatus);
    window.addEventListener("offline", checkOnlineStatus);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", checkOnlineStatus);
      window.removeEventListener("offline", checkOnlineStatus);
    };
  }, [navigate]);

  return null; // This component doesn't render anything
};

export default OfflineRedirect;
