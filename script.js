const scenarios = [
    {
        scenario: "A small business is considering investing a significant portion of its marketing budget into partnering with social media influencers. They believe influencers can help them reach a broader audience and increase sales. However, they are also concerned about the authenticity and potential controversies surrounding some influencers.",
        questions: [
            "Should small businesses invest heavily in influencer marketing despite the risks of potential controversies?",
            "Are the benefits of engaging with influencers to reach a larger audience worth the potential authenticity concerns?"
        ]
    },
    {
        scenario: "A company monitors its employees' social media activity to ensure they uphold the company's values and image. They believe this helps protect the company's reputation. However, some argue that this practice is an invasion of privacy and can lead to unfair disciplinary actions.",
        questions: [
            "Is it ethical for companies to monitor and evaluate employees based on their social media activity?",
            "Does this practice respect employees' privacy while upholding company values?"
        ]
    },
    {
        scenario: "A social media company collects vast amounts of user data to enhance user experience and for targeted advertising. However, there are growing concerns about data privacy, security breaches, and the potential misuse of personal information.",
        questions: [
            "Given the privacy risks, should social media companies be allowed to collect and use personal data for targeted advertising?",
            "What regulations should be in place to ensure that user data is protected and not misused?"
        ]
    },
    {
        scenario: "Research shows that excessive use of social media can negatively impact mental health, particularly among teenagers. A social media platform is considering implementing features to limit screen time and promote mental well-being, but this may affect user engagement and revenue.",
        questions: [
            "Should social media platforms implement features to limit screen time to promote mental well-being despite potential revenue loss?",
            "Are the benefits of improving mental health worth the possible decrease in user engagement and platform revenue?"
        ]
    },
    {
        scenario: "A social media platform is under pressure to combat misinformation and fake news. They are considering implementing stricter content moderation policies and fact-checking measures. However, there are concerns about freedom of speech and potential censorship.",
        questions: [
            "Should social media platforms implement stricter content moderation policies to combat misinformation, even if it risks censoring free speech?",
            "What balance should be struck between ensuring accurate information and protecting freedom of speech?"
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-scenario');
    const currentScenario = document.getElementById('current-scenario');
    const currentQuestions = document.getElementById('current-questions');

    generateButton.addEventListener('click', () => {
        const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
        currentScenario.textContent = randomScenario.scenario;

        currentQuestions.innerHTML = '';
        randomScenario.questions.forEach(question => {
            const li = document.createElement('li');
            li.textContent = question;
            currentQuestions.appendChild(li);
        });
    });
});

