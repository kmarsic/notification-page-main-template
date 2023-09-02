const notificationWrapper= document.querySelectorAll(".notificationWrapper");
const markAsRead = document.getElementById("markRead");
const notificationCount = document.getElementById("notificationCount");

let totalNotifications = 0;

notificationWrapper.forEach(notification => {
    const circleDiv = document.createElement("div");
    circleDiv.classList.add("circle-style");
    let currentParagraph = notification.firstElementChild.nextElementSibling.firstElementChild;
    currentParagraph.insertAdjacentElement("beforeend", circleDiv);
    updateTotalNotifications(notification);
 });

markAsRead.addEventListener("click", markAllRead);

notificationWrapper.forEach(notification => {
    notification.addEventListener("click", () => {
        notification.classList.toggle("read");
        addUnreadCircle(notification);
    });
});

function updateTotalNotifications (notification) {
        const readStatus = notification.getAttribute("data-read");
        if (readStatus === "unread"){
            totalNotifications++;
            notificationCount.innerHTML = totalNotifications;
        }
        else if(readStatus ==="read") {
                if(totalNotifications > 0) {
                    totalNotifications--;
                    notificationCount.innerHTML = totalNotifications;
                }
        }
};

function addUnreadCircle (notification) {
    const circleDiv = notification.firstElementChild.nextElementSibling.firstElementChild.lastElementChild;
    circleDiv.classList.add("circle-style");
    console.log(circleDiv)
    const readStatus = notification.getAttribute("data-read");
    if (readStatus === "read") {
        circleDiv.classList.add("circle-style");
        notification.setAttribute("data-read", "unread");
    };

    if (readStatus === "unread") {   
        circleDiv.classList.remove("circle-style");
        notification.setAttribute("data-read", "read");
    };
    updateTotalNotifications(notification);
};

function markAllRead() {
    if (totalNotifications > 0) {
        notificationWrapper.forEach(notification => {
            notification.setAttribute("data-read", "unread");
            notification.classList.add("read");
            addUnreadCircle(notification);
    });
};
};






