const SkillsMockup = () => {
  return (
    <div className="mockup-code bg-base-100 text-base-content w-full h-full">
      <pre data-prefix="$">
        <code>{`const skillSet = {`}</code>
      </pre>

      <pre data-prefix=">" className="text-info">
        <code>{`  cloudPlatforms: [`}</code>
      </pre>
      <pre data-prefix=" " className="text-info">
        <code>{`    'Azure',`}</code>
      </pre>
      <pre data-prefix=" " className="text-info">
        <code>{`    'Google Cloud Platform'`}</code>
      </pre>
      <pre data-prefix="" className="text-info">
        <code>{`  ],`}</code>
      </pre>

      <pre data-prefix=">" className="text-warning">
        <code>{`  devOpsAndContainer: [`}</code>
      </pre>
      <pre data-prefix=" " className="text-warning">
        <code>{`    'Docker Foundations',`}</code>
      </pre>
      <pre data-prefix=" " className="text-warning">
        <code>{`    'Containerization',`}</code>
      </pre>
      <pre data-prefix=" " className="text-warning">
        <code>{`    'GitLab CI/CD',`}</code>
      </pre>
      <pre data-prefix="" className="text-warning">
        <code>{`  ],`}</code>
      </pre>

      <pre data-prefix=">" className="text-success">
        <code>{`  linuxAndCli: [`}</code>
      </pre>
      <pre data-prefix=" " className="text-success">
        <code>{`    'Linux System Administration',`}</code>
      </pre>
      <pre data-prefix=" " className="text-success">
        <code>{`    'CLI'`}</code>
      </pre>
      <pre data-prefix="" className="text-success">
        <code>{`  ],`}</code>
      </pre>

      <pre data-prefix=">" className="text-accent">
        <code>{`  frontend: [`}</code>
      </pre>
      <pre data-prefix=" " className="text-accent">
        <code>{`    'React / Next / React Native / Vue',`}</code>
      </pre>
      <pre data-prefix=" " className="text-accent">
        <code>{`    'TypeScript',`}</code>
      </pre>
      <pre data-prefix=" " className="text-accent">
        <code>{`    'GraphQL'`}</code>
      </pre>
      <pre data-prefix="" className="text-accent">
        <code>{`  ],`}</code>
      </pre>

      <pre data-prefix=">" className="text-primary">
        <code>{`  backend: ['Node.js'],`}</code>
      </pre>

      <pre data-prefix="$">
        <code>{`};`}</code>
      </pre>
    </div>
  );
};

export default SkillsMockup;
