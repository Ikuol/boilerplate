"use client";

import styles from "@/styles";
import { integrations } from "@/constants";
import DisplayIntegration from "@/components/DisplayIntegration";

const Integrations = () => {
  return (
    <section className={`${styles.xPaddings} py-12 relative`}>
      <div
        className="container mx-auto flex flex-col
        items-center justify-center gap-y-10"
      >
        <h2 className="text-white text-6xl font-semibold">
          <span className="text-green">Integrations </span>
          to Boost
          <br />
          Your Workflow
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {integrations.map((integration) => (
            <DisplayIntegration key={integration.id} {...integration} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integrations;
