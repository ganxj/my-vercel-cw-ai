---
author: xj gan
pubDatetime: 2024-02-28T10:33:52.737Z
title: Crewai:Tool
slug: crewai-tool
featured: false
ogImage: https://github.com/ganxj/crewAI/blob/main/docs/crewAI-mindmap.png
tags:
  - Crew AI
  - CrewAI
  - Tool
description: CrewAI framework introduces flexibility and efficiency to AI workflows through customized tasks, tool integration, and agent collaboration, ushering in a new era of intelligent agent cooperation.
---

![Crew AI](@assets/images/crewai-tool1.jpg)

As the field of artificial intelligence continues to expand, the development and integration of innovative tools have become key to accelerating progress. The CrewAI platform offers a unique set of tools that equip AI agents with capabilities ranging from simple web searches to complex data analyses and team collaborations. This article will explore the creation, integration, and utilization of these tools within the CrewAI framework, with a special emphasis on the advancements in team collaboration tools.

## Overview of CrewAI Tools

In CrewAI, a "tool" is defined as a skill or function that an AI agent can utilize to perform various tasks. This includes the CrewAI Toolkit and LangChain Tools, supporting everything from simple searches to complex interactions and efficient collaboration between agents.

Key Features of Tools

**·Practicality:** Designed for a wide range of tasks such as web searches, data analysis, content generation, and agent collaboration.

**·Integration:** Enhances agent capabilities by directly integrating tools into the agent's workflow.

**·Customizability:** Offers the flexibility to customize or use existing tools to meet specific agent needs.

## Utilizing CrewAI Tools

CrewAI comes with a suite of tools that can be utilized by installing additional tool packages:

```python

pip install 'crewai[tools]'

```

Example: Using CrewAI Tools

```python
import os
from crewai import Agent, Task, Crew
from crewai_tools import DirectoryReadTool, FileReadTool, SeperDevTool, WebsiteSearchTool

# Set environment variables
os.environ["SERPER_API_KEY"] = "Your Key"
os.environ["OPENAI_API_KEY"] = "Your Key"

# Instantiate tools
docs_tools = DirectoryReadTool(directory='./blog-posts')
file_read_tool = FileReadTool()
search_tool = SeperDevTool()
website_rag = WebsiteSearchTool()

# Create agents
researcher = Agent(
    role='Market Research Analyst',
    goal='Provide up-to-date market analysis of the AI industry',
    tools=[search_tool, website_rag]
)

writer = Agent(
    role='Content Writer',
    goal='Write engaging blog post about the AI industry',
    tools=[docs_tools, file_read_tool]
)

# Create tasks
research = Task(
    description='Research the AI industry and provide a summary.',
    expected_output='A summary of the latest trends in the AI industry.',
    agent=researcher
)

write = Task(
    description='Write an engaging blog post using the summary.',
    expected_output='A 4 paragraph blog post about the latest trends.',
    agent=writer,
    output_file='blog-posts/new_post.md'
)

# Create and execute crew tasks
crew = Crew(agents=[researcher, writer], tasks=[research, write])
crew.kickoff()

```

## Creating Custom Tools

CrewAI provides the ability to create custom tools to meet specific needs. This can be achieved by inheriting from the `BaseTool` class or using the `tool` decorator:

```python
from crewai_tools import BaseTool

class MyCustomTool(BaseTool):
    name = "My Custom Tool"
    description = "This tool does something special."

    def _run(self, argument: str) -> str:
        # Your implementation here
        return "Custom result based on argument"
```

## Integration with LangChain Tools

Seamless integration with LangChain tools provides agents with additional functionalities such as search-based queries:

```python

from crewai import Agent
from langchain.agents import Tool
from langchain.utilities import GoogleSerperAPIWrapper

# Set API key
os.environ["SERPER_API_KEY"] = "Your Key"

search_tool = GoogleSerperAPIWrapper()

agent = Agent(
    role='Research Analyst',
    goal='Provide up-to-date market analysis',
    tools=[Tool(name="Google Search", func=search_tool.run, description="Search-based queries")]
)

```

![Crew AI](@assets/images/crewai-tool2.jpg)

The toolkit provided by CrewAI offers powerful means to extend the capabilities of AI agents, allowing them to perform a variety of tasks and collaborate effectively. Whether using existing tools or creating custom ones, CrewAI provides developers with a wealth of options to drive the development of innovative solutions. Through these tools, CrewAI not only simplifies the development process for AI agents but also lays the foundation for building a dynamic AI ecosystem.
