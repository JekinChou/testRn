//
//  CustomSwitch.m
//  testRN
//
//  Created by zhangjie on 2018/5/23.
//  Copyright © 2018年 zhangjie. All rights reserved.
//

#import "CustomSwitch.h"
#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import <React/RCTUtils.h>
@implementation CustomSwitch
RCT_EXPORT_MODULE();//申明模块的作用
//导出方法让js可以使用
// !!!:桥接到Javascript的方法返回值类型必须是void。React Native的桥接操作是异步的，所以要返回结果给Javascript，你必须通过回调或者触发事件来进行。
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){
    RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

//回调函数导出js 一个block里面装的数组,通常第一个参数是error(没有就返回Null对象)剩下部分为使用参数
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback){
    NSArray *events = @[];
    //现在这个error对象只是一个数据结构类似error的字典,可以使用rctutils.h中的RCTMakeError来构造error,
   NSDictionary *dic = RCTMakeError(@"这是一个错误兄弟", nil, nil);
    NSLog(@"%@",dic.description);
    callback(@[[NSNull null]/*dic*/, events]);
}

//使用js的promises重构上面的回调


- (instancetype)initWithFrame:(CGRect)frame {
    if (self = [super initWithFrame:frame]) {
        self.tintColor = [UIColor redColor];
        self.onTintColor = [UIColor yellowColor];
    }
    return self;
}

@end
