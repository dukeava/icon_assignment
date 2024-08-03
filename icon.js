// Function to add the trashcan icon to existing items
function addIconsToExistingItems() {
    // Select all existing list items
    const listItems = document.querySelectorAll('#codeList li');
    const totalItems = listItems.length;

    for (let i = 0; i < totalItems; i++) {
        // Create a new image element
        const trashIcon = document.createElement('img');
        trashIcon.setAttribute('src', 'path/to/trashcan-icon.png'); // Use the correct path
        trashIcon.setAttribute('alt', 'Delete');
        trashIcon.className = 'listIcon';

        // Add the icon to the current list item
        listItems[i].appendChild(trashIcon);
    }
}

// Function to add a new item
function addItem() {
    const input = document.getElementById('itemInput');
    const newItemText = input.value.trim();
    if (newItemText === '') return; // Do nothing if input is empty

    const newLI = document.createElement('li');
    newLI.textContent = newItemText;

    // Create and add the trashcan icon to the new item
    const trashIcon = document.createElement('img');
    trashIcon.setAttribute('src', 'path/to/trashcan-icon.png'); // Use the correct path
    trashIcon.setAttribute('alt', 'Delete');
    trashIcon.className = 'listIcon';

    newLI.appendChild(trashIcon);

    // Add the new item to the list
    document.getElementById('codeList').appendChild(newLI);

    // Clear the input field
    input.value = '';
}

// Function to handle item selection and removal
function changeProp(e) {
    const target = e.target;
    const tParent = target.parentNode;

    if (target.className === 'listIcon') {
        // Remove the list item if the trashcan icon is clicked
        tParent.remove();
    } else if (tParent.tagName === 'LI') {
        // Toggle gray-out if the list item is clicked
        tParent.classList.toggle('selected');
    }
}

// Event listener for adding new items
document.getElementById('addItemBtn').addEventListener('click', addItem);

// Event listener for list interactions
document.getElementById('codeList').addEventListener('click', changeProp);

// Initialize existing items with icons
addIconsToExistingItems();
