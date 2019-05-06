//
//  VideoPlayer.m
//  RNVideoPlayerSwift
//
//  Created by Marina on 06/05/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(VideoPlayerManager, NSObject)

RCT_EXTERN_METHOD(play: (NSString*) url)

@end
