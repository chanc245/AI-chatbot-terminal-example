const assignment5Paper = `I. Purpose of the Toolkit
This Research Methods Toolkit—comprising both this document and a little chatbot I created—serves as a practical resource for conducting design research in the future. While I might not need to take courses like DR2 and Senior Capstone, research will inevitably play a role in my work, making this toolkit an invaluable asset. It brings together methodologies, tools, and reflections from the semester into an accessible and well-organized format, perfect for easy reference.

II. Design Research Principles
	Design research is founded on principles that balance creativity and evidence-based decision-making. The Double Diamond Process is a key framework, organizing the design journey into four phases: Discover, Define, Develop, and Deliver. This approach ensures clarity by separating divergent (exploring options) and convergent (narrowing focus) thinking.
Additionally, Design Thinking Methodology—Empathize, Define, Ideate, Prototype, Test—guides researchers through understanding user needs and iterating solutions. Core values like empathy, inclusivity, and ethics underscore these principles, encouraging respect for participants, thoughtful problem framing, and user-centered outcomes.

III. All Research Methods/Tools
a. 3D Research - Modes
1. Qualitative
Qualitative methods explore rich, contextual insights through techniques like ethnography, stakeholder interviews, and affinity mapping. These methods are ideal for understanding behaviors, attitudes, and motivations.

Describe the Method: Focuses on collecting non-numerical data to understand behaviors, attitudes, and motivations.
What is the Method Used For: Uncovering deep insights, exploring user contexts, and identifying unmet needs.
When is the Method Used: Primarily in the Discover phase to gather rich, contextual data.
Where Does it Sit in the Double Diamond:
Phase: Discover
Type of Thinking: Divergent
Types of Data the Method Collects: Qualitative (narratives, themes, observations).
Step-by-Step on How to Conduct the Method:
Define research objectives and target audience.
Choose a method (e.g., interviews, ethnography).
Collect data using open-ended questions or observations.
Analyze data for patterns and themes.
Benefits and Drawbacks of the Method:
Benefits: Deep insights into user behaviors; adaptable to various contexts.
Drawbacks: Time-consuming; not easily generalizable.
Example: Conducted stakeholder interviews to understand challenges in a university library system.
Reflections: Build rapport with participants to ensure authentic responses.
Related Methods: Ethnography, contextual inquiry.
2. Quantitative
Quantitative methods focus on numerical data and statistical analysis, using tools like surveys, A/B testing, and regression analysis. These methods are valuable for identifying trends, testing hypotheses, and measuring impact.
Describe the Method: Involves numerical data collection and statistical analysis to measure trends or test hypotheses.
What is the Method Used For: Understanding scale, testing hypotheses, and validating qualitative findings.
When is the Method Used: Often in the Define and Deliver phases to refine insights and evaluate solutions.
Where Does it Sit in the Double Diamond:
Phases: Define, Deliver
Type of Thinking: Convergent
Types of Data the Method Collects: Quantitative (numeric data, percentages, statistical metrics).
Step-by-Step on How to Conduct the Method:
Define objectives and metrics.
Design a survey or experiment.
Distribute a large sample size.
Analyze results using statistical tools.
Benefits and Drawbacks of the Method:
Benefits: Generalizable; precise insights.
Drawbacks: Limited context; potential bias in sample or questions.
Example: Conducted a survey to measure satisfaction with a library app prototype.
Reflections: Ensure clear, unbiased survey questions.
Related Methods: A/B testing, hypothesis testing.
3. Mixed Methods
Mixed methods integrate qualitative and quantitative approaches, combining strengths to provide comprehensive insights. Approaches include concurrent and sequential designs, enabling researchers to triangulate data and enhance rigor.

Describe the Method: Combines qualitative and quantitative approaches to gather comprehensive insights.
What is the Method Used For: Enhancing rigor and triangulating data.
When is the Method Used: Throughout all phases of the Double Diamond.
Where Does it Sit in the Double Diamond:
Phases: Discover, Define, Develop, Deliver
Type of Thinking: Divergent and Convergent
Types of Data the Method Collects: Mixed (qualitative and quantitative).
Step-by-Step on How to Conduct the Method:
Define objectives for both approaches.
Conduct qualitative research (e.g., interviews).
Follow with quantitative validation (e.g., surveys).
Integrate findings into a unified analysis.
Benefits and Drawbacks of the Method:
Benefits: Robust insights; balances depth and generalizability.
Drawbacks: Resource-intensive; complex analysis.
Example: Used interviews and surveys to understand and validate user needs for an app.
Reflections: Plan for time and resources to execute both approaches effectively.
Related Methods: Sequential or concurrent mixed-method designs.
a. 3D Research - Sources 
1. Primary
Primary research involves gathering original data directly from participants through methods like field observations, usability testing, and interviews. It allows researchers to tailor their inquiries to specific design challenges.

Name of the Method: Primary Research
Describe the Method: Involves collecting original data directly from participants or observations.
What is the Method Used For: Exploring new insights tailored to specific research questions.
When is the Method Used: Primarily in the Discover phase.
Where Does it Sit in the Double Diamond:
Phase: Discover
Type of Thinking: Divergent
Types of Data the Method Collects: Qualitative or quantitative.
Step-by-Step on How to Conduct the Method:
Define objectives and target audience.
Select appropriate tools (e.g., interviews, usability testing).
Collect and document data.
Analyze findings for actionable insights.
Benefits and Drawbacks of the Method:
Benefits: Customized insights; firsthand data.
Drawbacks: Time-intensive; potential biases.
Example: Conducted usability testing for a library seating app prototype.
Reflections: Tailor methods to participant availability and comfort.
Related Methods: Ethnography, surveys.
2. Secondary
Secondary research relies on analyzing existing data, such as academic papers, market reports, and case studies. It offers a cost-effective way to gain contextual understanding and validate findings.

Name of the Method: Secondary Research
Describe the Method: Involves analyzing existing data such as reports, case studies, or academic papers.
What is the Method Used For: Providing context, validating findings, or benchmarking.
When is the Method Used: Early in the Discover phase or to complement other data.
Where Does it Sit in the Double Diamond:
Phase: Discover
Type of Thinking: Divergent
Types of Data the Method Collects: Secondary qualitative or quantitative data.
Step-by-Step on How to Conduct the Method:
Define the research focus.
Identify reliable sources.
Collect and summarize key findings.
Cross-check with primary data.
Benefits and Drawbacks of the Method:
Benefits: Cost-effective; fast access.
Drawbacks: Limited to existing data; potential for outdated information.
Example: Analyzed academic papers on user behavior in libraries for initial insights.
Reflections: Always validate the credibility of sources.
Related Methods: Literature reviews, competitive analysis.`;

const evaluationPrompt = (paper, input) =>
  `You are an AI assistant specialized in helping design students create comprehensive research toolkits for design research.
Your role is to guide the organization and structuring of research methods and personal experiences into cohesive, practical, and reusable resources.
You cater to students who aim to reference these toolkits in their research.
Please base your answers on the following paper: ${paper}.

For each toolkit entry, your output must include:
1. **Research Principles:**
   - Explanation of design thinking methodology
   - Articulation of the importance of research
   - Definition of core values and mindsets in the research process
   - Description of the double-diamond approach and any extensions

2. **Method Documentation:**
   - Method Name
   - Description
   - Purpose and Applications
   - Timing in Research Process
   - Position in Double Diamond
   - Data Type Classification (Qualitative/Quantitative)
   - Step-by-Step Implementation Guide
   - Advantages and Limitations
   - Personal Usage Example
   - Practical Notes and Reminders
   - Related Methods and Connections

Your outputs should be concise and friendly.

You excel at guiding students on how to organize multiple methods into logical groupings with clear relationships, maintaining consistent documentation, and suggesting effective visualization strategies. 
Tailor your responses to emphasize practical usability, personal experiences, and long-term reference value.

respond in ONLY text

User input: "${input}"
`;

// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //
// ---------- TERMINAL ---------- //

// github('jcubic/jquery.terminal');
document.fonts.ready.then(() => {
  const term = $("#commandDiv").terminal(
    {
      start: async function () {
        // loadPuzzle.call(this);
      },
      processInput: async function (input) {
        const prompt = evaluationPrompt(assignment5Paper, input);

        console.log(prompt);

        const aiResponse = await fetchAIResponse(prompt);

        this.echo(`\n[Toolkit]
  ${aiResponse}
`);
      },
    },
    {
      greetings: `Welcome to Design Research 1: Methods - Research Toolkit

This is a toolkit covering all content from PSDS 2100 Design Research 1: Methods.

Feel Free to ask any questions you have!
`,
      prompt: "> ",
      onInit: function () {
        this.push(async function (input) {
          const prompt = evaluationPrompt(assignment5Paper, input);
          const aiResponse = await fetchAIResponse(prompt);
          this.echo(`\n[Toolkit]
  ${aiResponse}
`);
        });
      },
    }
  );
});

// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //
// ---------- AI ---------- //

async function fetchAIResponse(input) {
  console.log(`--fetchAIResponse started --input: ${input}`);

  try {
    const response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input }),
    });

    if (response.ok) {
      console.log("--AI response OK");
      const jsonData = await response.json();
      const aiModResponse = jsonData.ai;

      console.log(`==Gemini Output: ${aiModResponse}`);
      return aiModResponse;
    } else {
      console.error(
        "Error in API request:",
        response.status,
        response.statusText
      );
      return `Error in API request: ${response.status} ${response.statusText}`;
    }
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Oops, something went wrong. Let's try again!";
  }
}
