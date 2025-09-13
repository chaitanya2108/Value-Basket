// Main JavaScript for Flask app

// Check application status
async function checkStatus() {
  const statusContent = document.getElementById("status-content");
  const button = event.target;
  const originalText = button.innerHTML;

  // Show loading state
  button.innerHTML =
    '<span class="spinner-border spinner-border-sm me-2"></span>Checking...';
  button.disabled = true;

  try {
    const response = await fetch("/api/status");
    const data = await response.json();

    if (data.status === "success") {
      statusContent.innerHTML = `
                <div class="alert alert-success d-flex align-items-center">
                    <span class="status-indicator status-success"></span>
                    <div>
                        <strong>Application Status:</strong> ${data.message}<br>
                        <small class="text-muted">Version: ${data.version}</small>
                    </div>
                </div>
            `;
    } else {
      throw new Error(data.message || "Unknown error");
    }
  } catch (error) {
    statusContent.innerHTML = `
            <div class="alert alert-danger d-flex align-items-center">
                <span class="status-indicator status-error"></span>
                <div>
                    <strong>Error:</strong> ${error.message}
                </div>
            </div>
        `;
  } finally {
    // Restore button state
    button.innerHTML = originalText;
    button.disabled = false;
  }
}

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling to all anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Add fade-in animation to cards
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  });

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
});

// Add click animation to buttons
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    e.target.style.transform = "scale(0.95)";
    setTimeout(() => {
      e.target.style.transform = "";
    }, 150);
  }
});

// Console welcome message
console.log(
  "%c🚀 Flask App Started!",
  "color: #667eea; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cWelcome to your Flask application!",
  "color: #28a745; font-size: 14px;"
);
