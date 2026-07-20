export const MaintainableTools = `
# Is your developer using maintainable tools?

## TL;DR

Make sure your developer is using widely adopted tools to ensure a maintainable software system. Ask about the tools they use and gauge each tool's adoption by checking the [Stack Overflow Survey](https://insights.stackoverflow.com/survey) and [GitHub Survey](https://octoverse.github.com/).

## Introduction

Picture this: you hire a development agency to create your dream software solution, only to find yourself trapped in an inferno of poor support, unfixable bugs, and creeping regret. This is a sadly common problem faced by clients of development agencies. Here's why it happens, and how to avoid it.

## Why unmaintainable software happens

**Outdated tools.**
Developers may rely on technologies that are no longer supported or lack essential updates, making it difficult to address issues and keep the software up to date. For example, imagine your software is built on a deprecated framework that simply doesn't have the power to execute the kind of features that seem trivial to build on newer platforms.

**Niche tools with limited adoption.**
Another pitfall is when developers choose tools that nobody else uses. Sometimes devs opt to create their own tools instead of using popular open-source libraries. Or on the other extreme, they opt to use a tool that's trendy but unestablished. While it can be tempting, devs need to keep their client's interests at heart. I've had to do rebuilds in the past because clients couldn't find any developers experienced in the obscure tools their system was built in.

**Poor architecture decisions.**
Sometimes, developers make poor architecture decisions, such as favoring code reusability over minimizing complexity. While reusability is valuable, overly complex code structures can become unmanageable in the long run, making it challenging to maintain and update the software.

## Ensuring maintainability

**Assess tools' adoption.**
Ensure maintainability by checking the adoption of the tools your developer plans to use. Check out the [Stack Overflow survey](https://insights.stackoverflow.com/survey) and [GitHub survey](https://octoverse.github.com/) and go to the **technology popularity** sections to see if these tools have any traction in the industry. By choosing tools with wider adoption, you'll benefit from a larger pool of developers who can provide support, share knowledge, and help maintain the software in the long term.

**Build a long-term relationship.**
A strong and long-lasting relationship with a developer or development agency can work wonders for maintainability. The original developer will have an intimate understanding of the codebase; nobody else will be able to address issues and implement updates as quickly.

**Experience in similar projects.**
Prioritize those who have worked on projects similar to yours in the past. Big-company developers may bring experience, but they may lack urgency and want to over-optimize or over-engineer, creating unnecessary complexity. On the other hand, freelancers may lack structure and inadvertently create a spaghetti-code hellscape.

## Conclusion

Do your own audit on the tools used, try to keep the same devs long-term, and try to get devs who have built something similar.
`;
