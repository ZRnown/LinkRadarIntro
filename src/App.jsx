import React from 'react'
import './App.css'
import {
  audiences,
  capabilities,
  comparisonColumns,
  deploymentChecklist,
  floatingBadges,
  marqueeItems,
  specRows,
  workflowSteps,
} from './content'
import { BadgePill } from './components/BadgePill'
import { CapabilityCard } from './components/CapabilityCard'
import { HeroRadar } from './components/HeroRadar'
import { MarqueeStrip } from './components/MarqueeStrip'
import { PageHeader } from './components/PageHeader'
import { SectionHeader } from './components/SectionHeader'
import { SiteFooter } from './components/SiteFooter'
import { SpecsTable } from './components/SpecsTable'
import { WorkflowDiagram } from './components/WorkflowDiagram'

function App() {
  return (
    <div className="site-shell">
      <PageHeader />

      <main>
        <section className="hero">
          <BadgePill className="hero-pill hero-pill-left">
            <>
              PRIVATE
              <br />
              DEPLOY
            </>
          </BadgePill>

          <BadgePill className="hero-pill hero-pill-right">
            <>
              BUY OUT
              <br />
              SYSTEM
            </>
          </BadgePill>

          <div className="hero-title-wrapper">
            <h1 className="groovy">LinkRadar</h1>
            <h2>隐秘而强大的社群引擎</h2>
            <p className="hero-copy mono">
              DISCORD 私有部署商品识别与自动回复系统。
              <br />
              一次买断，绝对掌控。
            </p>
          </div>

          <HeroRadar floatingBadges={floatingBadges} />
        </section>

        <MarqueeStrip items={marqueeItems} />

        <section className="demo-section section-banded">
          <div className="container">
            <SectionHeader title="PRODUCT DEMO" label="VIDEO PRESENTATION" />

            <div className="demo-stage">
              <div className="demo-placeholder">
                <div className="demo-play-icon">▶</div>
                <h3>系统演示视频</h3>
                <p className="mono">
                  点击播放，查看完整工作流程：从用户发图到自动识别、匹配商品、自动回复的全过程演示。
                </p>
                <p className="mono demo-note">
                  [ 视频区域 - 支持 YouTube / 本地视频嵌入 ]
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <SectionHeader title="WHO IS IT FOR?" label="TARGET AUDIENCE" />

          <div className="grid-3 audience-grid">
            {audiences.map((audience) => (
              <div className="audience-pill" key={audience}>
                <h3>{audience}</h3>
              </div>
            ))}
          </div>

          <p className="mono audience-copy">
            群里有人发图，人工回链接太慢？多账号多规则混乱？
            <br />
            轻量工具扛不住高频查图？你需要工业级引擎。
          </p>
        </section>

        <section className="container">
          <SectionHeader title="CORE ARSENAL" label="CAPABILITIES" />

          <div className="grid-2 capability-grid">
            {capabilities.map((capability) => (
              <CapabilityCard key={capability.id} capability={capability} />
            ))}
          </div>
        </section>

        <section className="container workflow-section">
          <WorkflowDiagram steps={workflowSteps} />
        </section>

        <section className="comparison-section">
          <div className="manifesto-box">
            <h2 className="manifesto-heading-back text-stroke">与其他方案的区别？</h2>
            <h2 className="manifesto-heading-front">与其他方案的区别？</h2>

            <div className="grid-2 comparison-grid">
              {comparisonColumns.map((column) => (
                <div
                  className={`comparison-card ${column.variant}`}
                  key={column.title}
                >
                  <h3>{column.title}</h3>
                  <ul>
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="badge-stamp">
              WE BUILD TOOLS.
              <br />
              YOU OWN THEM.
            </div>
          </div>

          <div className="comparison-backdrop groovy text-stroke">
            CONTROL
            <br />
            YOUR
            <br />
            DATA
          </div>
        </section>

        <section className="container deployment-section">
          <SectionHeader title="DEPLOYMENT" label="SERVER SPECS" />

          <div className="grid-2 deployment-grid">
            <div className="deployment-copy">
              <h3>硬核部署说明</h3>
              <p>
                我们提供的是武器，你需要准备自己的阵地。图像识别与多账号并发极其消耗算力，
                我们不承诺“无限账号”这种营销说法，一切取决于你的硬件。
              </p>

              <ul className="mono deployment-list">
                {deploymentChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <SpecsTable rows={specRows} />
              <p className="mono specs-note">
                * 实际消耗受群活跃度、发图频率及图片库规模影响。部署前提供专业评估。
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2 className="groovy">INITIATE SYSTEM</h2>
          <a className="cta-btn" href="#contact">
            预约演示 / 联系部署
          </a>
          <p className="mono">
            ONE-TIME FEE. PRIVATE DEPLOYMENT. HARDCORE OPERATORS ONLY.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
