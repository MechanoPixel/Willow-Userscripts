// ==UserScript==
// @name         Pixiv Muted Results Removal
// @namespace    https://mechanopixel.xyz/
// @version      0.1
// @description  more mimiga
// @author       MechanoPixel
// @match        https://www.pixiv.net/*
// @icon         https://www.google.com/s2/favicons?domain=pixiv.net
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const mutedSvg = "<path d=\"M5.26763775,4 L9.38623853,11.4134814 L5,14.3684211 L5,18 L13.0454155,18 L14.1565266,20 L5,20\nC3.8954305,20 3,19.1045695 3,18 L3,6 C3,4.8954305 3.8954305,4 5,4 L5.26763775,4 Z M9.84347336,4 L19,4\nC20.1045695,4 21,4.8954305 21,6 L21,18 C21,19.1045695 20.1045695,20 19,20 L18.7323623,20 L17.6212511,18\nL19,18 L19,13 L16,15 L15.9278695,14.951913 L9.84347336,4 Z M16,7 C14.8954305,7 14,7.8954305 14,9\nC14,10.1045695 14.8954305,11 16,11 C17.1045695,11 18,10.1045695 18,9 C18,7.8954305 17.1045695,7 16,7 Z\nM7.38851434,1.64019979 L18.3598002,21.3885143 L16.6114857,22.3598002 L5.64019979,2.61148566\nL7.38851434,1.64019979 Z\"></path>";

  let searchResultsObserver = new MutationObserver(function(mutations) {
    const illustItems = document.querySelectorAll(".sc-l7cibp-2.gpVAva");
    for (let i = 0; i < illustItems.length; i++) {
      const illustItem = illustItems[i];
      const illustThumb = illustItem.querySelector("svg");
      if (illustThumb) {
        if (illustThumb.innerHTML == mutedSvg) {
          illustItem.style.display = "none";
        }
      }
    }
  });

  function checkSearchResultsExistence() {
    let searchResults = document.querySelector('.sc-l7cibp-1.krFoBL');
    if (searchResults) {
      searchResultsObserver.observe(searchResults, {childList: true, subtree: true});
      return;
    }
    window.setTimeout(checkSearchResultsExistence, 500);
  }
  checkSearchResultsExistence();

})();
