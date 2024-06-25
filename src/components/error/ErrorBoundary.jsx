import { useState, useEffect } from "react";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);

  const handleError = (error) => {
    setHasError(true);
    setError(error);
  };

  // Error handling in React using Error Boundary
  useEffect(() => {
    const handleErrorEvent = (errorEvent) => {
      handleError(errorEvent.error);
    };

    window.addEventListener("error", handleErrorEvent);
    window.addEventListener("unhandledrejection", handleErrorEvent);

    return () => {
      window.removeEventListener("error", handleErrorEvent);
      window.removeEventListener("unhandledrejection", handleErrorEvent);
    };
  }, []);

  if (hasError) {
    // Log the error to an error reporting service or handle it appropriately
    console.error("ErrorBoundary caught an error", error);
    // Redirect to the homepage on error
    window.location.replace("/not-found");
  }

  return children;
}

export default ErrorBoundary;
