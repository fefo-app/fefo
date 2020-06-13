import React, { useState } from "react";
import "./App.css";
import { ToggleDashboard } from "@fefo-app/toggl-dashboard";
import { Menu, TodoSection } from "./components";
import { BrowserStore } from "@fefo-app/toggl-dashboard/dist";
import { Section } from "./types";

function App() {
  const storedActiveSection = BrowserStore.get("fefo:active-section");
  const [activeSection, setSection] = useState(
    (storedActiveSection as Section) || Section.ToggleDashboard
  );
  const storeSection = (section: Section) => {
    BrowserStore.set("fefo:active-section", section);
    setSection(section);
  };

  return (
    <div className="App">
      <Menu activeSection={activeSection} onSectionChange={storeSection} />
      <main>
        {activeSection === Section.TodoApp && <TodoSection />}
        {activeSection === Section.ToggleDashboard && <ToggleDashboard />}
      </main>
    </div>
  );
}

export default App;
