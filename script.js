document.addEventListener('DOMContentLoaded', function() {
    const repoOwner = 'OWNER_NAME'; // TOM-SYY repository
    const repoName = 'REPO_NAME'; // PR-Status repository
    const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/pulls`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const prList = document.getElementById('pr-list');
            data.forEach(pr => {
                const prItem = document.createElement('div');
                prItem.className = 'pr-item';

                const prTitle = document.createElement('div');
                prTitle.className = 'pr-title';
                prTitle.textContent = pr.title;

                const prStatus = document.createElement('div');
                prStatus.className = 'pr-status';
                prStatus.textContent = `Status: ${pr.state}`;

                prItem.appendChild(prTitle);
                prItem.appendChild(prStatus);
                prList.appendChild(prItem);
            });
        })
        .catch(error => console.error('Error fetching PRs:', error));
});
