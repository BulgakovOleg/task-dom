export function appendToBody(tag, content, count) {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
        const element = document.createElement(tag);
        element.textContent = content;
        fragment.appendChild(element);
    }
    document.body.appendChild(fragment);
}

export function generateTree(childrenCount, level) {
    function buildNode(currentLevel) {
        const node = document.createElement('div');

        node.classList.add(`item_${currentLevel}`);

        if (currentLevel >= level) {
            return node;
        }

        for (let i = 0; i < childrenCount; i++) {
            const child = buildNode(currentLevel + 1);
            node.appendChild(child);
        }

        return node;
    }
    return level > 0 ? buildNode(1) : null;
}

export function replaceNodes() {
    const root = generateTree(2, 3);

    if (!root) return null;

    const items2 = root.querySelectorAll('.item_2');

    items2.forEach((oldNode) => {
        const sectionNode = document.createElement('section');

        sectionNode.className = oldNode.className;

        sectionNode.append(...oldNode.childNodes);

        oldNode.replaceWith(sectionNode);
    });

    return root;
}
