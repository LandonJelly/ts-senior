/*
 * @Description: This file is made for
 * @Date: 2021-08-10 10:17:46
 * @LastEditTime: 2021-08-10 11:13:37
 * @Author: LeongD
 * @LastEditors: LeongD
 */

let msg = "🚀， Come one!";
console.log(`get wechat Msg`, msg);

type MessageType = "image" | "audio" | string; //微信消息类型

type Message = {
  id: number;
  type: MessageType;
  sendmessage: string;
};

let messages: Message[] = [
  //let messages: Array<Message> = [
  {
    id: 1,
    type: "image",
    sendmessage: "你好啊,今晚咱们一起去三里屯吧",
  },
  {
    id: 2,
    type: "audio",
    sendmessage: "朝辞白帝彩云间，千里江陵一日还",
  },
  {
    id: 3,
    type: "audio",
    sendmessage: "你好！张无忌",
  },
  {
    id: 4,
    type: "image",
    sendmessage: "刘老根苦练舞台绝技！",
  },
  {
    id: 5,
    type: "image",
    sendmessage: "今晚王牌对王牌节目咋样?",
  },
];

function getMessage(
  value: number | MessageType
): Message | Array<Message> | undefined {
  if (typeof value === "number") {
    return messages.find((msg) => msg.id === value);
  } else {
    return messages.filter((msg) => value === msg.type);
  }
}

let id1 = getMessage(1);
let audioType = getMessage("audio");

console.log(`object id1`, id1);
console.log(`object audioType`, audioType);
