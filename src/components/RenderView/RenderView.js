const RenderView = ({ renderIfTrue, children }) => {
  return renderIfTrue ? <>{children}</> : null;
};

export default RenderView;
