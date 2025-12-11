// ContentCraft AI - Interactive JavaScript

// Content generation data and templates
const contentTemplates = {
    instagram: {
        motivational: [
            "🌟 {topic}: Remember, every step forward counts! 💪\n\nSometimes the journey seems long, but you're stronger than you think. Each challenge you face is preparing you for something amazing.\n\n✨ Your determination is your superpower.\n\nWhat's one thing you're proud of today? 👇",
            "💡 {topic} Inspiration:\n\n1. 🌱 Start where you are\n2. 🎯 Focus on progress, not perfection\n3. 🔥 Trust your instincts\n4. 💪 Celebrate small wins\n5. 🚀 Keep moving forward\n\nYou’ve got this! What step will you take today?",
            "✨ {topic} mindset shift:\n\nInstead of 'I can't do this' → 'I'm learning how to do this'\n\nInstead of 'This is too hard' → 'This will make me stronger'\n\nInstead of 'I'm not ready' → 'I'll be ready when I start'\n\nYour thoughts shape your reality. Choose wisely! 💭\n\n#Motivation #Mindset #Growth"
        ],
        tips: [
            "💡 {topic} tips that actually work:\n\n✅ Tip 1: [Specific actionable advice]\n✅ Tip 2: [Real-world application]\n✅ Tip 3: [Proven strategy]\n✅ Tip 4: [Expert insight]\n✅ Tip 5: [Bonus advice]\n\nWhich one resonates with you the most? Comment below! 👇",
            "🎯 {topic} game-changers:\n\nThese strategies changed everything for me:\n\n1. [Strategy name] - Why it works\n2. [Strategy name] - How to implement\n3. [Strategy name] - Expected results\n\nTry one and let me know how it goes! \n\n#Productivity #LifeHacks #Success"
        ],
        industry: [
            "🏢 {topic} insights:\n\nThe industry is evolving, and here’s what you need to know:\n\n📈 Trend 1: [Current trend]\n📈 Trend 2: [Market development]\n📈 Trend 3: [Future opportunity]\n\nStay ahead of the curve. What trends are you watching?",
            "💼 {topic} professional tips:\n\n[Number] things I wish I knew earlier:\n\n1. [Insight with explanation]\n2. [Lesson learned]\n3. [Mistake to avoid]\n4. [Success strategy]\n5. [Long-term advice]\n\nWhat would you add to this list? 💭"
        ]
    },
    twitter: {
        motivational: [
            "🚀 {topic}: Your only limit is YOU. Break through today. 💪\n\nEvery expert was once a beginner.\nEvery pro was once an amateur.\nEvery icon was once an unknown.\n\nStart where you are. Use what you have. Do what you can. 🎯\n\n#MondayMotivation #Growth #Mindset",
            "💡 {topic} truth:\n\nSuccess isn't about perfection.\nIt's about persistence.\n\nKeep going. You're closer than you think. ✨\n\n#Motivation #Success #KeepGoing"
        ],
        tips: [
            "🧵 {topic} THREAD: [Number] game-changing tips\n\n1/ [First tip with brief explanation]\n\n2/ [Second tip with context]\n\n3/ [Third tip with actionable advice]\n\n4/ [Fourth tip with example]\n\n5/ [Final tip with call to action]\n\nRT if this helped! 🔄",
            "💡 {topic} tip that changed everything:\n\n[Specific actionable advice with context]\n\nWhy it works: [Brief explanation]\n\nTry it and let me know how it goes! 👇\n\n#Tips #Productivity #Advice"
        ],
        industry: [
            "📊 {topic} update:\n\n[Current trend/development]\n\nKey takeaway: [Main insight]\n\nWhat this means for you: [Implication]\n\nYour thoughts? 🤔\n\n#Industry #Trends #Insights",
            "🔥 {topic} hot take:\n\n[Controversial but thought-provoking statement]\n\nHere's why I think this: [Reasoning]\n\nAgree or disagree? Let me know below 👇\n\n#Opinion #Industry #HotTake"
        ]
    },
    linkedin: {
        motivational: [
            "🌟 {topic}: A reflection on resilience and growth\n\nIn my journey, I've learned that true strength comes not from avoiding challenges, but from embracing them as opportunities for development.\n\nEvery setback has taught me something valuable:\n• [Lesson 1]\n• [Lesson 2] \n• [Lesson 3]\n\nThe path isn't always easy, but it's always worth it.\n\nWhat challenges have shaped your growth? I'd love to hear your stories in the comments.\n\n#Leadership #Growth #Resilience",
            "💪 {topic}: Why persistence beats perfection\n\nAfter years in [industry], I've observed that consistent effort trumps perfect execution every time.\n\nHere's what I've learned:\n\n✓ Progress compounds over time\n✓ Small steps create big changes\n✓ Momentum builds confidence\n✓ Learning from failure accelerates growth\n\nThe key? Start before you're ready. Your future self will thank you.\n\nWhat's one thing you're committing to today?\n\n#ProfessionalGrowth #Mindset #Success"
        ],
        tips: [
            "📈 {topic}: [Number] strategies that deliver results\n\nHaving worked with [target audience], I've identified these proven approaches:\n\n1. [Strategy name]\n   Why it works: [Brief explanation]\n   Implementation: [How to start]\n\n2. [Strategy name]\n   Why it works: [Brief explanation]\n   Implementation: [How to start]\n\n3. [Strategy name]\n   Why it works: [Brief explanation]\n   Implementation: [How to start]\n\nWhich resonates most with your current goals?\n\n#Strategy #Results #BusinessGrowth",
            "🎯 {topic}: A practical framework for success\n\nAfter analyzing hundreds of cases, here's what consistently works:\n\n📋 The 3-Part Framework:\n\n1. PREPARE\n   • [Preparation step]\n   • [Preparation step]\n   • [Preparation step]\n\n2. EXECUTE\n   • [Execution step]\n   • [Execution step]\n   • [Execution step]\n\n3. OPTIMIZE\n   • [Optimization step]\n   • [Optimization step]\n   • [Optimization step]\n\nSimple? Yes. Effective? Absolutely.\n\nWhat frameworks have worked best for you?\n\n#Frameworks #Strategy #Execution"
        ],
        industry: [
            "📊 {topic}: Market insights and what they mean for professionals\n\nThe latest data reveals [key trend/development]. Here's what this means for your career:\n\n🔍 Key Observations:\n• [Observation 1]\n• [Observation 2]\n• [Observation 3]\n\n💡 Strategic Implications:\n• [Implication 1]\n• [Implication 2]\n• [Implication 3]\n\n🎯 Actionable Next Steps:\n• [Action step 1]\n• [Action step 2]\n• [Action step 3]\n\nThe future belongs to those who prepare today.\n\n#IndustryInsights #CareerStrategy #MarketTrends",
            "🚀 {topic}: Why adaptation is your competitive advantage\n\nIn rapidly evolving markets, the ability to pivot isn't optional—it's essential.\n\nHere's my framework for staying ahead:\n\n🔄 The Adaptation Cycle:\n1. MONITOR → Stay informed about changes\n2. ANALYZE → Assess impact on your goals\n3. EXPERIMENT → Test new approaches\n4. INTEGRATE → Adopt what works\n5. REPEAT → Continuous improvement\n\nThe goal isn't to predict the future perfectly—it's to respond effectively.\n\nHow do you stay adaptable in your field?\n\n#Adaptability #Innovation #FutureReady"
        ]
    },
    tiktok: {
        motivational: [
            "POV: You're about to discover the secret to {topic} 💫\n\n*Shows transformation or breakthrough moment*\n\nIt all starts with [first step]\nThen you [second action]\nAnd suddenly... [result/transformation]\n\nThe magic isn't in the destination—it's in the daily choice to show up. ✨\n\n#Motivation #Mindset #Growth #Success #Inspiration",
            "Tell me you understand {topic} without telling me you understand {topic} 😏\n\n*Shows relatable situation or moment of realization*\n\nThat feeling when you finally [understand/achieve/experience]...\n\nAnd you're like 'Oh, SO that's what they meant!' 🤯\n\nWe've all been there! What was your 'aha' moment? 👇\n\n#Relatable #MindBlown #LifeLessons #Growth"
        ],
        tips: [
            "5 {topic} tips that actually work 🤯\n\n1. [Quick tip with visual]\n2. [Quick tip with demonstration]\n3. [Quick tip with example]\n4. [Quick tip with result]\n5. [Quick tip with bonus insight]\n\n*Shows before/after or transformation*\n\nWhich one surprised you most? Comment below! 👇\n\n#Tips #LifeHacks #GameChanger #Productivity",
            "Why didn't anyone tell me this about {topic} sooner? 😱\n\n*Shows common mistake or overlooked insight*\n\nI wish I knew [specific advice] when I started because [reason/benefit]\n\nInstead of [common approach], try [better approach] ✨\n\nThis one change made such a difference for me!\n\n#GameChanger #WishIKnew #Tips #LifeLessons"
        ],
        industry: [
            "Things I wish I knew about {topic} before I started 🎯\n\n*Shows progression from confusion to clarity*\n\n1. [Lesson 1 with visual]\n2. [Lesson 2 with example]\n3. [Lesson 3 with result]\n4. [Lesson 4 with context]\n5. [Lesson 5 with insight]\n\nThe industry isn't as intimidating once you understand [key insight] 🎉\n\nWhat would you add to this list? 👇\n\n#Industry #Lessons #Growth #Professional",
            "Red flags in {topic} that everyone ignores 🚩\n\n*Shows warning signs or common mistakes*\n\n🚩 Sign 1: [Red flag with explanation]\n🚩 Sign 2: [Red flag with example]\n🚩 Sign 3: [Red flag with context]\n\nKnowing these early saved me so much time and stress! ⏰\n\nHave you encountered any of these? Tell me in the comments!\n\n#RedFlags #Awareness #Warning #Industry"
        ]
    }
};

// Sample generated content for demo
const sampleContent = {
    instagram: "🌟 Monday Motivation: Every challenge is a chance to grow stronger! 💪\n\nSometimes life throws curveballs that seem impossible to handle. But here's the truth - you've already overcome 100% of your bad days so far. \n\n✨ Your past victories prove you're capable of handling whatever comes next.\n\nToday's challenge isn't here to break you - it's here to build you into someone even more resilient.\n\nWhat challenge are you turning into your superpower today? \n\n#MondayMotivation #Growth #Resilience #Success #Mindset #Monday #Inspiration #Goals #Strength #Overcome",
    
    twitter: "🚀 Monday Motivation: Your only limit is YOU. Break through today. 💪\n\nEvery expert was once a beginner.\nEvery pro was once an amateur.\nEvery icon was once an unknown.\n\nStart where you are. Use what you have. Do what you can. 🎯\n\n#MondayMotivation #Growth #Mindset",
    
    linkedin: "🌟 Monday Motivation: A reflection on resilience and growth\n\nIn my journey, I've learned that true strength comes not from avoiding challenges, but from embracing them as opportunities for development.\n\nEvery setback has taught me something valuable:\n• Challenges build character\n• Failure provides learning opportunities\n• Persistence creates lasting change\n\nThe path isn't always easy, but it's always worth it.\n\nWhat challenges have shaped your growth? I'd love to hear your stories in the comments.\n\n#Leadership #Growth #Resilience",
    
    tiktok: "POV: You're about to discover the secret to Monday motivation 💫\n\n*Shows transformation from Monday blues to motivation*\n\nIt all starts with changing your mindset\nThen you focus on small wins\nAnd suddenly... Monday becomes your favorite day! ✨\n\nThe magic isn't in the destination—it's in the daily choice to show up. \n\n#Motivation #Mindset #Growth #Success #Inspiration #Monday #MondayMotivation"
};

// Platform-specific hashtags
const platformHashtags = {
    instagram: ['#Instagram', '#InstaDaily', '#ContentCreator', '#SocialMedia', '#Marketing'],
    twitter: ['#Twitter', '#SocialMedia', '#Marketing', '#Content'],
    linkedin: ['#LinkedIn', '#Professional', '#Business', '#Leadership', '#Career'],
    tiktok: ['#TikTok', '#ForYou', '#FYP', '#Viral', '#ContentCreator']
};

// Generate content function
function generateContent() {
    const input = document.getElementById('heroInput').value.trim();
    if (!input) {
        alert('Please enter a topic for content generation!');
        return;
    }
    
    // Show loading state
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Generating...';
    button.disabled = true;
    
    // Simulate AI generation delay
    setTimeout(() => {
        const platform = 'instagram'; // Default to Instagram for demo
        const contentType = 'motivational'; // Default type
        const templates = contentTemplates[platform][contentType];
        const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
        const generatedContent = randomTemplate.replace(/{topic}/g, input);
        
        // Add relevant hashtags
        const hashtags = platformHashtags[platform].slice(0, 3).join(' ');
        const finalContent = generatedContent + '\n\n' + hashtags;
        
        // Show success and redirect to demo
        button.textContent = 'Content Generated!';
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            
            // Scroll to demo section
            document.querySelector('.demo-section').scrollIntoView({ 
                behavior: 'smooth' 
            });
            
            // Pre-fill demo input
            document.getElementById('demoInput').value = input;
            
            // Update demo result
            updateDemoResult(platform, input);
            
        }, 2000);
    }, 1500);
}

// Demo generate function
function demoGenerate() {
    const input = document.getElementById('demoInput').value.trim();
    if (!input) {
        alert('Please enter a topic for content generation!');
        return;
    }
    
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Generating...';
    button.disabled = true;
    
    // Simulate AI generation
    setTimeout(() => {
        const platform = document.querySelector('.tab.active').dataset.platform;
        updateDemoResult(platform, input);
        
        button.textContent = originalText;
        button.disabled = false;
    }, 1000);
}

// Update demo result
function updateDemoResult(platform, topic) {
    const resultContent = document.getElementById('resultContent');
    const platformBadge = document.querySelector('.platform-badge');
    
    // Platform emojis
    const platformEmojis = {
        instagram: '📷',
        twitter: '🐦',
        linkedin: '💼',
        tiktok: '🎵'
    };
    
    platformBadge.textContent = platformEmojis[platform] + ' ' + platform.charAt(0).toUpperCase() + platform.slice(1);
    
    // Generate content based on platform and topic
    const templates = contentTemplates[platform];
    const contentTypes = Object.keys(templates);
    const randomType = contentTypes[Math.floor(Math.random() * contentTypes.length)];
    const template = templates[randomType][Math.floor(Math.random() * templates[randomType].length)];
    
    const generatedContent = template.replace(/{topic}/g, topic);
    resultContent.textContent = generatedContent;
}

// Copy content function
function copyContent() {
    const content = document.getElementById('resultContent').textContent;
    navigator.clipboard.writeText(content).then(() => {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.style.color = 'var(--success)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.color = '';
        }, 2000);
    });
}

// Modal functions
function showLogin() {
    document.getElementById('loginModal').classList.add('active');
}

function showSignup() {
    document.getElementById('signupModal').classList.add('active');
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

// Platform tabs functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const platform = this.dataset.platform;
            const demoInput = document.getElementById('demoInput').value;
            
            if (demoInput.trim()) {
                updateDemoResult(platform, demoInput);
            }
        });
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Contact sales function
function contactSales() {
    // In a real application, this would open a contact form or redirect to sales page
    alert('Thank you for your interest! Our sales team will contact you within 24 hours.\n\nFor immediate assistance, email us at sales@contentcraftai.com');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate login/signup
            const button = form.querySelector('button[type="submit"]');
            const originalText = button.textContent;
            button.textContent = 'Processing...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Success!';
                button.style.background = 'var(--success)';
                
                setTimeout(() => {
                    closeModal();
                    alert('Account created successfully! Welcome to ContentCraft AI.');
                    button.textContent = originalText;
                    button.disabled = false;
                    button.style.background = '';
                    form.reset();
                }, 2000);
            }, 1500);
        });
    });
});

// Add scroll effects
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = '#FFFFFF';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

// Analytics tracking (placeholder)
function trackEvent(action, category = 'User Interaction') {
    // In a real application, this would send data to analytics service
    console.log('Event tracked:', { action, category, timestamp: new Date() });
}

// Track button clicks
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('Button Click', 'Navigation');
        });
    });
});