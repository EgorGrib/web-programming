(() => {
    window.onload = () => {
        let perf = performance.getEntriesByType("navigation")[0];

        let nodeItem = document.createElement('h5');
        const pageLoadTime = perf.loadEventStart - perf.loadEventEnd;

        nodeItem.innerHTML = `Page load time <strong>${pageLoadTime} ms</strong>`;

        document.querySelector('footer').append(nodeItem);
    };
})();