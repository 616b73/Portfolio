'use strict';

// Progressive enhancement: the complete profile stays readable without JavaScript.
const tabList = document.querySelector('.tabs');
const tabs = Array.from(tabList.querySelectorAll('.tab'));
const panels = Array.from(document.querySelectorAll('.section'));
const statusFile = document.getElementById('status-file');

function activateTab(tab, moveFocus = false) {
    const sectionId = tab.dataset.section;

    for (const currentTab of tabs) {
        const selected = currentTab === tab;
        currentTab.classList.toggle('active', selected);
        currentTab.setAttribute('aria-selected', String(selected));
        currentTab.tabIndex = selected ? 0 : -1;
    }

    for (const panel of panels) {
        const selected = panel.id === sectionId;
        panel.hidden = !selected;
        panel.classList.toggle('active', selected);
    }

    statusFile.textContent = sectionId;
    if (moveFocus) tab.focus();
}

tabList.setAttribute('role', 'tablist');

for (const tab of tabs) {
    const panel = document.getElementById(tab.dataset.section);
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panel.id);
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', tab.id);
    panel.tabIndex = 0;
    tab.addEventListener('click', () => activateTab(tab));
}

// Arrow keys belong to the tab list, so reading the page never changes sections.
tabList.addEventListener('keydown', event => {
    const currentIndex = tabs.indexOf(event.target);
    if (currentIndex === -1) return;

    let nextIndex;
    switch (event.key) {
        case 'ArrowRight': nextIndex = (currentIndex + 1) % tabs.length; break;
        case 'ArrowLeft': nextIndex = (currentIndex - 1 + tabs.length) % tabs.length; break;
        case 'Home': nextIndex = 0; break;
        case 'End': nextIndex = tabs.length - 1; break;
        default: return;
    }

    event.preventDefault();
    activateTab(tabs[nextIndex], true);
});

activateTab(tabs.find(tab => tab.classList.contains('active')) || tabs[0]);
document.documentElement.classList.add('js');
