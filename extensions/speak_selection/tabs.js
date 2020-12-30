/**
 * Copyright (c) 2011 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

function sendKeyToAllTabs(keyStr) {
  chrome.windows.getAll({'populate': true}, function(windows) {
    for (var i = 0; i < windows.length; i++) {
      var tabs = windows[i].tabs;
      for (var j = 0; j < tabs.length; j++) {
        chrome.tabs.sendRequest(
            tabs[j].id,
            {'key': keyStr});
      }
    }
  });
}

/** Chrome does not load content scripts into matching pages at extension load 
 * (which includes extension updates, not just initial load). We need to
 * explicitly inject the contect_scripts into the existing tabs at load time.
 * For the newly created tab after the load time, the manifest.json is used to
 * specify which content_script will be loaded.
 */
function loadContentScriptInAllTabs() {
  chrome.windows.getAll({ 'populate': true }, function (windows) {
    for (var i = 0; i < windows.length; i++) {
      var tabs = windows[i].tabs;
      for (var j = 0; j < tabs.length; j++) {
        chrome.tabs.executeScript(
          tabs[j].id,
          { file: 'keycodes.js', allFrames: true });
        chrome.tabs.executeScript(
          tabs[j].id,
          { file: 'content_script.js', allFrames: true });
      }
    }
  });
}
