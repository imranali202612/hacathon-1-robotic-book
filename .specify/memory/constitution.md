<!--
  Sync Impact Report
  ==================
  Version: 0.1.0 → 1.0.0
  Rationale: Initial constitution establishment (MAJOR version as this is the first complete version)

  Modified Principles:
  - Created I. Spec-First Development (new)
  - Created II. No Hallucination Tolerance (new)
  - Created III. RAG Strict Context Boundaries (new)
  - Created IV. Test-Driven Development (new)
  - Created V. Modular Architecture (new)
  - Created VI. Typed Interfaces (new)
  - Created VII. Reproducibility (new)

  Added Sections:
  - Core Principles (complete)
  - Technology Stack (new)
  - Quality Gates (new)
  - Governance (complete)

  Templates Status:
  ✅ spec-template.md — Aligns with Spec-First and typed requirements
  ✅ plan-template.md — Constitution Check section supports principle validation
  ✅ tasks-template.md — TDD and modular task structure supported

  Follow-up TODOs: None
-->

# Physical AI Book with Embedded RAG — Constitution

## Core Principles

### I. Spec-First Development

Every feature, behavior, and interface MUST be defined in a specification before implementation.

- All work starts with `/sp.specify` to create or update `spec.md`
- Requirements MUST be technology-agnostic and user-centric
- User stories MUST be prioritized (P1, P2, P3...) and independently testable
- No implementation without prior specification
- Specifications are living documents — update when requirements change

**Rationale**: Prevents scope creep, ensures shared understanding, enables parallel work, and creates a verifiable contract between intent and implementation.

### II. No Hallucination Tolerance

AI agents MUST NEVER generate content, data, or code from internal knowledge without external verification.

- All information MUST come from specifications, MCP tools, CLI commands, or explicit user input
- When uncertain: ASK the user or CHECK authoritative sources
- Document all assumptions explicitly in specs and plans
- If data/API/schema is unknown: mark `NEEDS CLARIFICATION` — never invent
- Validate every claim against current project state

**Rationale**: Hallucinations create bugs, false confidence, and technical debt. Truth and accuracy are non-negotiable.

### III. RAG Strict Context Boundaries

The embedded chatbot MUST ONLY answer from indexed book content or user-selected text.

- **Global mode**: Queries answered ONLY from full book index in Qdrant
- **Selected-text mode**: Queries answered ONLY from highlighted text context — global index MUST NOT be accessed
- Out-of-scope queries (e.g., "What is Python?") MUST be refused with: "I can only answer questions about the content of this book."
- No fallback to general knowledge, no external web searches
- Retrieval sources MUST be traceable (chunk IDs, page references)

**Rationale**: Ensures readers get accurate, book-specific answers. Prevents misinformation and maintains trust.

### IV. Test-Driven Development (NON-NEGOTIABLE)

Features MUST follow Red-Green-Refactor cycle when tests are specified.

- If the feature spec requests tests: Write tests → Verify they FAIL → Implement → Verify they PASS → Refactor
- Contract tests for API boundaries (endpoints, library interfaces)
- Integration tests for multi-component workflows (RAG pipeline, ingestion)
- Tests must be executable, automated, and version-controlled
- Manual testing is acceptable ONLY when automated testing is infeasible (e.g., UI/UX validation)

**Rationale**: Tests define success criteria, catch regressions early, and document behavior. TDD ensures we build what was specified.

### V. Modular Architecture

Systems MUST be composed of loosely coupled, independently deployable modules.

- Each module has a single, well-defined responsibility
- Clear interface boundaries (REST APIs, typed Python/TypeScript modules)
- Modules communicate through contracts defined in `contracts/` directory
- Backend services are stateless, horizontally scalable
- Frontend components are self-contained with explicit dependencies

**Rationale**: Modularity enables parallel development, easier testing, independent scaling, and simplified debugging.

### VI. Typed Interfaces

All data contracts, APIs, and module boundaries MUST use explicit type definitions.

- Backend: Pydantic models for all request/response schemas
- Frontend: TypeScript interfaces for all data structures
- Database: Explicit schema definitions with migrations
- Vector store: Typed metadata schemas
- No `any`, `object`, or untyped dictionaries at boundaries

**Rationale**: Types catch errors at compile time, serve as living documentation, and enable safe refactoring.

### VII. Reproducibility

The entire system MUST be reproducible from specifications and version control alone.

- All configuration via environment variables (`.env.example` provided)
- Infrastructure as Code: Docker Compose, deploy scripts
- Seed data and migration scripts included
- No manual setup steps that aren't scripted
- `quickstart.md` MUST enable zero-to-running in under 10 minutes

**Rationale**: Reproducibility ensures onboarding speed, disaster recovery, and confidence in deployments.

## Technology Stack

### Book Platform
- **Static Site Generator**: Docusaurus (React-based, MDX support)
- **Content Format**: MDX (Markdown + JSX components)
- **Deployment**: GitHub Pages (CI/CD via GitHub Actions)

### RAG Chatbot Backend
- **API Framework**: FastAPI (Python 3.11+, async/await)
- **Vector Database**: Qdrant Cloud (free tier, managed service)
- **Relational Database**: Neon Serverless Postgres (conversations, metadata)
- **AI Orchestration**: OpenAI Agents API (function calling, streaming)
- **Embedding Model**: OpenAI `text-embedding-3-small` (cost-optimized)

### RAG Chatbot Frontend
- **UI Library**: OpenAI ChatKit (React-based chat components)
- **State Management**: React hooks + Context API
- **API Client**: Fetch API with TypeScript types

### Development & Deployment
- **Containerization**: Docker + Docker Compose
- **CI/CD**: GitHub Actions (test, build, deploy)
- **Secrets Management**: Environment variables (`.env` + GitHub Secrets)

### Constraints
- Backend MUST support async operations (FastAPI async def)
- Vector DB MUST remain within Qdrant Cloud free tier limits
- Postgres MUST use Neon's serverless architecture (no persistent connections)
- Frontend MUST be embeddable in Docusaurus via React component

## Quality Gates

All features MUST pass these gates before merge:

### 1. Specification Gate
- [ ] Feature has a complete `spec.md` with user stories, acceptance criteria, and success metrics
- [ ] All `NEEDS CLARIFICATION` items resolved
- [ ] User stories prioritized and independently testable

### 2. Architecture Gate
- [ ] `plan.md` exists with technical context, structure, and interface contracts
- [ ] Complexity justifications provided for any Constitution violations
- [ ] Data models and API contracts defined in `data-model.md` and `contracts/`

### 3. Implementation Gate
- [ ] All tasks in `tasks.md` completed
- [ ] Code follows typed interface principle (Pydantic/TypeScript types at boundaries)
- [ ] No hardcoded secrets or credentials
- [ ] Error handling for all failure modes

### 4. Testing Gate
- [ ] Tests written BEFORE implementation (if tests specified)
- [ ] All tests passing (contract, integration, or manual validation)
- [ ] Edge cases covered (empty state, invalid input, network errors)

### 5. Documentation Gate
- [ ] `quickstart.md` updated if setup steps changed
- [ ] API contracts documented in `contracts/`
- [ ] Inline code comments for non-obvious logic only

### 6. Deployment Gate
- [ ] Changes reproducible from clean environment
- [ ] Environment variables documented in `.env.example`
- [ ] No breaking changes to existing APIs without migration plan

## Governance

### Amendment Procedure
1. Propose change via PR to `.specify/memory/constitution.md`
2. Document rationale in PR description (why needed, alternatives considered)
3. Update dependent templates (spec, plan, tasks) in same PR
4. Increment version following semantic versioning:
   - **MAJOR**: Breaking changes (remove/redefine principles)
   - **MINOR**: Additive changes (new principles/sections)
   - **PATCH**: Clarifications, typos, formatting

### Version Policy
- Constitution version tracked in this file (header and footer)
- All specs, plans, and tasks MUST reference current constitution version
- Agents MUST validate compliance against constitution during planning

### Compliance Review
- Every `/sp.plan` MUST include a "Constitution Check" section
- Violations MUST be justified in "Complexity Tracking" table
- Unjustified violations block implementation (return to spec/plan phase)
- Use `.specify/templates/plan-template.md` Constitution Check as reference

### Architectural Decision Records (ADR)
- ADRs are SUGGESTED (not auto-created) when significant decisions are made
- Trigger ADR suggestion when: Impact is long-term + Multiple alternatives exist + Decision is cross-cutting
- Suggestion format: "📋 Architectural decision detected: [brief]. Document? Run `/sp.adr [title]`"
- Never create ADRs without explicit user consent

**Version**: 1.0.0 | **Ratified**: 2025-12-18 | **Last Amended**: 2025-12-18
