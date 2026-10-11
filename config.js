/* Public settings only. No secrets or spreadsheet IDs. */
window.DICE_CONFIG = Object.freeze({
  gasUrl: '', // https://script.google.com/macros/s/DEPLOYMENT_ID/exec
  storageKey: 'daily-dice.identity.v1',
  pollMs: 45000,
  timeoutMs: 30000
});
