export const floatingBadges = [
  { text: '以图搜图!', className: 'bf-1' },
  { text: '多账号!', className: 'bf-2' },
  { text: '拒绝月租!', className: 'bf-3' },
  { text: '完全掌控!', className: 'bf-4' },
]

export const marqueeItems = [
  'NOT A SAAS',
  'NO MONTHLY FEES',
  'BRING YOUR OWN SERVER',
  'BUYOUT DELIVERY',
  'FULL CONTROL',
  'PRIVATE DATA',
]

export const audiences = [
  'Discord 群主',
  '代购 / 导购团队',
  'Affiliate 操盘手',
]

export const capabilities = [
  {
    id: '01',
    eyebrow: 'IMAGE RECOGNITION',
    title: '发图即刻识别',
    description:
      '接入强大的图像处理引擎。用户在群内发图，系统自动抓取、分析、提取特征。支持以图搜图与相似商品高精度匹配，告别人工查图。',
  },
  {
    id: '02',
    eyebrow: 'MULTI-ACCOUNT',
    title: '多账号矩阵管理',
    description:
      '突破单点限制。支持多 Discord 账号并行运作，统一后台调度。不同频道、不同账号可配置独立运行逻辑，满足矩阵化运营需求。',
  },
  {
    id: '03',
    eyebrow: 'RULE ENGINE',
    title: '规则驱动回复',
    description:
      '基于识别结果、关键词、频道属性设置复杂触发规则。自动回复商品链接、文案或特定引导，不同人群和场景可以走不同策略。',
  },
  {
    id: '04',
    eyebrow: 'DATA SYNC',
    title: '商品库与微店抓取',
    description:
      '内建独立商品库管理，支持微店商品数据定向抓取同步。图库与商品链接强绑定，确保搜图结果直接转化为交易链接。',
  },
]

export const workflowSteps = [
  { step: '1', title: '用户发图', label: 'DISCORD INPUT', tilt: '' },
  { step: '2', title: '图像识别', label: 'VISION ENGINE', tilt: 'tilt-right' },
  { step: '3', title: '库内匹配', label: 'MATCHING', tilt: 'tilt-left' },
  { step: '4', title: '自动回复', label: 'AUTO REPLY', tilt: '' },
]

export const comparisonColumns = [
  {
    title: 'SaaS 群发工具',
    variant: 'comparison-card-negative',
    items: [
      '随时可能封号停服',
      '按月订阅，成本失控',
      '数据暴露给第三方',
      '无商品识别能力',
    ],
  },
  {
    title: 'LinkRadar 识别引擎',
    variant: 'comparison-card-positive',
    items: [
      '私有部署，永久掌控',
      '买断制，无订阅费用',
      '数据完全私有',
      '专为 Discord 商品识别打造',
    ],
  },
]

export const deploymentChecklist = [
  '客户自备独立服务器 (VPS/独服)',
  '我方工程师提供一次性环境配置与部署',
  '源代码编译或 Docker 镜像交付',
  '买断制：部署完成即交付，无后续强制订阅',
]

export const specRows = [
  {
    size: '起步/测试',
    accounts: '1-3 个',
    specs: '4核 CPU / 8G 内存',
  },
  {
    size: '中型矩阵',
    accounts: '5-15 个',
    specs: '8核 CPU / 16G 内存',
  },
  {
    size: '重度高频',
    accounts: '20+ 账号',
    specs: '16核+ / 32G+ / 建议带 GPU 加速图像处理',
  },
]
