---
author: xj gan
pubDatetime: 2024-02-29T15:16:52.737Z
title: Crewai:Processes
slug: crewai-processes
featured: false
ogImage: https://github.com/ganxj/crewAI/blob/main/docs/crewAI-mindmap.png
tags:
  - Crew AI
  - CrewAI
  - Processes
description: CrewAI's process management orchestrates tasks using sequential, hierarchical, and planned consensual processes, enhancing teamwork efficiency.
---

![Crew AI](@assets/images/crewai-processes1.jpg)

CrewAI's process management system is a core feature of its framework, allowing developers to arrange and execute tasks in an efficient and orderly manner. This mechanism, by mimicking project management strategies in human team management, ensures tasks are allocated and executed according to a predetermined strategy. This article delves into the process management system in CrewAI, including its core concepts, implementations, and its role in teamwork, with example code to demonstrate how these concepts can be applied in real projects.

## Core Concept

The processes in CrewAI are the orchestration mechanisms for task execution, ensuring goals are achieved efficiently and cohesively. These processes enable individual agents to function as a coordinated unit, similar to project management in human teams.

## Process Implementations

CrewAI implements several types of processes, each with its specific method of task management:

**·Sequential Process:** Tasks are executed in a pre-defined order.

**·Hierarchical Process:** Tasks are organized in a managerial hierarchy, emulating a corporate structure.

**·Consensual Process (Planned):** A future process type aimed at achieving collaborative decision-making among agents.

## Example Code

Creating a Crew with a sequential process:

```python
from crewai import Crew
from crewai.process import Process

# Define agents and tasks
my_agents = [...]  # List of agents
my_tasks = [...]   # List of tasks

# Create a crew with a sequential process
crew = Crew(agents=my_agents, tasks=my_tasks, process=Process.sequential)

```

Creating a Crew with a hierarchical process:

```python
# Create a crew with a hierarchical process
crew = Crew(agents=my_agents, tasks=my_tasks, process=Process.hierarchical)

```

These code snippets show how to specify the process type when creating a Crew object to set the execution strategy.

## Sequential Process

In the sequential process, tasks are executed in a predefined order, allowing task execution to follow a thoughtful and systematic approach. The context parameter in the Task class can be used to customize task context, specifying which outputs should be used as context for subsequent tasks.

## Hierarchical Process

The hierarchical process emulates a corporate hierarchy, automatically creating a "manager" agent to oversee task execution, including planning, delegation, and validation. Tasks are not pre-assigned; the manager allocates tasks to agents as needed, reviews outputs, and assesses task completion.

![Crew AI](@assets/images/crewai-processes2.jpg)

The process management system in CrewAI significantly enhances the efficiency and coherence of work among agents by providing a structured collaboration and task management mechanism. As CrewAI continues to evolve, introducing new process types like the consensual process will further enhance its innovation in AI-driven teamwork and collaboration.
