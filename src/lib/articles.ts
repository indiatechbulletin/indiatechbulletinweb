export interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: "mid-year-tech-review-2026",
    title: "Mid-Year Tech Review: Market Shifts and Industry Realignment",
    date: "June 5, 2026",
    excerpt: "A comprehensive look at the first half of 2026, tracking the rapid deployment of autonomous AI agents and the resulting volatility in software valuations.",
    content: `The technology sector has experienced significant structural shifts in the first six months of 2026. The widespread deployment of autonomous AI agents has forced a reevaluation of traditional software models, leading to a period of market volatility.

In India, the effects have been particularly visible in the hiring market. Major IT services firms have paused mass recruitment, focusing instead on upskilling their existing workforce to handle advanced infrastructure demands. Conversely, venture capital investment has surged in the deep tech and semiconductor sectors. 

Analysts predict that the second half of the year will see intense competition in the domestic semiconductor manufacturing space, following government subsidies aimed at reducing reliance on global supply chains. As regulatory frameworks adapt, the domestic tech ecosystem is prioritizing operational efficiency over rapid expansion.`
  },
  {
    id: "google-updates-controversy-may-2026",
    title: "Google Core Updates Spark Controversy Among Publishers",
    date: "May 12, 2026",
    excerpt: "The latest algorithmic updates from Google have drawn sharp criticism from independent publishers experiencing severe traffic declines.",
    content: `Google rolled out a major series of algorithm updates in early May 2026, aimed at prioritizing AI-curated summaries and highly authoritative domains. The deployment has triggered widespread controversy across the digital publishing industry.

Independent tech blogs and specialized news outlets have reported traffic declines of up to 60 percent. The core point of contention is Google's aggressive expansion of its AI Overview feature, which answers user queries directly on the search results page without requiring a click-through to the source material.

Publishers argue this practice severely damages their monetization models. Several international media consortiums are currently exploring legal avenues, citing anti-competitive behavior. Google has defended the updates, stating that the changes are designed to surface higher-quality information and reduce the visibility of mass-produced, low-effort content.`
  },
  {
    id: "yc-startup-school-bangalore-2026",
    title: "YC Startup School Bangalore Highlights Core Deep Tech Trends",
    date: "April 18, 2026",
    excerpt: "Y Combinator's intensive program in Bangalore concluded with a heavy emphasis on localized hardware solutions and climate technology startups.",
    content: `Y Combinator hosted its highly anticipated Startup School in Bangalore this April, gathering hundreds of early-stage founders and domestic venture capitalists. The 2026 cohort demonstrated a clear pivot away from consumer internet applications toward deep technology and enterprise solutions.

A significant portion of the featured startups focused on solving localized infrastructure problems. Presentations highlighted innovations in sustainable agricultural technology, low-cost battery recycling, and specialized semiconductor design for edge computing. 

Partners at Y Combinator noted that the quality of technical talent in Bangalore has matured, allowing founders to tackle complex, capital-intensive problems. The event concluded with several unannounced seed funding rounds, signaling that despite broader global economic caution, highly technical Indian startups continue to attract premium valuations.`
  },
  {
    id: "global-ai-summit-bharat-mandapam-2026",
    title: "Global AI Summit at Bharat Mandapam Sets Regulatory Precedents",
    date: "March 25, 2026",
    excerpt: "International policymakers and technology executives convened in New Delhi to draft foundational guidelines for the responsible deployment of artificial intelligence.",
    content: `The Global AI Summit held at the Bharat Mandapam in New Delhi brought together international delegates, technology executives, and academic researchers to establish consensus on artificial intelligence regulation. 

The three-day conference focused heavily on establishing frameworks for data sovereignty and transparent algorithmic auditing. A key outcome of the summit was the preliminary drafting of the "New Delhi Consensus," a non-binding agreement encouraging nations to mandate clear labeling for AI-generated media and to establish independent oversight boards for large-scale models.

Domestic leaders used the platform to showcase India's digital public infrastructure, arguing that an open-source approach to AI could democratize access to advanced computing across the Global South. The event underscored India's intent to shape global technology policy rather than simply adopting Western regulatory frameworks.`
  },
  {
    id: "iit-delhi-becon-tech-fest-2026",
    title: "IIT Delhi BECON 2026 Showcases Student-Led Robotics Innovations",
    date: "February 20, 2026",
    excerpt: "The annual BECON technology festival at IIT Delhi highlighted significant advancements in autonomous robotics and low-cost medical diagnostics.",
    content: `The Indian Institute of Technology Delhi hosted its annual BECON technology festival, drawing thousands of engineering students, researchers, and industry scouts. The 2026 iteration of the event was dominated by breakthroughs in applied robotics and healthcare hardware.

One of the standout exhibits featured a team of undergraduate students who developed an autonomous drone system capable of navigating dense urban environments for rapid medical deliveries. Another highly praised project was a low-cost, portable diagnostic device utilizing computer vision to detect early-stage crop diseases.

Industry representatives present at the event noted a marked shift in student focus from software engineering to hardware and physical engineering. Several student teams received immediate incubation offers from domestic venture capital firms, highlighting the growing commercial viability of university-level research in India.`
  },
  {
    id: "india-innovates-2026",
    title: "India Innovates 2026: 'Bits & Bytes' Event Charts Digital Future",
    date: "January 15, 2026",
    excerpt: "The inaugural 'India Innovates: Bits & Bytes' conference at Bharat Mandapam opened the year with major announcements regarding domestic semiconductor manufacturing.",
    content: `The inaugural 'India Innovates: Bits & Bytes' conference commenced at the Bharat Mandapam, setting an aggressive technological agenda for 2026. The event, attended by leading domestic industrialists and international supply chain partners, focused on accelerating India's hardware manufacturing capabilities.

The centerpiece of the conference was the announcement of three new semiconductor fabrication facilities, backed by significant government subsidies under the expanded Production Linked Incentive (PLI) scheme. These facilities will focus on trailing-node chips crucial for the automotive and telecommunications sectors.

Panel discussions highlighted the strategic necessity of reducing reliance on imported hardware components. Industry leaders emphasized that while India has established dominance in IT services, securing the physical supply chain is the critical next step for national economic security. The event concluded with pledges for increased public-private partnerships in technical skills training.`
  }
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}
