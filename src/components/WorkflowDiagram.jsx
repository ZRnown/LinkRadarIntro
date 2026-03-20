import React from 'react'

export function WorkflowDiagram({ steps }) {
  return (
    <div className="flow-container">
      <h3 className="workflow-title">/// 工作流演算 ///</h3>
      <div className="flow-steps">
        {steps.map((step, index) => (
          <React.Fragment key={step.step}>
            <div className="flow-step">
              <div className={`flow-icon ${step.tilt}`.trim()}>{step.step}</div>
              <h4>{step.title}</h4>
              <span className="mono">{step.label}</span>
            </div>
            {index < steps.length - 1 ? <div className="flow-arrow" /> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
