import type { FC } from "react";

const SkillsMockup: FC = () => {
  return (
    <div className="mockup-code bg-base-200">
      <pre data-prefix="$">
        <code>{`const skillSet = {`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-warning">
        <code>{`  languages: ['TypeScript', 'Python']`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-success">
        <code>{`  frameworks: ['Next.js', 'React']`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-info">
        <code>{`  tools: ['Docker', 'GitHub']`}</code>
      </pre>
      <pre data-prefix="$">
        <code>{`};`}</code>
      </pre>
    </div>
  );
};

export default SkillsMockup;
