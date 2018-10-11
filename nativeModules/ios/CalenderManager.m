//
//  CalenderManager.m
//  nativeModules
//
//  Created by Matheswaaran on 11/10/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "CalenderManager.h"
#import <React/RCTLog.h>

@implementation CalenderManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(addEvent: (NSString *)name location: (NSString *)location){
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

RCT_EXPORT_METHOD(getEvents: (RCTResponseSenderBlock) callBack){
  callBack(@[@"From Native Module"]);
}

@end
