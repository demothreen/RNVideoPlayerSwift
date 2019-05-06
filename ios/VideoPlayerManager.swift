//
//  VideoPlayer.swift
//  RNVideoPlayerSwift
//
//  Created by Marina on 06/05/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(VideoPlayerManager)
class VideoPlayerManager: NSObject {
  @objc
  static var playing = false
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc
  func play(_ url: String) {
    VideoPlayerManager.playing = true
    print("url", url)
  }
}
