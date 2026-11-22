export type Track={id:string;title:string;artist:string;album?:string;artwork:string;previewUrl?:string;duration?:number;source:"local"|"itunes"|"demo";fileUrl?:string};
export type LyricLine={time:number;text:string};
export type StoryEvent={time:number;kind:"weather"|"clock"|"note"|"mood"|"message"|"banner";title:string;body:string;value?:string};
export type Notice={time:number;title:string;body:string;kind:string};