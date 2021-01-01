// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var speakListener = function(utterance, options, sendTtsEvent) {
  /* the current options is passed to chrome.tts.speak in
   * the background.js speak(utterance) function. The options
   * is then pass to us here.
   */
  console.log('calling speakListener');
  console.log('utterance = ' + '"' + utterance + '"');
  console.log(options);

  /* start of speech */
  let index = 0;
  sendTtsEvent({'type': 'start', 'charIndex': index});

  /* speech boundary */
  if (false){
    sendTtsEvent({'type': 'word', 'charIndex': index});
    sendTtsEvent({'type': 'sentence', 'charIndex': index});
  }

  /* end of the speech */
  index = utterance.length;
  sendTtsEvent({'type': 'end', 'charIndex': index});
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