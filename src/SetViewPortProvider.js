export default function SetViewPortProvider({ component, height }) {
  return <div style={{ height, position: "relative" }}>{component()}</div>;
}

SetViewPortProvider.defaultProps = {
  height: "100vh",
};
