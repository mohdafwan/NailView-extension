'use strict';
const showTimer = document.querySelector('#showTimer');
const showDate = document.querySelector('#showDate');
const getDay = document.querySelector('.getTheDay');
const addLink = document.querySelector('#herfLink');
const rotateIconDEV = document.querySelector('#rotateP-DEV');
const rotateIconTAB = document.querySelector('#rotateP-TAB');
const gmaiIcon = document.querySelector('#gmail-icon');
const popUpModelDEV = document.querySelector('.pop-modelOnScreen-DEV');
const popUpModelTAB = document.querySelector('.pop-modelOnScreen-TAB');
const showModelForDev = document.querySelector('#slider-bar-tabAndwindow');
const showModelForTab = document.querySelector('#slider-bar-mouse');

const setTimer = function (invokeFoo, second) {
  return setInterval(invokeFoo, second);
};
function centerDateAndCounter() {
  const now = new Date();
  const optionTime = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const intrDateDependOnPc = Intl.DateTimeFormat(navigator.language, {
    dateStyle: 'full',
  }).format(now);
  const intrTimerDependOnPc = Intl.DateTimeFormat(
    navigator.language,
    optionTime
  ).format(now);
  const addTime = `${intrTimerDependOnPc}`;
  const addDate = `It's ${intrDateDependOnPc}`;
  showTimer.textContent = `${addTime}`.slice(0, 8);
  showDate.textContent = addDate;
}
centerDateAndCounter();
setTimer(centerDateAndCounter, 1000);
const localTimeScring = function () {
  const currentHour = new Date().getHours();
  if (currentHour >= 4 && currentHour < 12) {
    getDay.textContent = `Good Morning`;
  } else if (currentHour >= 12 && currentHour < 17) {
    getDay.textContent = 'Good Afternoon';
  } else if (currentHour >= 17 && currentHour < 21) {
    getDay.textContent = 'Good Evening';
  } else {
    getDay.textContent = 'Good Night';
  }
};
localTimeScring();
setTimer(localTimeScring, 1000);
const userDetail = (function () {
  chrome.identity.getProfileUserInfo(function (userInfo) {
    addLink.textContent = userInfo.email ? userInfo.email : 'Gmail';
    addLink.title = `Gmail  ${userInfo.email}`;
    addLink.href = 'https://mail.google.com/';
  });
})();

const tableOfContent = function (windowsChrome, macChrome, giveTheModel) {
  const table = document.createElement('table');
  const deviceToKnow = navigator.userAgent.indexOf('Win') != -1;

  try {
    let i = 0;
    while (i < windowsChrome.length || i < macChrome.length) {
      const row = document.createElement('tr');
      const colOne = document.createElement('td');
      const colTwo = document.createElement('td');
      colOne.textContent = deviceToKnow ? windowsChrome[i][1] : macChrome[i][0];
      colTwo.textContent = deviceToKnow ? windowsChrome[i][0] : macChrome[i][1];
      row.appendChild(colOne);
      row.appendChild(colTwo);
      table.appendChild(row);
      giveTheModel.appendChild(table);
      table.setAttribute('class', 'tableArea');
      i++;
    }
  } catch (error) {
    console.log();
  }
};

const shortCutModelToView = function (
  model,
  container,
  designToModel,
  winX = ['some thing wrong'],
  macX = ['some thing wrong'],
  moderToDisplay
) {
  model.addEventListener('mouseover', function (e) {
    e.preventDefault();
    container.style.opacity = 1;
    designToModel.style.rotate = '-180deg';
    model.addEventListener('mouseleave', function (e) {
      e.preventDefault();
      container.style.opacity = 0;
      designToModel.style.rotate = '-135deg';
    });
  });
  return tableOfContent(winX, macX, moderToDisplay);
};

const showerArc = function () {
  const widData = [
    ['F12', 'Open Developer Tools (Alternate Shortcut)'],
    ['Ctrl + Shift + J', 'Open Console in Developer Tools'],
    ['Ctrl + R', 'Reload the current tab'],
    ['Ctrl + Shift + R', 'Hard Reload the current tab'],
    ['Ctrl + U', 'View Page Source'],
    ['Ctrl + Shift + C', 'Toggle Element Inspection'],
    ['Ctrl + ]', 'Next Developer Tools Panel'],
    ['Ctrl + [', 'Previous Developer Tools Panel'],
    ['Ctrl + Shift + M', 'Toggle Device Mode'],
    ['Ctrl + Shift + P', 'Open Command Menu in Developer Tools'],
    ['Ctrl + Alt + I', 'Open Developer Tools (Alternate Shortcut)'],
  ];
  const macData = [
    ['Open Developer Tools (Alternate Shortcut)', 'F12'],
    ['Open Console in Developer Tools', 'Cmd + Option + J'],
    ['Reload the current tab', 'Cmd + R'],
    ['Hard Reload the current tab', 'Cmd + Shift + R'],
    ['View Page Source', 'Cmd + U'],
    ['Toggle Element Inspection', 'Cmd + Option + C'],
    ['Next Developer Tools Panel', 'Cmd + ]'],
    ['Previous Developer Tools Panel', 'Cmd + ['],
    ['Toggle Device Mode', 'Cmd + Shift + M'],
    ['Open Command Menu in Developer Tools', 'Cmd + Option + P'],
  ];
  shortCutModelToView(
    showModelForDev,
    popUpModelDEV,
    rotateIconDEV,
    widData,
    macData,
    popUpModelDEV
  );
};
const showerArcTab = function () {
  const widData = [
    ['Ctrl + N', 'New Window'],
    ['Ctrl + T', 'New Tab'],
    ['Ctrl + Shift + N', 'Open a new window in incognito mode'],
    ['Ctrl + Shift + T', 'Reopen the last closed tab'],
    ['Ctrl + W', 'Close the current tab'],
    ['Ctrl + Shift + W', 'Close the current window'],
    ['Ctrl + Tab', 'Switch to the next tab'],
    ['Ctrl + Shift + Tab', 'Switch to the previous tab'],
    ['Ctrl + 1-8', 'Switch to a specific tab (1-8)'],
    ['Ctrl + 9', 'Switch to the last tab'],
    ['Ctrl + L', 'Highlight the URL bar'],
    ['Ctrl + D', 'Bookmark the current page'],
    ['Ctrl + H', 'Open the browsing history'],
    ['Ctrl + J', 'Open the downloads page'],
    ['Ctrl + Shift + Delete', 'Open the Clear Browsing Data dialog'],
    ['Ctrl + Shift + B', 'Toggle the bookmarks bar'],
    ['Ctrl + +/-', 'Zoom in or out on the current page'],
    ['Ctrl + 0', 'Reset zoom level to default'],
  ];
  const macData = [
    ['New Window', 'Cmd + N'],
    ['New Tab', 'Cmd + T'],
    ['Open a new window in incognito mode', 'Cmd + Shift + N'],
    ['Reopen the last closed tab', 'Cmd + Shift + T'],
    ['Close the current tab', 'Cmd + W'],
    ['Close the current window', 'Cmd + Shift + W'],
    ['Switch to the next tab', 'Cmd + Tab'],
    ['Switch to the previous tab', 'Cmd + Shift + Tab'],
    ['Switch to a specific tab (1-8)', 'Cmd + 1-8'],
    ['Switch to the last tab', 'Cmd + 9'],
    ['Highlight the URL bar', 'Cmd + L'],
    ['Bookmark the current page', 'Cmd + D'],
    ['Hide Chrome (minimize)', 'Cmd + H'],
    ['Quit Chrome', 'Cmd + Q'],
    ['Find on the page', 'Cmd + F'],
    ['Find next', 'Cmd + G'],
    ['Find previous', 'Cmd + Shift + G'],
    ['Copy', 'Cmd + C'],
    ['Cut', 'Cmd + X'],
    ['Paste', 'Cmd + V'],
    ['Undo', 'Cmd + Z'],
    ['Redo', 'Cmd + Shift + Z'],
  ];
  shortCutModelToView(
    showModelForTab,
    popUpModelTAB,
    rotateIconTAB,
    widData,
    macData,
    popUpModelTAB
  );
};

showerArc();
showerArcTab();
