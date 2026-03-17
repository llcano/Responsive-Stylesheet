/**
 * UI Layout Monitor
 * Monitors viewport width to log current layout state 
 * based on 772px and 998px breakpoints.
 */

const monitorLayout = () => {
    const tabletView = window.matchMedia("(min-width: 772px) and (max-width: 997px)");
    const largeScreenView = window.matchMedia("(min-width: 998px)");
    const mobileView = window.matchMedia("(max-width: 771px)");

    const updateStatus = () => {
        if (largeScreenView.matches) {
            console.log("Layout State: Large Screen View (Divs: 30vw)");
        } else if (tabletView.matches) {
            console.log("Layout State: Tablet View (Divs: 45vw, Img Max-Height: 30vh)");
        } else if (mobileView.matches) {
            console.log("Layout State: Mobile View (Default Styles)");
        }
    };

    // Initial check
    updateStatus();

    // Event listeners for viewport resizing
    tabletView.addEventListener("change", updateStatus);
    largeScreenView.addEventListener("change", updateStatus);
    mobileView.addEventListener("change", updateStatus);
};

// Execute monitor once DOM is fully loaded
document.addEventListener("DOMContentLoaded", monitorLayout);
