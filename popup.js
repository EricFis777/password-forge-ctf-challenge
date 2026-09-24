// Challenge build: inspect behaviour manually before reading the implementation.
const $ = (id) => document.getElementById(id);
const controls = ['lower', 'upper', 'digits', 'symbols'];
const pools = { lower: 'abcdefghijklmnopqrstuvwxyz', upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', digits: '0123456789', symbols: '!@#$%^&*' };

chrome.storage.local.get(['settings'], ({ settings }) => {
  if (!settings) return;
  $('length').value = settings.length || 16;
  controls.forEach((key) => { $(key).checked = Boolean(settings[key]); });
  $('lengthValue').textContent = $('length').value;
});

function saveSettings() {
  const settings = { length: Number($('length').value) };
  controls.forEach((key) => { settings[key] = $(key).checked; });
  chrome.storage.local.set({ settings });
}

$('length').addEventListener('input', () => {
  $('lengthValue').textContent = $('length').value;
  saveSettings();
});
controls.forEach((key) => $(key).addEventListener('change', saveSettings));

$('generate').addEventListener('click', () => {
  const length = Number($('length').value);
  const selected = controls.filter((key) => $(key).checked);
  if (!selected.length) {
    $('status').textContent = 'Select at least one character type.';
    return;
  }
  const alphabet = selected.map((key) => pools[key]).join('');
  let password = '';
  for (let i = 0; i < length; i++) password += alphabet[Math.floor(Math.random() * alphabet.length)];
  $('output').value = password;
  $('strength').textContent = 'Strength: ' + (length >= 12 && selected.length >= 3 ? 'Strong' : 'Fair');
  $('status').textContent = 'New password generated.';
});

$('copy').addEventListener('click', async () => {
  if (!$('output').value) { $('status').textContent = 'Generate a password first.'; return; }
  try {
    await navigator.clipboard.writeText($('output').value);
    $('status').textContent = 'Copied to clipboard.';
  } catch {
    $('status').textContent = 'Could not copy to clipboard.';
  }
});
