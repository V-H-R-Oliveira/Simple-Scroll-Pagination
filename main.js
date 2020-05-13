const results = document.getElementById("output");
let offset = 0;

async function loadPosts() {
    const { mountCard, buildUrl } = await import("./operations.mjs");
    const url = buildUrl(offset);
    const fetchHandler = await fetch(url);
    const posts = await fetchHandler.json();

    try {
        let output = "";
        posts.map(post => output += mountCard(post));
        results.innerHTML += output;
    } catch (e) {
        console.error(e);
    }
}

globalThis.onload = loadPosts;

globalThis.onscroll = () => {
    if (globalThis.scrollMaxY === globalThis.pageYOffset) {
        offset += 8;
        loadPosts();
    }
}