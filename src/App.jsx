import React from 'react'
import './App.css'
import {
  audiences,
  capabilities,
  comparisonColumns,
  deploymentChecklist,
  floatingBadges,
  marqueeItems,
  radarTargets,
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
              FEATURE
              <br />
              STACK
            </>
          </BadgePill>

          <BadgePill className="hero-pill hero-pill-right">
            <>
              LIVE
              <br />
              OPS
            </>
          </BadgePill>

          <div className="hero-title-wrapper">
            <h1 className="groovy">LinkRadar</h1>
            <HeroRadar floatingBadges={floatingBadges} targets={radarTargets} />
            <h2>把 Discord 的搜图、抓取、规则和回复收进一个后台</h2>
            <p className="hero-copy mono">
              面向商品运营的识别与自动回复系统。
              <br />
              以图搜图、店铺同步、账号管理、日志监控一体打通。
            </p>
          </div>
        </section>

        <MarqueeStrip items={marqueeItems} />

        <section className="demo-section section-banded">
          <div className="container">
            <SectionHeader title="PRODUCT DEMO" label="VIDEO PRESENTATION" />

            <div className="demo-stage">
              <div className="demo-video-shell">
                <video
                  className="demo-video"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/linkradar-demo-poster.jpg"
                >
                  <source src="/linkradar-demo.mp4" type="video/mp4" />
                  你的浏览器暂不支持视频播放。
                </video>
              </div>
              <div className="demo-caption">
                <h3>功能演示视频</h3>
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
            群里有人发图，人工回链接太慢？店铺、账号和规则散在几个后台？
            <br />
            这套系统把搜索、抓取、回复和监控收成一个操作面。
          </p>
        </section>

        <section className="container">
          <SectionHeader title="FUNCTION STACK" label="CAPABILITIES" />

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
            <h2 className="manifesto-heading-back text-stroke">人工运营怎么比？</h2>
            <h2 className="manifesto-heading-front">人工运营怎么比？</h2>

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
              ONE BACKEND.
              <br />
              MANY MODULES.
            </div>
          </div>

          <div className="comparison-backdrop groovy text-stroke">
            SEARCH
            <br />
            MATCH
            <br />
            REPLY
          </div>
        </section>

        <section className="container deployment-section">
          <SectionHeader title="CONTROL SURFACE" label="ADMIN OPERATIONS" />

          <div className="grid-2 deployment-grid">
            <div className="deployment-copy">
              <h3>后台控制台</h3>
              <p>
                账号、店铺、用户、规则和监控都收拢到一个后台里。你能直接看到运行状态，
                也能在一个地方调整回复逻辑和运营节奏。
              </p>

              <ul className="mono deployment-list">
                {deploymentChecklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <SpecsTable
                headers={['模块', '覆盖内容', '价值']}
                rows={specRows}
              />
              <p className="mono specs-note">
                * 这些模块可以单独使用，也可以按你的运营方式组合起来。
              </p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2 className="groovy">INITIATE WORKFLOW</h2>
          <a className="cta-btn" href="#contact">
            立即部署
          </a>
          <p className="mono">
            SEARCH. MATCH. REPLY. MONITOR.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
