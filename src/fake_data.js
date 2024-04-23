export const data = [
    {
        "name": "Michael Thompson",
        "summary": "VP of Sales at InnovateTech, overseeing large-scale sales operations across North America with a strong focus on integrating new technologies to enhance sales effectiveness.",
        "relevance": "Michael is highly relevant as he oversees sales strategy at a large tech firm that could benefit greatly from AI-driven sales automation and personalization.",
        "pitch": "Hi Michael, I noticed your focus on tech-driven sales solutions. VIDA-AI can enhance your sales processes with our AI personalization, boosting your team's efficiency and close rates."
    },
    {
        "name": "Samantha Lee",
        "summary": "Sales Director at GlobalSoft, responsible for digital transformation projects within the sales department, looking for innovative solutions to drive performance.",
        "relevance": "Samantha is a perfect match for VIDA-AI given her role in spearheading digital transformation in sales at a leading software company.",
        "pitch": "Hello Samantha, I’m reaching out to introduce VIDA-AI, where we specialize in leveraging AI to transform sales operations. Let's explore how we can drive your sales performance together."
    },
    {
        "name": "David Zheng",
        "summary": "VP of Sales at NextGen Technologies, with a focus on adopting cutting-edge tools for enhancing sales team productivity and customer engagement.",
        "relevance": "David's interest in advanced tools for improving sales productivity makes him an ideal candidate for VIDA-AI’s solutions.",
        "pitch": "Hi David, your strategy aligns perfectly with our AI solutions at VIDA-AI, designed to maximize sales productivity. Let’s discuss how we can help your team achieve superior results."
    },
    {
        "name": "Elizabeth Johnson",
        "summary": "Sales Director at TechPioneer, managing a team of 300+ sales professionals and continually seeking ways to improve sales techniques and tools.",
        "relevance": "Elizabeth's role in managing a large sales force and her interest in improving sales tools align well with VIDA-AI’s offerings.",
        "pitch": "Hello Elizabeth, I see you’re leading sales innovations at TechPioneer. VIDA-AI can offer bespoke AI tools to elevate your team's performance. Interested in a quick chat?"
    },
    {
        "name": "Robert Castillo",
        "summary": "VP of Sales at CyberLink Solutions, a front-runner in cybersecurity solutions with an emphasis on adopting AI and ML for business operations.",
        "relevance": "Robert’s focus on AI and ML for enhancing business operations presents a prime opportunity for VIDA-AI to introduce specific AI solutions for sales.",
        "pitch": "Hi Robert, with your keen interest in AI for business, I believe VIDA-AI’s specialized sales AI tools could significantly enhance your operations. Let’s connect to dive deeper."
    },
    {
        "name": "Anita Rodriguez",
        "summary": "VP of Sales at CloudData Inc., responsible for driving innovation in cloud computing services and enhancing client engagement through technology.",
        "relevance": "Anita's role in pioneering cloud service innovations makes her a prime target for VIDA-AI's AI-driven sales solutions that can enhance client interaction and conversion rates.",
        "pitch": "Hello Anita, I'm excited to introduce VIDA-AI's solutions that can revolutionize your client interactions through AI. Let's discuss potential integrations for CloudData's sales strategies."
    },
    {
        "name": "Jonathan Green",
        "summary": "Sales Director at QuantumTech, focused on expanding the market reach in quantum computing sectors and optimizing sales strategies through advanced analytics.",
        "relevance": "Jonathan's focus on market expansion and data-driven strategies is perfectly aligned with VIDA-AI's capabilities to provide AI-enhanced analytics for sales.",
        "pitch": "Hi Jonathan, VIDA-AI can enhance your sales analytics with our AI tools, helping QuantumTech achieve greater market penetration. Let’s explore this synergy in a brief meeting."
    },
    {
        "name": "Natalie Wu",
        "summary": "VP of Sales at AI Innovations Corp., leading initiatives to integrate AI into traditional industries and exploring new markets for AI applications.",
        "relevance": "Natalie's leadership in AI market applications makes her an ideal prospect for VIDA-AI, which can offer innovative AI solutions for her company’s expanding portfolio.",
        "pitch": "Hello Natalie, your efforts at AI Innovations Corp. to blend AI with traditional markets resonate with our goals at VIDA-AI. Let's connect to discuss collaborative opportunities."
    },
    {
        "name": "Carlos Moreno",
        "summary": "Sales Director at Fintech Solutions Ltd., where he is spearheading the adoption of fintech innovations to streamline payment systems and enhance customer transactions.",
        "relevance": "Carlos's role in advancing fintech solutions matches VIDA-AI’s expertise in optimizing sales operations and customer engagement through AI.",
        "pitch": "Hi Carlos, with your focus on fintech innovations, VIDA-AI's AI solutions could dramatically improve your sales operations. Interested in a demo?"
    },
    {
        "name": "Jessica Tate",
        "summary": "VP of Sales at NextWave Software, specializing in software solutions for the education sector, looking to enhance user experience and retention.",
        "relevance": "Jessica's commitment to improving user experience in educational software aligns with VIDA-AI’s ability to personalize interactions and increase user engagement through AI.",
        "pitch": "Hello Jessica, I believe VIDA-AI's personalized AI tools could greatly enhance NextWave Software's user experience. Let's discuss how we can work together to boost your sales."
    }
];

export const init_messages = [
    {
        type: "message",
        message: {
            content: "Hi. I am VIDA, your AI assistant for B2B Sales. We are building AI to enhance B2B leads qualification and personalized outreach. " +
                "For sales and integration with your CRM system, please contact Jacob at " +
                "yrafati@gmail.com",
            role: "system"
        }
    },
    {
        type: "message",
        message: {
            content: "Problem: One of the major reason for success or failure in Sales is prospecting. " +
                "Did you know, you are limited to send only 50 connections a day in LinkedIn Sales Navigator. " +
                "This is LinkedIn policy to avoid spamming wrong people. But it is so time consuming to find the right leads manually.",
            role: "system"
        }
    },
    {
        type: "message",
        message: {
            content: "Solution: We are developing tech to tackle this problem. Our AI will enhance the B2B sales by picking the top " +
                "qualified leads from all available ones. " +
                "We prompt engineered GPT to understand any B2B company, product and vision.",
            role: "system"
        }
    },
    {
        type: "message",
        message: {
            content: "Tell us about your role, your company and product you want to sell.",
            role: "assistant"
        }
    },
    {
        type: "message",
        message: {
            content: "I am Jacob Rafati, founder of VIDA-AI. We are building AI to enhance B2B leads qualification and personalized outreach.",
            role: "user"
        }
    },
    {
        type: "message",
        message: {
            content: "What is your pricing model?",
            role: "assistant"
        }
    },
    {
        type: "message",
        message: {
            content: "We are charging per lead.",
            role: "user"
        }
    },
    {
        type: "message",
        message: {
            content: "What is your target market?",
            role: "assistant"
        }
    },
    {
        type: "message",
        message: {
            content: "We are targeting B2B companies with sales teams.",
            role: "user"
        }
    },
    {
        type: "message",
        message: {
            content: "We prompt engineered GPT to suggest a relevant outreach campaign.",
            role: "system"
        }
    },

    {
        type: "json",
        message: {
            role: "assistant",
            content: {
                filters: {
                    title: [
                        "sales director",
                        "vp sales"
                    ],
                    location: "United States",
                    headcount: "5000+"
                }
            }
        }
    },
    {
        type: "message",
        message: {
            content: "We build a custom LinkedIn Sales Navigator bot to scrape leads data.",
            role: "system"
        }
    },
    {
        type: "message",
        message: {
            content: "I will search LinkedIn Sales Navigator for sales directors and VPs of sales in B2B companies operating in United States. I will filter companies with 5000+ employees.",
            role: "assistant"
        }
    },
    {
        type: "message",
        message: {
            content: "We prompt engineered GPT to evaluate (and score) the filtered leads, summarizes their information and provide reasons why they are relevant (or not). " +
                "Also, we asked GPT to generate personal pitch to the leads based on their relevance to the product.",
            role: "system"
        }
    },
    {
        type: "message",
        message: {
            content: "I scraped profile data of leads and evaluated them based on your criteria. I picked top 50 most qualified leads. I also generated personal pitch for each of them.",
            role: "assistant"
        }
    },
    {
        type: "button",
        message: {
            content: "Show me the top 10 qualified leads and the reason for their relevance.",
            role: "assistant"
        }
    },
    {
        type: "table",
        message: {
            content: data,
            role: "assistant"
        }
    },
    {
        type: "message",
        message: {
            content: "Obviously, this is just a scrappy example to show how VIDA-AI can help you with your B2B sales. " +
                "We are eager to hear your feedback and suggestions. We want to know your specific needs and requirements." +
                "For sales and integration with your CRM system, please contact Jacob at yrafati@gmail.com. ",
            role: "system"
        }
    },
    {
        type: "message",
        message: {
            content: "We build a custom LinkedIn Sales Navigator bot to interact with the leads and clients.",
            role: "system"
        }
    },
    {
        type: "button",
        message: {
            content: "Send connection requests and a personal pitch to all qualified leads.",
            role: "assistant"
        }
    },
    {
        type: "json",
        message: {
            role: "assistant",
            content: {
                connection_requests: [
                    {
                        "lead_name": "Michael Thompson",
                        "timestamp": "2024-04-20T09:00:00Z",
                        "status": "Sent",
                        "response": "Pending"
                    },
                    {
                        "lead_name": "Samantha Lee",
                        "timestamp": "2024-04-20T09:02:00Z",
                        "status": "Sent",
                        "response": "Pending"
                    },
                    {
                        "lead_name": "David Zheng",
                        "timestamp": "2024-04-20T09:04:00Z",
                        "status": "Sent",
                        "response": "Pending"
                    },
                    {
                        "lead_name": "Elizabeth Johnson",
                        "timestamp": "2024-04-20T09:06:00Z",
                        "status": "Sent",
                        "response": "Pending"
                    },
                    {
                        "lead_name": "Robert Castillo",
                        "timestamp": "2024-04-20T09:08:00Z",
                        "status": "Sent",
                        "response": "Pending"
                    },
                    {
                        "lead_name": "Anita Rodriguez",
                        "timestamp": "2024-04-20T09:10:00Z",
                        "status": "Sent",
                        "response": "Pending"
                    },
                    {
                        "lead_name": "Jonathan Green",
                        "timestamp": "2024-04-20T09:12:00Z",
                        "status": "Sent",
                        "response": "Pending"
                    },
                    {
                        "lead_name": "Natalie Wu",
                        "timestamp": "2024-04-20T09:14:00Z",
                        "status": "Sent",
                        "response": "Pending"
                    },
                    {
                        "lead_name": "Carlos Moreno",
                        "timestamp": "2024-04-20T09:16:00Z",
                        "status": "Sent",
                        "response": "Pending"
                    },
                    {
                        "lead_name": "Jessica Tate",
                        "timestamp": "2024-04-20T09:18:00Z",
                        "status": "Sent",
                        "response": "Pending"
                    }
                ]

            }
        }

    }
];