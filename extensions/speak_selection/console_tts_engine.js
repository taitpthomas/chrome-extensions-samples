// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var speakListener = function(utterance, options, sendTtsEvent) {
  console.log('calling speakListener');
};

var stopListener = function() {
  console.log('calling stopListener');
};

var removedListener = function(windowId, removeInfo) {
  console.log('calling removeistener');
};

console.log('registering ttsEngine'); 
chrome.ttsEngine.onSpeak.addListener(speakListener);
chrome.ttsEngine.onStop.addListener(stopListener);
chrome.windows.onRemoved.addListener(removedListener);
