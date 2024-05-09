import { useMatch } from "react-router-dom";

const useActiveRoute = (path) => {
  const matched = useMatch(path);
  return matched;
};

export default useActiveRoute;
