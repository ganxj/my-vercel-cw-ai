---
author: xj gan
pubDatetime: 2024-02-27T12:14:52.737Z
title: Crewai:Task
slug: crewai-task
featured: false
ogImage: https://github.com/ganxj/crewAI/blob/main/docs/crewAI-mindmap.png
tags:
  - Crew AI
  - CrewAI
  - Task
description: CrewAI framework introduces flexibility and efficiency to AI workflows through customized tasks, tool integration, and agent collaboration, ushering in a new era of intelligent agent cooperation.
---

![Crew AI](@assets/images/crewai-task1.jpg)

In the ever-evolving landscape of artificial intelligence, the CrewAI framework emerges as a groundbreaking approach to managing and executing tasks. By harnessing the capabilities of AI agents, CrewAI introduces a level of flexibility and efficiency previously unseen in task management. This article unpacks the essence of CrewAI, focusing on its task-centric model, the collaborative synergy between agents, and the transformative potential it holds for industries ranging from research to content creation.

## Understanding CrewAI Tasks

At the heart of CrewAI lies the concept of tasks - discrete assignments that encapsulate all necessary information for execution. These tasks are not just simple directives but are designed to accommodate varying levels of complexity and collaboration. Whether it involves a single agent gathering data or multiple agents analyzing it, CrewAI's task framework ensures that each assignment is executed with precision and adaptability.

## Task Attributes: The Building Blocks of Efficiency

CrewAI tasks are defined by a set of attributes that detail the task's requirements, from the assigned agent to the tools needed for completion. These attributes include:

**·Description:** A concise statement outlining the task.

**·Agent:** Specifies the responsible agent, with flexibility for dynamic assignment based on the crew's process.

**·Expected Output:** Defines the anticipated result, ensuring clarity and focus.

**·Tools:** Enumerates the functions or capabilities available to the agent, ranging from basic actions to complex interactions with APIs or other agents.

**·Async Execution:** Allows tasks to be executed asynchronously, enhancing workflow continuity.

**·Context:** Specifies dependencies on other tasks, ensuring that outputs are utilized effectively as inputs for subsequent tasks.

These attributes not only define the scope of each task but also provide a framework for customizing tasks to meet specific objectives.

This is the simplest example for creating a task, it involves defining its scope and agent, but there are optional attributes that can provide a lot of flexibility:

```javascript
from crewai import Task

task = Task(
    description='Find and summarize the latest and most relevant news on AI',
    agent=sales_agent
)
```

Creating a Task with Tools

```javascript
import os
os.environ["OPENAI_API_KEY"] = "Your Key"

from crewai import Agent, Task, Crew
from langchain.agents import Tool
from langchain_community.tools import DuckDuckGoSearchRun

research_agent = Agent(
    role='Researcher',
    goal='Find and summarize the latest AI news',
    backstory="""You're a researcher at a large company.
    You're responsible for analyzing data and providing insights
    to the business."""
    verbose=True
)

# Install duckduckgo-search for this example:
# !pip install -U duckduckgo-search
search_tool = DuckDuckGoSearchRun()

task = Task(
  description='Find and summarize the latest AI news',
  expected_output='A bullet list summary of the top 5 most important AI news',
  agent=research_agent,
  tools=[search_tool]
)

crew = Crew(
    agents=[research_agent],
    tasks=[task],
    verbose=2
)

result = crew.kickoff()
print(result)
```

This is useful when you have a task that depends on the output of another task that is not performed immediately after it. This is done through the context attribute of the task:

```javascript
# ...

research_task = Task(
  description='Find and summarize the latest AI news',
  expected_output='A bullet list summary of the top 5 most important AI news',
  agent=research_agent,
  tools=[search_tool]
)

write_blog_task = Task(
  description="Write a full blog post about the importance of AI and its latest news",
  expected_output='Full blog post that is 4 paragraphs long',
  agent=writer_agent,
  context=[research_task]
)

#...
```

Once a crew finishes running, you can access the output of a specific task by using the output attribute of the task object:

```javascript
# ...
task1 = Task(
    description='Find and summarize the latest AI news',
    expected_output='A bullet list summary of the top 5 most important AI news',
    agent=research_agent,
    tools=[search_tool]
)

#...

crew = Crew(
    agents=[research_agent],
    tasks=[task1, task2, task3],
    verbose=2
)

result = crew.kickoff()

# Returns a TaskOutput object with the description and results of the task
print(f"""
    Task completed!
    Task: {task1.output.description}
    Output: {task1.output.raw_output}
""")
```

## Seamless Integration of Tools and Asynchronous Execution

CrewAI's strength lies in its integration of tools and asynchronous task execution. By assigning specific tools to tasks, agents can tailor their capabilities to meet the task's demands. Asynchronous execution further enhances the framework's efficiency, allowing certain tasks to proceed without delaying the crew's overall workflow.

## The Collaborative Synergy of CrewAI Agents

CrewAI's process facilitates a collaborative environment where agents can work together seamlessly. This collaborative synergy is not just about task division but also about leveraging the collective intelligence of agents. Through the context attribute, tasks can be interlinked, ensuring that the output of one task informs the execution of another.

## Transformative Potential Across Industries

The implications of CrewAI's task management framework are vast. In research, it can streamline the process of gathering and analyzing data. In content creation, it paves the way for more efficient production of written materials, such as news summaries and blog posts. The flexibility and efficiency of CrewAI have the potential to revolutionize how tasks are managed and executed across various domains.

![Crew AI](@assets/images/crewai-task2.jpg)

CrewAI represents a significant leap forward in the domain of artificial intelligence and task management. By enabling a high degree of flexibility, collaboration, and efficiency, it opens new avenues for optimizing workflows and enhancing productivity. As industries begin to adopt and adapt the CrewAI framework, we stand on the brink of a new era in AI collaboration, where the boundaries of what can be achieved are continually expanding.
