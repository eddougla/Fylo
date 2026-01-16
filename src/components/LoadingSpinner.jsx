function LoadingSpinner({ className = "", color = "border-white" }) {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`animate-spin rounded-full h-12 w-12 border-b-2 ${color}`}
      ></div>
    </div>
  );
}

export default LoadingSpinner;
