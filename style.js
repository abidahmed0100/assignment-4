
const totalCount = document.querySelector('.total p');
const interviewCount = document.querySelector('.interview p');
const rejectedCount = document.querySelector('.rejected p');
const tabCount = document.getElementById('tabCount');

let currentTab = "all";



function updateCount() {

    const allCards = document.querySelectorAll('.job-card');
    const interviewCards = document.querySelectorAll('.job-card[data-status="Interview"]');
    const rejectedCards = document.querySelectorAll('.job-card[data-status="Rejected"]');

    totalCount.innerText = allCards.length;
    interviewCount.innerText = interviewCards.length;
    rejectedCount.innerText = rejectedCards.length;
}



function handleInterview(card) {

    const statusBtn = card.querySelector('.not-btn');

    card.setAttribute('data-status', 'Interview');

    statusBtn.innerText = "INTERVIEW";
    statusBtn.className = "not-btn font-bold bg-green-100 text-green-600 p-2";

    updateCount();
    showTab(currentTab);
}



function handleReject(card) {

    const statusBtn = card.querySelector('.not-btn');

    card.setAttribute('data-status', 'Rejected');

    statusBtn.innerText = "REJECTED";
    statusBtn.className = "not-btn font-bold bg-red-100 text-red-600 p-2";

    updateCount();
    showTab(currentTab);
}



function handleDelete(card) {
    card.remove();
    updateCount();
    showTab(currentTab);
}



document.addEventListener('click', function(e) {

    const card = e.target.closest('.job-card');
    if (!card) return;

    if (e.target.classList.contains('inter-btn')) {
        handleInterview(card);
    }

    if (e.target.classList.contains('reject-btn')) {
        handleReject(card);
    }

    if (e.target.closest('.dust-btn')) {
        handleDelete(card);
    }

});



function showTab(type) {

    currentTab = type;

    const allCards = document.querySelectorAll('.job-card');
    let visibleCount = 0;

    allCards.forEach(card => {

        if (type === 'all') {
            card.style.display = "flex";
            visibleCount++;
        }
        else {
            if (card.getAttribute('data-status') === type) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        }

    });

    tabCount.innerText = visibleCount + " jobs";

    showEmptyState(visibleCount, type);
}



function showEmptyState(count, type) {

    let emptySection = document.getElementById("empty-state");

    if (!emptySection) {
        emptySection = document.createElement("div");
        emptySection.id = "empty-state";
        emptySection.className = "w-[80%] mx-auto text-center mt-10";
        document.body.appendChild(emptySection);
    }

    if (count === 0 && type !== "all") {
        emptySection.innerHTML = `
            <img src="image/image.png" class="mx-auto w-40 mb-4" />
            <h2 class="text-xl font-bold text-gray-600">No Job Available</h2>
            <p class="text-gray-500 mt-2">Start applying to jobs to see them here.</p>
        `;
    } else {
        emptySection.innerHTML = "";
    }
}


updateCount();