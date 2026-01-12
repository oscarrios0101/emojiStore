import GoalCard from "./GoalCard";

const Goals = () => {
  const goals = [
    {
      emoji: "🧠",
      title: "React Mindset",
      description:
        "Adopting the React way of thinking, specifically focusing on the power of state immutability and declarative UI patterns.",
    },
    {
      emoji: "📦",
      title: "Scalable Architecture",
      description:
        "Decoupling product and cart logic into separate contexts. This modular approach ensures the app is ready for future integration with Supabase or PostgreSQL without creating a monolithic state.",
    },
    {
      emoji: "⚡",
      title: "Data Optimization",
      description:
        "Injecting a quantity property into the product data at initialization to streamline state updates and reduce code complexity.",
    },
    {
      emoji: "🤖",
      title: "AI-Assisted Development",
      description:
        "Leveraging tools like Gemini and Qwen 3 to clarify complex concepts while critically evaluating and refining AI-generated suggestions.",
    },
    {
      emoji: "🎨",
      title: "Tailwind CSS",
      description:
        "Building fluency in Tailwind CSS by balancing the speed of utility classes with the maintainability of dedicated UI components.",
    },
  ];

  return (
    <section className="mx-auto max-w-4xl px-6 py-10 text-slate-100">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Learning Journey 🚀
      </h2>
      <div className="space-y-6">
        {goals.map((goal) => (
          <GoalCard key={goal.title} {...goal} />
        ))}
      </div>
    </section>
  );
};

export default Goals;
