document.addEventListener("DOMContentLoaded", () => {
    // Fade in when page loads
    document.body.classList.remove("fade-out");

    // Add smooth transition on link clicks
    document.querySelectorAll("a").forEach(link => {
      if (link.hostname === window.location.hostname) {
        link.addEventListener("click", e => {
          // Skip external links
          if (link.target === "_blank" || link.href.includes("#")) return;

          e.preventDefault();
          const url = link.href;

          // Trigger fade out
          document.body.classList.add("fade-out");

          // After animation, go to next page
          setTimeout(() => {
            window.location.href = url;
          }, 600); // same as CSS transition time
        });
      }
    });
  });

  // Start with fade-out so it animates in
  document.body.classList.add("fade-out");