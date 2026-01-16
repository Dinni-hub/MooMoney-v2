import { useEffect, useState } from "react";
import { hasAccess, grantAccess } from "./utils/access";
import Blocked from "./pages/Blocked";

export default function App() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");

    if (hasAccess()) {
      setAllowed(true);
    } else if (key) {
      grantAccess();
      setAllowed(true);
      window.history.replaceState({}, "", "/");
    }
  }, []);

  if (!allowed) return <Blocked />;

  return (
    <div style={{ padding: 24 }}>
      <h1>Moo Money Budget Planner</h1>
      <p>Data tersimpan aman di device kamu.</p>
    </div>
  );
}
