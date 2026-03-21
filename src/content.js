export const floatingBadges = [
  { text: '相似度检索!', className: 'bf-1' },
  { text: '账号矩阵!', className: 'bf-2' },
  { text: '关键词识别!', className: 'bf-3' },
  { text: '实时日志!', className: 'bf-4' },
]

export const radarTargets = [
  { id: 'a1', x: 0.72, y: 0.28, phase: 0.15 },
  { id: 'b2', x: 0.27, y: 0.39, phase: 0.95 },
  { id: 'c3', x: 0.64, y: 0.69, phase: 1.75 },
  { id: 'd4', x: 0.34, y: 0.74, phase: 2.4 },
]

export const marqueeItems = [
  'IMAGE SEARCH',
  'SHOP SYNC',
  'RULE ENGINE',
  'ACCOUNT MATRIX',
  'LIVE LOGS',
  'BOT CONTROL',
]

export const audiences = [
  'Discord 群主',
  '店铺运营团队',
  '多账号矩阵团队',
]

export const capabilities = [
  {
    id: '01',
    eyebrow: 'IMAGE SEARCH',
    title: '以图搜图与相似度匹配',
    description:
      '用户在群里发图后，系统自动提取特征并做相似度检索。可按阈值筛选结果，直接命中商品链接或候选商品库，减少人工查图。',
  },
  {
    id: '02',
    eyebrow: 'SHOP SYNC',
    title: '店铺抓取与商品库同步',
    description:
      '从店铺和商品入口持续同步内容，维护本地商品库、图片库和外链映射。抓取、索引、更新都能在后台统一处理。',
  },
  {
    id: '03',
    eyebrow: 'ACCOUNT MATRIX',
    title: '账号与店铺权限绑定',
    description:
      '不同用户可绑定不同店铺，管理角色权限和可见范围。管理员能统一维护账号、用户、店铺和可操作模块。',
  },
  {
    id: '04',
    eyebrow: 'RULE ENGINE',
    title: '关键词、图片和正则回复',
    description:
      '规则支持关键词、图片相似度、正则和多种触发方式。可以按账号模式切换默认、轮换或关键词策略，回复内容也能灵活配置。',
  },
  {
    id: '05',
    eyebrow: 'FLOW CONTROL',
    title: '延迟、冷却与阈值控制',
    description:
      '全局回复延迟、图片相似度阈值、关键词冷却和批量节流都能统一配置。适合高频群聊下控制回复密度。',
  },
  {
    id: '06',
    eyebrow: 'OPS CONSOLE',
    title: '实时日志与运行监控',
    description:
      '提供 bot 启停、实时日志流、系统统计和公告管理。运营状态、抓取进度和错误反馈都能在一个控制台里看见。',
  },
]

export const workflowSteps = [
  { step: '1', title: '用户发图', label: 'DISCORD INPUT', tilt: '' },
  { step: '2', title: '特征提取', label: 'SIMILARITY VECTOR', tilt: 'tilt-right' },
  { step: '3', title: '规则与店铺匹配', label: 'MATCH ENGINE', tilt: 'tilt-left' },
  { step: '4', title: '自动回复', label: 'AUTO REPLY', tilt: '' },
]

export const comparisonColumns = [
  {
    title: '人工群运营',
    variant: 'comparison-card-negative',
    items: [
      '查图、找链接、回消息都要手工处理',
      '规则散在表格和群聊里，难以统一维护',
      '账号、店铺和权限分开管理，容易乱',
      '看不到实时日志和运行状态',
    ],
  },
  {
    title: 'LinkRadar 后台',
    variant: 'comparison-card-positive',
    items: [
      '以图搜图、店铺抓取、规则回复一套走通',
      '账号、用户、店铺和角色权限统一管理',
      '阈值、延迟、轮换和冷却集中配置',
      '实时日志、统计和公告直接可见',
    ],
  },
]

export const deploymentChecklist = [
  '账号、店铺和用户可以在一个后台里统一管理',
  'Bot 启停、日志流和运行状态可以直接查看',
  '关键词、图片、正则和阈值规则都能配置',
  '支持管理员与普通用户的权限区分',
]

export const specRows = [
  {
    size: '账号矩阵',
    accounts: '账号 / 用户 / 店铺',
    specs: '权限绑定与角色管理',
  },
  {
    size: '商品输入',
    accounts: '店铺抓取 / 商品库',
    specs: '图片、链接和外链同步',
  },
  {
    size: '回复策略',
    accounts: '关键词 / 图片 / 正则',
    specs: '默认、轮换、关键词模式',
  },
  {
    size: '运行控制',
    accounts: '日志 / 统计 / 公告',
    specs: 'Bot 启停与状态监控',
  },
]
