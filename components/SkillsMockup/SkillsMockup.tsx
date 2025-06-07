import type { FC } from "react";

const SkillsMockup: FC = () => {
  return (
    <div className="mockup-code bg-base-100 text-base-content w-full">
      <pre data-prefix="$">
        <code>{`const skillSet = {`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-primary">
        <code>{`  solutions: ['IoT', 'AI']`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-secondary">
        <code>{`  messaging: ['MQTT', 'Kafka']`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-accent">
        <code>{`  aiot: ['EdgeX', 'Azure IoT']`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-info">
        <code>{`  security: ['OAuth2', 'JWT']`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-success">
        <code>{`  cloud: ['AWS', 'Azure']`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-warning">
        <code>{`  documentation: ['Markdown', 'Swagger']`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-info">
        <code>{`  workflow: ['Jira', 'Trello']`}</code>
      </pre>
      <pre data-prefix="&gt;" className="text-success">
        <code>{`  ciCd: ['GitHub Actions', 'GitLab CI']`}</code>
      </pre>
      <pre data-prefix="$">
        <code>{`};`}</code>
      </pre>
    </div>
  );
};

export default SkillsMockup;
