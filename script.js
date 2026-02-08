// 1. Set Today's Date in the Top Bar
const dateElement = document.getElementById("current-date");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();

dateElement.innerText = today.toLocaleDateString("en-US", options).toUpperCase();

// 2. Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// 3. Simple Console Greeting
console.log("The Capital Logic system loaded.");


// --- DYNAMIC POSTS DATABASE ---
const blogPosts = [
    // Add your newest post here at the TOP
    {
        title: "The ROI of Deep Work",
        category: "Strategy",
        date: "Feb 08, 2026",
        image: "https://via.placeholder.com/400x300?text=Strategy", // Replace with real image URL
        link: "strategy.html"
    },
    {
        title: "5 Assets That Beat Inflation",
        category: "Investing",
        date: "Feb 05, 2026",
        image: "https://via.placeholder.com/400x300?text=Gold",
        link: "investing.html"
    },
    {
        title: "Stop Buying Coffee? The Math.",
        category: "Frugal Living",
        date: "Jan 28, 2026",
        image: "https://via.placeholder.com/400x300?text=Coffee",
        link: "frugal.html"
    },
    {
        title: "Blue Ocean Strategy Explained",
        category: "Strategy",
        date: "Jan 15, 2026",
        image: "https://via.placeholder.com/400x300?text=Blue+Ocean",
        link: "strategy.html"
    },
    {
        title: "How to Read a Balance Sheet",
        category: "Investing",
        date: "Jan 10, 2026",
        image: "https://via.placeholder.com/400x300?text=Balance+Sheet",
        link: "investing.html"
    },
    // Add more posts as needed...
];

// --- RENDER POSTS FUNCTION ---
function renderPosts(posts) {
    const grid = document.getElementById('posts-grid');
    grid.innerHTML = ''; // Clear existing posts

    // Limit to most recent 4 (or 8 for two rows)
    const displayPosts = posts.slice(0, 8); 

    displayPosts.forEach(post => {
        const postHTML = `
            <article class="post-card fade-in">
                <a href="${post.link}">
                    <div class="post-thumb" style="background-image: url('${post.image}');"></div>
                    <div class="post-details">
                        <span class="post-cat">${post.category}</span>
                        <h3>${post.title}</h3>
                        <span class="post-date">${post.date}</span>
                    </div>
                </a>
            </article>
        `;
        grid.innerHTML += postHTML;
    });
}

// --- FILTER FUNCTION ---
function filterPosts(category) {
    // 1. Update Buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText === category || (category === 'all' && btn.innerText === 'All')) {
            btn.classList.add('active');
        }
    });

    // 2. Filter Logic
    if (category === 'all') {
        renderPosts(blogPosts);
    } else {
        const filtered = blogPosts.filter(post => post.category === category);
        renderPosts(filtered);
    }
}

// --- INITIAL LOAD ---
// Load all posts when the page opens
document.addEventListener('DOMContentLoaded', () => {
    renderPosts(blogPosts);
});
