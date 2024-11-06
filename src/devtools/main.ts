function handlePanelShown() {
  console.log('SegaMegaPanel shown')
}

function handlePanelHidden() {
  console.log('SegaMegaPanel hidden')
}

chrome.devtools.panels.create('SegaMegaPanel', '/icons/logo.svg', './panel.html', (newPanel) => {
  console.log('devtools panel create')
  newPanel.onShown.addListener(handlePanelShown)
  newPanel.onHidden.addListener(handlePanelHidden)
})
