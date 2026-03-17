export const experience = [
  {
    order: 1,
    company: 'Tremend Software Consulting',
    role: 'Senior QA Automation Engineer',
    type: 'Full-time',
    period: 'Sep 2023 - Present',
    shortSummary:
      'Leading manual and automation testing for complex healthcare web applications, with strong involvement in framework design, planning, and team coordination.',
    projectContext:
      'Developing a microproduct for a PBM in the healthcare industry.',
    highlights: [
      'Built an automation framework from scratch using Playwright, TypeScript, and Cucumber.',
      'Worked across web and API testing, test case design, execution, and defect analysis.',
      'Integrated Rally test cases into feature files and developed the full suite of scenarios.',
      'Planned and coordinated testing activities with the QA team and shared risks during Scrum ceremonies.',
      'Provided UX and usability feedback during testing and collaborated closely with developers in Agile teams.',
    ],
  },
  {
    order: 2,
    company: 'Cognizant Softvision',
    role: 'Senior QA Automation Engineer',
    type: 'Full-time',
    period: 'Aug 2019 - Sep 2023',
    shortSummary:
      'Supported large e-commerce platforms through manual and automated testing, UI validation, accessibility checks, and quality improvements at scale.',
    projectContext:
      'Included a redesign of the header and footer for a leading UK pharmacy e-commerce platform, plus order processing and internal tooling projects.',
    highlights: [
      'Led testing activities across manual and automation work for major e-commerce experiences.',
      'Built and maintained frameworks using Java, Selenium, TestNG, Cypress, JavaScript, Cucumber, Galen, Axe, and Allure.',
      'Integrated quality workflows into Azure DevOps and Jenkins CI/CD pipelines.',
      'Maintained more than 700 tests running in parallel across browsers and screen sizes.',
      'Delivered API testing with REST Assured and Postman for supporting services and order flows.',
    ],
    subRoles: [
      {
        role: 'QA Automation Engineer',
        period: 'Feb 2020 - Dec 2021',
        project: 'Online order processor for a major chain of cosmetics',
        summary:
          'Ran testing activities, executed daily Postman collections, and built a Java and REST Assured framework to reduce manual effort.',
      },
      {
        role: 'QA Automation Engineer',
        period: 'Sep 2019 - Jan 2020',
        project: 'Internal tool to promote goal achievements of individuals and teams',
        summary:
          'Handled manual and automated testing, API testing with REST Assured, E2E tests in JavaScript with WebdriverIO, test case creation, and bug reporting.',
      },
    ],
  },
  {
    order: 3,
    company: 'Levi9 Technology Services',
    role: 'QA Engineer',
    type: 'Full-time',
    period: 'Nov 2017 - Mar 2019',
    shortSummary:
      'Worked on private mobile radio communications systems with a mix of manual testing, automation, API checks, and usability improvement suggestions.',
    projectContext: 'Private Mobile Radio communications systems.',
    highlights: [
      'Performed manual and automated testing and maintained the regression suite.',
      'Created product improvement suggestions for usability and functionality.',
      'Used Selenium and Java for automated coverage and Postman plus ChaiJS for manual API testing.',
      'Prepared XML mocking data and presented the solution to the QA department.',
    ],
  },
  {
    order: 4,
    company: 'Levi9 Technology Services',
    role: 'QA Engineer',
    type: 'Full-time',
    period: 'Jul 2017 - Oct 2017',
    shortSummary:
      'Covered test cases, bug reporting, planning, and an automation proof of concept for a timesheet platform.',
    projectContext: 'Timesheet application for a construction company.',
    highlights: [
      'Created test cases and reported issues clearly for the team.',
      'Contributed to test strategies and planning.',
      'Built a proof of concept using Protractor and JavaScript.',
    ],
  },
] as const;
