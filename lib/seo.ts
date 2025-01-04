export const seo = {
  title: 'XuFei 许飛 | 数据工程师、分析师、一人公司',
  description:
    // '我叫 Cali，一名开发者，设计师，细节控，同时也是佐玩创始人，目前带领着佐玩致力于创造一个充满创造力的工作环境，同时鼓励团队创造影响世界的产品。',
    '我叫许飛，一名数据工程师，分析师，AI & Web3 爱好者',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://xufei.site'
      : 'http://localhost:3000'
  ),
} as const
