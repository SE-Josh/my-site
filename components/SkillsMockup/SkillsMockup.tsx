import type { FC } from "react";

const SkillsMockup: FC = () => {
  return (
    <div className="mockup-code bg-base-100 text-base-content w-full">
      <pre data-prefix="$">
        <code>{`const skillSet = {`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-primary">
        <code>{`  languages: ['TypeScript', 'Python']`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-secondary">
        <code>{`  frameworks: ['Next.js', 'React']`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-accent">
        <code>{`  tools: ['Docker', 'GitHub']`}</code>
      </pre>
      <pre data-prefix="$">
        <code>{`};`}</code>
      </pre>
    </div>
  );
};

export default SkillsMockup;
