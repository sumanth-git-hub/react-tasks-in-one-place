import React from "react";
import { useTheme } from "../hooks/useTheme";
import ComponentsData from "../components/reuseComponents/ComponentsData";
import { CardsComponent } from "../components/reuseComponents/CardsComponent";

const ProjectsList = () => {
  const [darkMode] = useTheme();
  return (
    <section className={`w-full ${darkMode ? "darkModeActive" : ""}`}>
      <div className={`w-full max-w-6xl p-4 m-auto min-h-[calc(100vh-100px)]`}>
        <h2 className="mt-4 mb-8 text-center text-2xl font-bold">
          List of All Projects using{" "}
          <span className="text-[#F7E02C]">JavaScript&nbsp;</span>&amp;
          <span className="text-sky-400">&nbsp;React</span>
        </h2>
        <section className="project-card-container">
          {ComponentsData.map((item, index) => {
            return (
              <div key={item.componentId} className="w-1/4">
                <CardsComponent
                  projectName={item.componentName}
                  // productDescription = {item.builtWith}
                  urlSlug={item.componentUrl}
                  lazyLoadImage={item.componentImage}
                  altTag={item.componentName}
                />
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default ProjectsList;
