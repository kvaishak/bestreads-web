const Loader = () => {
  const circleCommonClasses = "h-2.5 w-2.5 bg-current   rounded-full";
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "72vh",
  };

  return (
    <div>
      <div className="flex" style={containerStyle}>
        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-1 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  );
};

export default Loader;
