const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const projectName = "v2-growth-track";
const projectPath = path.join(process.cwd(), projectName);

// Step 1: Create Next.js App
console.log("Creating Next.js app...");
execSync(
  `npx create-next-app@latest ${projectName} --ts --eslint --tailwind --app --use-npm`,
  { stdio: "inherit", shell: true }
);

// Install dependencies inside the project
console.log("Installing dependencies...");
execSync(
  `cd ${projectName} && npm install openai dotenv remark remark-html gray-matter react-markdown rehype-raw`,
  {
    stdio: "inherit",
    shell: true,
  }
);

// Step 2: Generate blog data with tags
console.log("Adding static blog content...");
const blogPosts = [
  {
    id: 1,
    slug: "optimizing-your-crm-for-b2b-success",
    title: "Optimizing Your CRM for B2B Success",
    subtitle: "Strategies to improve CRM efficiency and customer relationships",
    content:
      "A well-optimized **Customer Relationship Management (CRM)** system can be the key to unlocking growth and efficiency in B2B organizations. Without the right strategies, businesses risk losing valuable leads, inefficient workflows, and disengaged customers.\n\nIn this guide, we'll explore essential tactics to enhance your CRM for **B2B success**.\n\n## Why CRM Optimization Matters\n\nA poorly optimized CRM can lead to:\n\n- Missed sales opportunities\n- Inefficient data management\n- Poor customer engagement\n\nBy implementing the right **CRM strategies**, businesses can drive customer satisfaction, improve sales cycles, and boost overall efficiency.\n\n## Key Strategies to Optimize Your CRM\n\n### 1. Automate Lead Management\n\nAutomation reduces manual data entry and ensures no lead falls through the cracks. Consider:\n\n- **Lead Scoring** - Prioritize high-value leads automatically.\n- **Automated Follow-Ups** - Ensure timely engagement with prospects.\n- **Integration with Sales Pipelines** - Streamline the movement of leads through the funnel.\n\n### 2. Personalize Customer Interactions\n\nCustomers expect **tailored experiences**. Use your CRM to:\n\n- **Track Customer Preferences** - Store important customer details.\n- **Segment Audiences** - Group clients based on behavior and interests.\n- **Automate Personalized Emails** - Deliver relevant content at the right time.\n\n### 3. Integrate with Marketing Tools\n\nYour CRM should work **seamlessly** with other marketing tools like:\n\n- **Email Platforms** (e.g., Mailchimp, HubSpot)\n- **Social Media Analytics**\n- **Content Management Systems (CMS)**\n\nIntegration enables a unified strategy, keeping all customer interactions in sync.\n\n## Measuring Success: Key CRM Metrics\n\nTo ensure your **CRM optimization efforts** are working, track the following metrics:\n\n- **Customer Retention Rate** - Measures long-term engagement.\n- **Lead Conversion Rate** - Tracks how effectively leads turn into customers.\n- **Sales Cycle Length** - Monitors efficiency in closing deals.\n- **CRM Adoption Rate** - Ensures employees are actively using the system.\n\n## Conclusion\n\nA well-optimized **CRM system** can transform your B2B business by improving customer relationships, streamlining processes, and increasing revenue. By implementing automation, personalization, and integrations, your CRM will become a powerful tool for **long-term success**.\n\n **Start optimizing your CRM today and watch your B2B business thrive!** 🚀\n",
    tags: ["B2B", "CRM", "Automation"],
    image: "/optimize_b2b_success.webp",
  },
  {
    id: 2,
    slug: "top-crm-features-for-b2b-enterprises",
    title: "Top CRM Features for B2B Enterprises",
    subtitle: "Essential tools to streamline business processes",
    content:
      "Customer Relationship Management (CRM) software is essential for B2B enterprises aiming to enhance client interactions, streamline processes, and drive revenue growth. Here are the top CRM features every B2B business should leverage:\n\n## 1. Lead and Contact Management\n\nA powerful CRM should provide:\n\n- **Centralized Customer Data** - Store and manage all customer details in one place.\n- **Lead Tracking** - Monitor potential clients through different sales stages.\n- **Interaction History** - Keep records of emails, calls, and meetings for seamless communication.\n\n## 2. Sales Pipeline Management\n\nEfficient pipeline management helps businesses visualize sales progress and optimize conversion rates.\n\n- **Drag-and-Drop Pipeline** - Easily move deals across different stages.\n- **Automated Follow-Ups** - Schedule reminders and follow-up tasks.\n- **Forecasting Tools** - Predict revenue based on historical trends.\n\n## 3. Automate Your Marketing\n\nIntegrating marketing automation with your CRM allows for targeted campaigns and personalized outreach.\n\n- **Email Drip Campaigns** - Send automated, scheduled emails to nurture leads.\n- **Lead Scoring** - Assign scores to leads based on engagement levels.\n- **Multi-Channel Marketing** - Connect with clients via email, social media, and SMS.\n\n## 4. Custom Reporting and Analytics\n\nData-driven decision-making is crucial for B2B enterprises.\n\n- **Real-Time Dashboards** - Monitor key performance indicators (KPIs).\n- **Custom Reports** - Generate reports on sales trends, customer behavior, and team performance.\n- **Funnel Analysis** - Identify bottlenecks in the sales funnel.\n\n## 5. Seamless Integrations\n\nYour CRM should integrate with other essential tools:\n\n- **Email Platforms (Gmail, Outlook)** - Sync emails and track conversations.\n- **Accounting Software (QuickBooks, Xero)** - Manage invoices and financials.\n- **Collaboration Tools (Slack, Microsoft Teams)** - Enhance team communication.\n\n## 6. Mobile Accessibility\n\nSales teams on the go need access to CRM data anywhere, anytime.\n\n- **Mobile App Support** - Access client information from a smartphone.\n- **Offline Mode** - Update records without internet connectivity.\n- **Push Notifications** - Get instant alerts for important client activities.\n\n## Conclusion\n\nInvesting in a feature-rich CRM can revolutionize your B2B operations, improve efficiency, and strengthen customer relationships. By leveraging automation, analytics, and integrations, enterprises can stay ahead in a competitive landscape.\n",
    tags: ["B2B", "CRM", "Features"],
    image: "/top_crm_features.webp",
  },
  {
    id: 3,
    title: "CRM Automation Guide",
    subtitle: "How to Streamline Your Sales and Marketing with CRM Automation",
    slug: "crm-automation-guide",
    image: "/top_crm_features.webp",
    tags: ["CRM", "Automation", "Sales", "Lead Management", "Marketing"],
    content:
      "In today's fast-paced business environment, leveraging **CRM automation** is essential for improving efficiency and maximizing customer relationships. Automating repetitive tasks allows sales and marketing teams to focus on strategic activities that drive growth.\n\n## What is CRM Automation?\n\nCRM automation refers to the use of technology to streamline and manage **customer relationship processes** such as lead tracking, follow-ups, email campaigns, and data entry. By automating these tasks, businesses can improve response times, reduce manual errors, and enhance customer experiences.\n\n## Key Benefits of CRM Automation\n\n### 1. Increased Efficiency\n\n- Eliminates **manual data entry** and reduces administrative workload.\n- Automates **follow-ups and reminders**, ensuring no lead is forgotten.\n- Integrates with other tools like email, social media, and chatbots for seamless communication.\n\n### 2. Improved Lead Management\n\n- Uses **lead scoring** to prioritize high-value prospects.\n- Tracks **customer interactions** across multiple channels.\n- Automatically assigns leads to sales reps based on predefined criteria.\n\n### 3. Personalized Customer Engagement\n\n- Sends **personalized emails** based on customer behavior.\n- Automates **birthday or anniversary messages** for customer retention.\n- Recommends relevant products or services using AI-driven insights.\n\n### 4. Better Sales Forecasting\n\n- Generates real-time reports on sales performance.\n- Identifies **trends and patterns** in customer behavior.\n- Provides **predictive analytics** to improve decision-making.\n\n## How to Implement CRM Automation\n\n### Step 1: Identify Repetitive Tasks\n\nStart by listing out **time-consuming manual tasks** such as:\n\n- Data entry and contact updates.\n- Scheduling follow-ups and reminders.\n- Sending welcome or thank-you emails.\n\n### Step 2: Choose the Right CRM Software\n\nSelect a **CRM platform** that supports automation, such as:\n\n- **HubSpot CRM** – Great for inbound marketing automation.\n- **Salesforce** – Ideal for enterprise-level automation.\n- **Zoho CRM** – Budget-friendly with robust automation features.\n\n### Step 3: Set Up Workflow Automation\n\n- **Define triggers** (e.g., “Send a follow-up email when a lead downloads an eBook”).\n- Use **if-then logic** to automate decision-making.\n- Create **multi-step workflows** that move leads through the sales funnel.\n\n### Step 4: Monitor and Optimize\n\n- Track **key performance metrics** like response time and conversion rates.\n- Continuously **refine workflows** to improve effectiveness.\n- Use **A/B testing** to optimize email sequences and automation rules.\n\n## Conclusion\n\nCRM automation is a game-changer for businesses looking to **enhance productivity, improve customer relationships, and boost sales efficiency**. By automating routine tasks, companies can focus on what truly matters—building meaningful customer connections.\n",
  },
];

const internalLinks = {
  CRM: "/blog/optimizing-your-crm-for-b2b-success",
  B2B: "/blog/top-crm-features-for-b2b-enterprises",
  Automation: "/blog/crm-automation-guide",
};

fs.mkdirSync(path.join(projectPath, "lib"), { recursive: true });
fs.writeFileSync(
  path.join(projectPath, "lib/blogData.json"),
  JSON.stringify(blogPosts, null, 2)
);
fs.writeFileSync(
  path.join(projectPath, "lib/internalLinks.json"),
  JSON.stringify(internalLinks, null, 2)
);

// Step 3: Generate project files
const files = {
  "app/layout.tsx": `import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 min-h-screen">
        <Navbar />
        <main className="container mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}`,

  "app/page.tsx": `export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center mt-10 text-center'>
      <h1 className='text-5xl font-extrabold text-lime-400'>Welcome to GrowthTrack</h1>
      <p className='mt-4 text-lg text-gray-300 max-w-2xl'>
        Streamline your business with AI-driven customer relationship management solutions.
      </p>
    </div>
  );
}`,

  "app/blog/page.tsx": `import Link from "next/link";
  import Image from "next/image";
import posts from "@/lib/blogData.json";

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-lime-400">
        The Growth Blog
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-6 auto-rows-fr">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={300}
              className="w-full h-80 object-cover"
            />
            <h2 className="text-xl font-bold mt-4">{post.title}</h2>
            <p className="text-gray-400 mt-2">{post.subtitle}</p>
            <div className="flex flex-wrap gap-2 my-3">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={"/tags/" + tag}
                  className="bg-gray-700 px-2 py-1 rounded text-sm hover:bg-lime-600 transition"
                >
                  #{tag}
                </Link>
              ))}
            </div>
            <Link
              href={"/blog/" + post.slug}
              className="w-[115px] text-center mt-auto px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}`,
  "app/blog/[slug]/page.tsx": `import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

import { addInternalLinks } from "@/lib/internalLinker";
import posts from "@/lib/blogData.json";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug.toString() === resolvedParams.slug);

  if (!post) return notFound();

  const linkedContent = addInternalLinks(post.content);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <Image
        src={post.image}
        alt={post.title}
        width={600}
        height={600}
        className="w-full h-80 object-cover"
      />
      <div className="flex flex-wrap gap-2 mt-4">
        {post.tags &&
          post.tags.map((tag: string) => (
            <Link
              key={tag}
              href={\`/tags/\${tag}\`}
              className="bg-gray-700 px-2 py-1 rounded text-sm hover:bg-lime-600 transition"
            >
              #{tag}
            </Link>
          ))}
      </div>
      <h1 className="text-4xl font-bold mt-6">{post.title}</h1>
      <h2 className="text-xl text-gray-400 mt-2">{post.subtitle}</h2>
      <div className="prose prose-invert max-w-none mt-4">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: (props) => (
              <h1 className="text-4xl font-bold mt-6" {...props} />
            ),
            h2: (props) => (
              <h2
                className="text-3xl font-semibold mt-6 text-gray-300"
                {...props}
              />
            ),
            h3: (props) => (
              <h3
                className="text-2xl font-semibold mt-4 text-gray-400"
                {...props}
              />
            ),
            p: (props) => (
              <p className="text-gray-300 mt-2 leading-relaxed" {...props} />
            ),
            ul: (props) => (
              <ul
                className="list-disc list-inside mt-2 space-y-1 text-gray-300"
                {...props}
              />
            ),
            li: (props) => <li className="ml-4 text-gray-300" {...props} />,
            a: (props) => (
              <a className="text-lime-400 hover:underline" {...props} />
            ),
          }}
        >
          {linkedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}`,
  "app/tags/[tag]/page.tsx": `import Link from "next/link";
  import Image from "next/image";
import posts from "@/lib/blogData.json";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

export default async function TagPage({ params }: TagPageProps) {
  const resolvedParams = await params;
  const tag = decodeURIComponent(resolvedParams.tag);
  const filteredPosts = posts.filter((post) => post.tags?.includes(tag));

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-lime-400 mb-4 text-center">
        Posts Tagged: #{tag}
      </h1>
      <div className="border-b border-gray-600 mb-6"></div>

      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div
            key={post.id}
            className="mb-8 p-4 bg-gray-700 rounded-lg shadow-md"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={600}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold mt-4">{post.title}</h2>
            <h3 className="text-lg text-gray-400 mt-2">{post.subtitle}</h3>
            <p className="text-gray-300 mt-4">
              {post.content.substring(0, 150)}...
            </p>
            <Link
              href={\`/blog/\${post.slug}\`}
              className="inline-block mt-4 px-4 py-2 bg-lime-600 text-white rounded-lg hover:bg-lime-700 transition"
            >
              Read More
            </Link>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-center">
          No posts found for this tag.
        </p>
      )}
    </div>
  );
}`,
  "lib/internalLinker.ts": `
import internalLinks from "@/lib/internalLinks.json";

export function addInternalLinks(content: string) {
  const linkedKeywords = new Set<string>(); // Keep track of linked keywords

  Object.entries(internalLinks).forEach(([keyword, url]) => {
    // Only replace the FIRST occurrence of each keyword
    const regex = new RegExp(\`\\\\b(\${keyword})\\\\b(?![^<]*>)\`, "i"); // Case-insensitive

    content = content.replace(regex, (match) => {
      if (!linkedKeywords.has(keyword)) {
        linkedKeywords.add(keyword);
        return \`<a href="\${url}" class="text-lime-400 hover:underline">\${match}</a>\`;
      }
      return match; // Leave later occurrences unlinked
    });
  });

  return content;
}`,
  "components/Navbar.tsx": `import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-lime-500 p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-white text-xl font-bold'>GrowthTrack</Link>
        <div className='space-x-4'>
          <Link href='/' className='text-white hover:underline'>Home</Link>
          <Link href='/blog' className='text-white hover:underline'>Blog</Link>
        </div>
      </div>
    </nav>
  );
}`,
};

// Step 4: Write Files
console.log("Generating project files...");
for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(projectPath, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content);
}

console.log("Setup complete!");
console.log(`Navigate to the project: cd ${projectName}`);
console.log("Run the development server: npm run dev");
