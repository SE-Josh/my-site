# Project Agents.md Guide for OpenAI Codex

This Agents.md file provides comprehensive guidance for OpenAI Codex and other AI agents working with this codebase.

## Project Structure for OpenAI Codex Navigation

- `/app`: Next.js pages where OpenAI Codex can generate route handlers
- `/components`: React components that Agents.md helps OpenAI Codex understand
- `/public`: Static assets (OpenAI Codex should not modify these directly)
- `/tests`: Test files that OpenAI Codex should maintain and extend
- `/styles`: css files and styles

## Coding Conventions for OpenAI Codex

### General Conventions for Agents.md Implementation

- Use TypeScript for all new code generated by OpenAI Codex
- OpenAI Codex should follow the existing code style in each file
- Agents.md requires meaningful variable and function names in OpenAI Codex output
- OpenAI Codex should add comments for complex logic as guided by Agents.md

### React Components Guidelines for OpenAI Codex

- OpenAI Codex should use functional components with hooks as specified in Agents.md
- Keep components generated by OpenAI Codex small and focused
- Agents.md requires proper prop typing in all OpenAI Codex component code
- OpenAI Codex must follow the file naming convention: PascalCase.tsx

### CSS/Styling Standards for OpenAI Codex

- OpenAI Codex should use Tailwind CSS and daisyUI for styling as documented in Agents.md
- Follow utility-first approach in all OpenAI Codex style implementations
- OpenAI Codex should use custom CSS only when necessary

<!-- ## Testing Requirements for OpenAI Codex 

OpenAI Codex should run tests with the following commands:

```bash
# Run all tests with OpenAI Codex
npm test

# Run specific test file with OpenAI Codex
npm test -- path/to/test-file.test.ts

# Run tests with coverage for OpenAI Codex code
npm test -- --coverage
``` -->

## Pull Request Guidelines for OpenAI Codex

When OpenAI Codex helps create a PR, please ensure it:

1. Includes a clear description of the changes as guided by Agents.md
2. References any related issues that OpenAI Codex is addressing
3. Ensures all tests pass for code generated by OpenAI Codex
4. Includes screenshots for UI changes implemented with OpenAI Codex
5. Keeps PRs focused on a single concern as specified in Agents.md

## Programmatic Checks for OpenAI Codex

Before submitting changes generated by OpenAI Codex, run:

```bash
# Lint check for OpenAI Codex code
npm run lint

# Type check for OpenAI Codex TypeScript
npm run type-check

# Build check for OpenAI Codex implementations
npm run build
```

All checks must pass before OpenAI Codex generated code can be merged. Agents.md helps ensure OpenAI Codex follows these requirements.