let x = 0;
let y = 0;

function updateStatusInterview(id1) {
    const status = document.getElementById(id1);
    status.innerText = 'Interview';
    status.classList.remove('text-red-400');
    status.classList.add('text-green-400');
}

function updateStatusRejected(id1) {
    const status = document.getElementById(id1);
    status.innerText = 'Rejected';
    status.classList.remove('text-green-400');
    status.classList.add('text-red-400');
}

function onInterviewButton(id, id1, id2) {
    updateStatusInterview(id1);

    const mainCard = document.getElementById(id);
    const interviewContainer = document.getElementById("available-interview");
    const rejectedContainer = document.getElementById("available-rejected");

    if (interviewContainer.children.length === 1 && x === 0) {
        interviewContainer.innerHTML = "";
        x++;
    }

    const cloneId = id + "-interview";
    const exist = document.getElementById(cloneId);

    if (!exist) {
        const clonedCard = mainCard.cloneNode(true);
        clonedCard.id = cloneId;
        interviewContainer.appendChild(clonedCard);

        const countText = document.getElementById(id2);
        countText.innerText = Number(countText.innerText) + 1;
    }

    const rejectedCloneId = id + "-rejected";
    const existingRejected = document.getElementById(rejectedCloneId);

    if (existingRejected) {
        existingRejected.remove();

        const rejectedCountText = document.getElementById("rejected-count");
        rejectedCountText.innerText = Number(rejectedCountText.innerText) - 1;
    }
}

function onRejectedButton(id, id1, id2) {
    updateStatusRejected(id1);

    const mainCard = document.getElementById(id);
    const interviewContainer = document.getElementById("available-interview");
    const rejectedContainer = document.getElementById("available-rejected");

    if (rejectedContainer.children.length === 1 && y === 0) {
        rejectedContainer.innerHTML = "";
        y++;
    }

    const cloneId = id + "-rejected";
    const exist = document.getElementById(cloneId);

    if (!exist) {
        const clonedCard = mainCard.cloneNode(true);
        clonedCard.id = cloneId;
        rejectedContainer.appendChild(clonedCard);

        const countText = document.getElementById(id2);
        countText.innerText = Number(countText.innerText) + 1;
    }

    const interviewCloneId = id + "-interview";
    const existingInterview = document.getElementById(interviewCloneId);

    if (existingInterview) {
        existingInterview.remove();

        const interviewCountText = document.getElementById("Interview-count");
        interviewCountText.innerText = Number(interviewCountText.innerText) - 1;
    }
}

function deleteCard(id) {
    const mainCard = document.getElementById(id);
    mainCard.classList.add('hidden');

    const totalCountText = document.getElementById("total-count");
    totalCountText.innerText = Number(totalCountText.innerText) - 1;

    const interviewCloneId = id + "-interview";
    const existingInterview = document.getElementById(interviewCloneId);
    if (existingInterview) {
        existingInterview.remove();

        const interviewCountText = document.getElementById("Interview-count");
        interviewCountText.innerText = Number(interviewCountText.innerText) - 1;
    }

    const rejectedCloneId = id + "-rejected";
    const existingRejected = document.getElementById(rejectedCloneId);
    if (existingRejected) {
        existingRejected.remove();

        const rejectedCountText = document.getElementById("rejected-count");
        rejectedCountText.innerText = Number(rejectedCountText.innerText) - 1;
    }
}