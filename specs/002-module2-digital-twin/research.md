---
id: 002-research
title: Research & Technology Decisions - Module 2
date: 2025-12-18
---

# Research: Module 2 - The Digital Twin (Gazebo & Unity)

## Decision Summary

This document records all technology and content structure decisions for Module 2.

---

## Decision 1: Content Format

**Question**: Should Module 2 use Markdown (`.md`) or MDX (`.mdx`)?

**Options Considered**:
1. Markdown (`.md`) - Simple, consistent with Module 1
2. MDX (`.mdx`) - Allows React components, interactive elements

**Decision**: Use Markdown (`.md`)

**Rationale**:
- Consistency with Module 1
- User explicitly requested `.md` format in initial spec
- Conceptual content doesn't require React interactivity
- Simpler to author and maintain

**Trade-offs**:
- ✅ Consistency, simplicity, maintainability
- ❌ No interactive simulation visualizations (out of scope anyway)

---

## Decision 2: Gazebo vs Gazebo Ignition Coverage

**Question**: Should we cover Gazebo Classic, Gazebo Ignition, or both?

**Options Considered**:
1. Focus on Gazebo Classic (older, more tutorials available)
2. Focus on Gazebo Ignition/Fortress (newer, future-proof)
3. Cover both with explicit comparison

**Decision**: Focus on timeless physics simulation concepts; mention both as "Gazebo" generically

**Rationale**:
- User Story 1 asks for "physics simulation" understanding, not tool-specific tutorials
- Gazebo ecosystem is transitioning (Classic → Ignition → Harmonic)
- Conceptual focus avoids version-specific obsolescence

**Trade-offs**:
- ✅ Content remains relevant as Gazebo evolves
- ✅ Focus on transferable knowledge (physics engines, not UI buttons)
- ❌ Learners won't know which Gazebo version to install (OK, installation out of scope)

---

## Decision 3: Unity Coverage Depth

**Question**: How deeply should we cover Unity for robotics?

**Options Considered**:
1. Brief mention (1 paragraph)
2. Full chapter (equal weight to Gazebo)
3. Hybrid: Conceptual chapter focused on "when to use Unity"

**Decision**: Full chapter (Chapter 2) focused on Unity's complementary role

**Rationale**:
- User's plan explicitly requests a Unity chapter
- Unity is increasingly used for photorealistic vision AI training (important use case)
- Humanoid robots often interact with humans (Unity excels at human environments)
- Clear differentiation helps learners choose the right tool

**Trade-offs**:
- ✅ Learners understand when Unity is appropriate
- ✅ Covers vision-based AI use case (critical for humanoids)
- ❌ May seem tangential if learner only cares about Gazebo (mitigated by modular chapters)

---

## Decision 4: Sensor Simulation Scope

**Question**: Which sensors should Chapter 3 cover?

**Options Considered**:
1. Only cameras (most common for AI)
2. Cameras + LiDAR + IMU (core humanoid sensors)
3. Exhaustive list (force-torque, tactile, etc.)

**Decision**: Focus on cameras, LiDAR, IMU, and joint encoders

**Rationale**:
- These 4 sensor types cover 90% of humanoid robot perception
- User Story 3 explicitly mentions LiDAR, depth cameras, IMUs
- Exhaustive coverage would dilute focus

**Sensors Included**:
- **RGB Cameras**: Object detection, scene understanding
- **Depth Cameras**: 3D perception, obstacle detection
- **LiDAR**: Long-range mapping, SLAM
- **IMU**: Balance, orientation estimation
- **Joint Encoders**: Proprioception (robot's internal state)

**Trade-offs**:
- ✅ Focused, actionable content
- ❌ Advanced sensors (tactile, force-torque) not covered (acceptable for introductory module)

---

## Decision 5: Mermaid Diagrams vs Images

**Question**: Should we use Mermaid diagrams or static images for visual aids?

**Options Considered**:
1. Mermaid diagrams (text-based, version-controlled)
2. External images (PNG/SVG)
3. Hybrid (Mermaid for simple diagrams, images for complex ones)

**Decision**: Use Mermaid diagrams (consistent with Module 1)

**Rationale**:
- Module 1 successfully used Mermaid
- Text-based diagrams are easier to review in PRs
- No need to manage image assets
- Mermaid already configured in Docusaurus

**Trade-offs**:
- ✅ Easy to version control and review
- ✅ Consistent with Module 1 style
- ❌ Mermaid limited for complex architectural diagrams (acceptable, keep diagrams simple)

---

## Decision 6: Code Examples Approach

**Question**: Should Module 2 include code examples?

**Options Considered**:
1. No code (purely conceptual)
2. Minimal conceptual snippets (e.g., SDF for Gazebo)
3. Full working examples

**Decision**: Minimal conceptual snippets where absolutely necessary

**Rationale**:
- Constraint C-002: "Content SHOULD minimize code examples"
- User's plan specifies "No code or engine configuration included"
- Focus is on understanding concepts, not implementation

**Examples of Acceptable Snippets**:
- Simplified SDF (Gazebo's scene description format) to show physics properties
- Conceptual Unity C# pseudo-code to illustrate ROS message publishing pattern
- ROS 2 sensor message types (e.g., `sensor_msgs/PointCloud2`)

**Trade-offs**:
- ✅ Maintains conceptual focus
- ❌ Learners can't copy-paste working examples (OK, official docs provide that)

---

## Decision 7: Module Structure

**Question**: How should Module 2 chapters be organized?

**Options Considered**:
1. Tool-first (Gazebo chapter, Unity chapter, Sensors chapter)
2. Concept-first (Physics simulation, Rendering, Sensors across all tools)
3. Workflow-first (Setting up sim, Running sim, Analyzing sim data)

**Decision**: Tool-first organization (Gazebo → Unity → Sensors)

**Rationale**:
- User's plan explicitly specifies this structure
- Matches learner mental model ("I need to learn Gazebo" vs "I need to learn physics")
- Each chapter can be independently valuable

**Chapter Breakdown**:
1. **Chapter 1**: Gazebo (physics-first simulation)
2. **Chapter 2**: Unity (graphics-first simulation)
3. **Chapter 3**: Sensors (applies to both Gazebo and Unity)

**Trade-offs**:
- ✅ Clear, tool-focused chapters
- ✅ Learners can skip Unity chapter if only using Gazebo
- ❌ Some concept repetition between chapters (e.g., both chapters explain "why simulate")

---

## Decision 8: Sim-to-Real Coverage

**Question**: How much should we cover sim-to-real transfer challenges?

**Options Considered**:
1. Dedicated chapter (Chapter 4: Sim-to-Real)
2. Integrated into each chapter
3. Brief mention in Chapter 3 only

**Decision**: Integrate sim-to-real considerations throughout all chapters

**Rationale**:
- Sim-to-real is a cross-cutting concern
- Chapter 1: Physics accuracy affects sim-to-real
- Chapter 2: Photorealism affects vision AI transfer
- Chapter 3: Sensor noise models directly impact sim-to-real

**Trade-offs**:
- ✅ Reinforces importance throughout module
- ✅ Avoids creating a 4th chapter (maintains focus)
- ❌ No dedicated deep-dive (OK for introductory module)

---

## Decision 9: Terminology Consistency

**Question**: How do we ensure Module 2 terminology aligns with Module 1?

**Options Considered**:
1. Manual review (hope for consistency)
2. Glossary document
3. Reuse Module 1 terms explicitly with cross-references

**Decision**: Reuse Module 1 terms with explicit cross-references

**Rationale**:
- Learners already know "topics," "services," "URDF" from Module 1
- Cross-references reinforce learning ("As you learned in Module 1 Chapter 3, URDF defines...")
- Builds on existing knowledge rather than re-explaining

**Key Terms to Reuse**:
- ROS 2 topics (e.g., `/camera/image`, `/scan` for LiDAR)
- URDF (loaded into Gazebo/Unity)
- Nodes (Gazebo plugins as ROS 2 nodes)
- Pub-sub pattern (simulated sensors publish to topics)

**Trade-offs**:
- ✅ Reinforces Module 1 learning
- ✅ Avoids redundant explanations
- ❌ Assumes Module 1 completion (acceptable, Module 2 is sequential)

---

## Decision 10: Domain Randomization Coverage

**Question**: Should we explain domain randomization techniques?

**Options Considered**:
1. Skip (too advanced)
2. Brief mention in Chapter 3
3. Dedicated section in Chapter 3

**Decision**: Dedicated section in Chapter 3 (Sensor Simulation)

**Rationale**:
- Domain randomization is critical for robust AI
- Directly relates to sensor simulation (varying lighting, textures, sensor noise)
- User Story 3 implies sim-to-real considerations

**Coverage**:
- What is domain randomization
- Why it improves sim-to-real transfer
- Examples: Randomizing lighting, textures, object positions, sensor noise

**Trade-offs**:
- ✅ Teaches important technique for AI robustness
- ✅ Directly applicable to humanoid vision AI
- ❌ Adds complexity to Chapter 3 (acceptable, domain randomization is important)

---

## Summary of Decisions

| Decision | Outcome | Rationale |
|----------|---------|-----------|
| Content Format | Markdown (`.md`) | Consistency with Module 1, user request |
| Gazebo Version | Generic "Gazebo" (concept-focused) | Future-proof, avoids version lock-in |
| Unity Coverage | Full chapter (Chapter 2) | Important for vision AI, human-robot interaction |
| Sensors Covered | RGB, Depth, LiDAR, IMU, Joint Encoders | Core humanoid sensors, focused scope |
| Visual Aids | Mermaid diagrams | Consistent with Module 1, version-controlled |
| Code Examples | Minimal conceptual snippets only | Maintains conceptual focus per constraint |
| Module Structure | Tool-first (Gazebo → Unity → Sensors) | Matches user plan, clear organization |
| Sim-to-Real | Integrated throughout all chapters | Cross-cutting concern, reinforces importance |
| Terminology | Reuse Module 1 terms with cross-refs | Builds on existing knowledge |
| Domain Randomization | Dedicated section in Chapter 3 | Critical for AI robustness |

---

## Open Questions

### Q1: Should we mention cloud simulation platforms?
**Status**: Deferred to future module
**Rationale**: Out of scope per specification; cloud platforms (AWS RoboMaker, Nvidia Isaac Sim Cloud) are advanced topics

### Q2: Should we cover multi-robot simulation?
**Status**: Out of scope
**Rationale**: Focus is on single humanoid robot; multi-robot adds complexity without clear learning value for Module 2

### Q3: Should we explain physics engine internals (e.g., ODE vs Bullet)?
**Status**: Brief mention only
**Rationale**: Too low-level for introductory module; learners don't need to choose physics engines

---

## Research Sources

- [Gazebo Documentation](https://gazebosim.org/docs)
- [Unity Robotics Hub](https://github.com/Unity-Technologies/Unity-Robotics-Hub)
- [ROS 2 Sensor Tutorials](https://docs.ros.org/en/humble/Tutorials/Advanced/Simulators/Gazebo/Gazebo.html)
- [Sim-to-Real Transfer in Robotics (Survey Paper)](https://arxiv.org/abs/1812.03823)
- [Domain Randomization for Sim-to-Real Transfer](https://arxiv.org/abs/1703.06907)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2025-12-18 | Initial research decisions |
